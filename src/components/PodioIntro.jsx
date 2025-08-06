import { useRef } from "react";
import './PodioIntro.css';

export default function PodioIntro({ onStart, sonido = '/sounds/sfx-motorcycle-doppler.mp3' }) {
  const audio = useRef(null);

  const handleStart = () => {
    if (audio.current) {
      const play = audio.current.play(); // 🔊 Reproducir sonido sin bloquear

      if (play instanceof Promise) {
        play.catch(error => {
          console.error("No se pudo reproducir el sonido:", error);
        });
      }
    }

    // 🚀 Iniciar animación inmediatamente (sin esperar)
    onStart();
  };

  return (
    <div className="podio-overlay">
      <div>
        <h1>Bienvenido al Podio 🏁GP🏍️</h1>
        <button className="btn" onClick={handleStart}>Entrar</button>
        <audio ref={audio} src={sonido} preload="auto" />
      </div>
    </div>
  );
}
