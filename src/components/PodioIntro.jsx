import { useRef, useState } from 'react';
import './PodioIntro.css';

export default function PodioIntro({ onStart }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMoto, setShowMoto] = useState(false);
  const audioRef = useRef(null);

  const handleStart = () => {
    setShowConfetti(true);
    setShowMoto(true);
    audioRef.current?.play();
    setTimeout(() => {
      onStart(); // abre la app
    }, 3000); // espera que todo termine
  };

  return (
    <div className="podio-overlay">
      <img src="/images/podio.jpg" className="podio-bg" alt="Podio" />
      
      <div className="podio-content">
        <h1>🏆 Bienvenido al Podio TUMAKI GP 🏍️</h1>
        <button onClick={handleStart}>🏁 Entrar al Pit</button>
      </div>

      {showConfetti && <div className="confetti" />}
      {showMoto && <img src="/images/moto.png" className="moto" />}

      <audio ref={audioRef} src="/sounds/engine.mp3" preload="auto" />
    </div>
  );
}
