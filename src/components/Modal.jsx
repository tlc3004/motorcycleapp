import React, { useEffect } from "react";
import './Modal.css';

export default function Modal({ visible, onClose, contenido, imagenes = [], lado = "right", sonido }) {
  useEffect(() => {
    if (visible && sonido) {
      const audio = new Audio(sonido);
      audio.volume = 0.5;
      audio.play().catch((err) => console.error("No se pudo reproducir el sonido del modal:", err));
    }
  }, [visible, sonido]);

  if (!visible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-content modal-${lado}`} onClick={(e) => e.stopPropagation()}>
        <button className="cerrar" onClick={onClose}></button>

        <div className="contenido">
          {contenido}

          {/* Ruedas decorativas */}
          <img src="/images/rueda.png" alt="rueda" className="rueda" />
          <img src="/images/rueda.png" alt="rueda" className="rueda1" />

          {/* Imágenes dinámicas */}
          <div className="contenido-imagenes">
            {imagenes.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`modal-img-${index}`}
                className="imagen-modal"style={{backgroundSize:"40%"}}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
