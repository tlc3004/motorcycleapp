import React, { useEffect } from "react";
import './Timon.css';

export default function Timon({ rotacion }) {

  useEffect(() => {
    fetch("/data/sonidos.json")
      .then((res) => res.json())
      .then((data) => {
        const audio = new Audio(
          data.find(s => s.sonido.includes("motorcycle-starting-sound.mp3")).sonido
        );
        audio.play();
      });
  }, []);

    return(
        <div className="timon-container"
        style={{
            transform:`translate(-50%, -50%) rotate(${rotacion}deg)`,
            transition: "transform .9s ease"
        
        }}
        sonido="motorcycle-starting-sound.mp3"
        >
            <img src="/images/motosbg2.png" alt="timon de moto" className="timon-img"/>
        </div>
    );
}