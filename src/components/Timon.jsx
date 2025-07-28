import React, { useState, useEffect } from "react";
import './Timon.css';

export default function Timon({ rotacion }) {
  const [entrar, setEntrar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setEntrar(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`timon-container ${entrar ? 'timon-entrar' : ''}`}
      style={{
        transform: `translate(-50%, -50%) rotate(${rotacion}deg)`,
        transition: "transform 5s ease"
      }}
    >
      <img src="/images/motosbg2.png" alt="timon de moto" className="timon-img" />
    </div>
  );
}
