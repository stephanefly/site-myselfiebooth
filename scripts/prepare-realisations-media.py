"""Manual, reproducible exports. Requires ffmpeg/ffprobe; preserves all originals."""
import json, subprocess, sys
from pathlib import Path
manifest_path=Path('src/data/realisationsManifest.json')
manifest=json.loads(manifest_path.read_text())
image_dir=Path('public/images/realisations-showroom');image_dir.mkdir(exist_ok=True)
video_dir=Path('public/videos/realisations-showroom');video_dir.mkdir(exist_ok=True)
def run(args):subprocess.run(['ffmpeg','-hide_banner','-loglevel','error',*map(str,args)],check=True,capture_output=True)
def probe(file):
 data=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration:stream=codec_type,width,height','-of','json',str(file)]))
 video=next((s for s in data['streams'] if s['codec_type']=='video'),{})
 return dict(width=video.get('width'),height=video.get('height'),duration=float(data.get('format',{}).get('duration') or 0) or None,bytes=Path(file).stat().st_size,hasAudio=any(s['codec_type']=='audio' for s in data['streams']))
def image(file,id,at=None):
 dest=image_dir/(id+'.webp')
 run([*(['-ss',str(at)] if at is not None else []),'-i',file,'-frames:v','1','-vf',"scale='min(900,iw)':-2",'-c:v','libwebp','-quality','84','-y',dest])
 return '/'+str(dest.relative_to('public'))
for a in manifest['assets']:
 if len(sys.argv)>1 and a['id'] not in sys.argv[1:]:continue
 file=Path('public'+a['sourcePath'])
 if a['type']=='photo':
  a['src']=image(file,a['id']);a['poster']=a['src'];a['delivery']={'src':a['src'],**probe('public'+a['src'])};continue
 source=probe(file)
 if not a['duration']:a['duration']=source['duration']
 crop='crop=404:720:(iw-404)/2:0,' if source['width']==1280 and source['height']==720 else ''
 dest=video_dir/(a['id']+'.mp4')
 run([*(['-ignore_loop','1'] if a['format']=='gif' else []),'-i',file,'-map','0:v:0','-map','0:a?','-vf',crop+"scale='min(720,iw)':-2,setsar=1",'-c:v','libx264','-preset','fast','-crf','28','-maxrate','1100k','-bufsize','2200k','-r','24','-pix_fmt','yuv420p','-c:a','aac','-b:a','80k','-movflags','+faststart','-y',dest])
 a['src']='/'+str(dest.relative_to('public'))
 at=max(0,min(a['editorial']['posterAt'],source['duration']-.12))
 a['poster']=image(dest,a['id'],at)
 preview=video_dir/(a['id']+'-preview.mp4');start=max(0,min(at-1,source['duration']-6))
 run(['-ss',start,'-i',dest,'-t','6','-an','-vf',"scale='min(480,iw)':-2,setsar=1",'-c:v','libx264','-preset','fast','-crf','31','-maxrate','380k','-bufsize','760k','-r','24','-pix_fmt','yuv420p','-movflags','+faststart','-y',preview])
 a['previewSrc']='/'+str(preview.relative_to('public'));a['delivery']={'src':a['src'],**probe(dest),'posterBytes':Path('public'+a['poster']).stat().st_size,'previewBytes':preview.stat().st_size};a['variants']={}
 variants=[]
 if manifest['page']['hero']==a['id']:variants.append(('hero',min(2,source['duration']/2)))
 if manifest['page']['final']==a['id']:variants.append(('final',min(2,source['duration']/2)))
 if any(s['mediaId']==a['id'] for s in manifest['stories']):variants.append(('story',min(source['duration']-.15,at+2)))
 if a['id'] in manifest['guests']:variants.append(('guest',min(source['duration']-.15,at+.35)))
 if a['id'] in manifest['backstage']:variants.append(('backstage',min(source['duration']-.15,at+.7)))
 if any(e['mediaId']==a['id'] for e in manifest['experiences']):variants.append(('experience',min(source['duration']-.15,at+.5)))
 for name,seconds in variants:a['variants'][name]=image(dest,a['id']+'-'+name,a['editorial'].get('posterOverrides',{}).get(name,seconds))
 print(a['id'],round(a['delivery']['bytes']/1024),'KB full,',round(a['delivery']['previewBytes']/1024),'KB preview',flush=True)
manifest['preparation']={'originalFilesPreserved':True,'videoCodec':'H.264','container':'MP4','previewAudio':False,'previewMaxSeconds':6,'frameInterpolation':False,'description':'Only embedded black side bars are cropped. Posters and previews are exported from real source frames.'}
manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
