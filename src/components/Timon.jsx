import React from "react";
import './Timon.css'




export default function Timon({rotacion}){

    return(
        <div className="timon-container"
        style={{
            transform:`translate(-50%, -50%) rotate(${rotacion}deg)`,
            transition: "transform .9s ease"
        }}
        >
            <img src="/images/motosbg2.png" alt="timon de moto" className="timon-img"/>
        </div>
    );
}