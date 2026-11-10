export default function TemplatePersonalization() {
  return (
    <section className="template-personalization" aria-labelledby="template-personalization-title">
      <div className="template-personalization-inner">
        <p className="template-personalization-eyebrow">Création incluse dans le tarif de votre animation photo</p>
        <h2 id="template-personalization-title">Votre idée. Votre cadre photo sur mesure.</h2>
        <p>Décrivez exactement vos envies : thème, couleurs, textes, logo et inspirations. Notre designer crée votre template (cadre photo) à l’aide de notre IA spécialisée en templates.</p>
        <p>Cette création sur mesure est incluse dans le tarif de votre animation photo. Écrivez-nous directement pour préparer votre création.</p>
        <a href="mailto:contact@myselfiebooth-paris.fr">Nous décrire vos envies</a>
      </div>
      <style jsx>{`
        .template-personalization { padding: 40px 24px; background: #111310; color: #f7f4ec; border-top: 1px solid #35372d; }
        .template-personalization-inner { max-width: 1120px; margin: 0 auto; }
        .template-personalization-eyebrow { color: #d6b774; font-size: 13px; font-weight: 700; }
        h2 { margin: 8px 0 16px; font-size: clamp(1.5rem, 3vw, 2rem); color: #f7f4ec; }
        p { max-width: 800px; font-size: 16px; line-height: 1.7; }
        a { display: inline-flex; align-items: center; min-height: 44px; color: #ecd29a; text-decoration: underline; font-weight: 600; }
        a:focus-visible { outline: 2px solid #ecd29a; outline-offset: 4px; }
        @media print { .template-personalization { break-inside: avoid; color: #111; background: #fff; } h2, a, .template-personalization-eyebrow { color: #111; } }
      `}</style>
    </section>
  );
}
