import { useRef } from "react";
import './PodioIntro.css';

export default function PodioIntro({ onStart, sonido}) {

  const audio = useRef(null)

const handleStart = () => {
  if(audio.current){
      audio.current?.play(); 
  }     // ✅ Esto sí hace sonar
  onStart();                  // ✅ Luego inicia la app
};

  return (
    <div className="podio-overlay">
      <div >
        <h1> Bienvenido al Podio 🏁GP🏍️ </h1>
        <button onClick={handleStart}>Entrar</button>
        <audio ref={audio} src={sonido} preload="auto"/>
      </div>
    </div>
  );
}
