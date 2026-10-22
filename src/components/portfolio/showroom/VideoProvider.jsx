import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  automaticPlaybackAllowed,
  createPlaybackCoordinator,
} from "./model.mjs";
const VideoContext = createContext(null);
export function VideoProvider({ children }) {
  const allowed = useRef(false);
  const [policy, setPolicy] = useState({ automatic: false, hover: false });
  const coordinator = useMemo(
    () => createPlaybackCoordinator(() => allowed.current && !document.hidden),
    [],
  );
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const connection = navigator.connection;
    const update = () => {
      const automatic = automaticPlaybackAllowed({
        reducedMotion: motion.matches,
        saveData: connection?.saveData,
        effectiveType: connection?.effectiveType,
      });
      allowed.current = automatic;
      setPolicy({ automatic, hover: pointer.matches });
      if (!automatic) coordinator.pauseAll();
    };
    const visibility = () => {
      if (document.hidden) coordinator.pauseAll();
    };
    update();
    motion.addEventListener?.("change", update);
    pointer.addEventListener?.("change", update);
    connection?.addEventListener?.("change", update);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      motion.removeEventListener?.("change", update);
      pointer.removeEventListener?.("change", update);
      connection?.removeEventListener?.("change", update);
      document.removeEventListener("visibilitychange", visibility);
      coordinator.pauseAll();
    };
  }, [coordinator]);
  const value = useMemo(
    () => ({ ...policy, coordinator }),
    [policy, coordinator],
  );
  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
}
export const useVideoPolicy = () => useContext(VideoContext);
