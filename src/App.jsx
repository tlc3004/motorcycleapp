import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Timon from "./components/Timon";
import EngineButton from "./components/EngineButton";
import "./App.css";

function App() {
  const [rotacion, setRotacion] = useState(0);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [contenidoModal, setContenidoModal] = useState("");
  const[ladoModal, setLadoModal] = useState("right");
  const[ precio,setPrecio]=useState("")

  const[productos, setProductos]=useState({cascos: [], modelos:[], guantes:[], trajes:[]});

  const [imagenesModal, setImagenesModal] = useState([]);


  useEffect(() =>{
    fetch("/data/productos.json")
    .then((res) => res.json())
    .then((data) => setProductos(data))
  },[])


const opciones = [
  {
    nombre: "/logos/modelo.png",
    precio: "",
    angulo: -30,
    lado: "left",
    tipo: "modelos",
    sonido: "/sounds/motorcycle-engine.mp3"
  },
  {
    nombre: "/logos/casco.png",
    precio: "",
    angulo: -20,
    lado: "left",
    tipo: "cascos",
    sonido: "/sounds/motorcycle-engine-2.mp3"
  },
  {
    nombre: "/logos/guantes.png",
    precio: "",
    angulo: 20,
    lado: "right",
    tipo: "guantes",
    sonido: "/sounds/motorcycle-engine-2.mp3"
  },
  {
    nombre: "/logos/traje.png",
    precio: "",
    angulo: 30,
    lado: "right",
    tipo: "trajes",
    sonido: "/sounds/motorcycle-engine.mp3"
  }
];


const handleClick = (opcion) => {
  setRotacion(opcion.angulo);

  setContenidoModal(opcion.tipo);
  setPrecio(productos[`precio_${opcion.tipo}`] || 0)
  setLadoModal(opcion.lado || "right");
  setImagenesModal(productos[opcion.tipo] || []); 
  // Aquí sí funciona
  setMostrarModal(true);

  setTimeout(() => setRotacion(0), 3000);
};


  return (
    <div className="app">
      <h1>MOTOR SHOW</h1>
      <Timon rotacion={rotacion} />
      <div className="opciones">
  {opciones.map((opcion, i) => (
    <EngineButton 
      key={i}
      sonido={opcion.sonido} 
      onClick={() => handleClick(opcion)}
    >
      <div className="logos">
        <img 
          src={opcion.nombre} 
          alt={opcion.tipo} 
          precio={precio}
          className="logo-icono" 
        />
        <span className="nombre-logo">
          {opcion.tipo}
        </span>
      </div>
    </EngineButton>
  ))}
</div>


 <Modal
  visible={mostrarModal}
  onClose={() => setMostrarModal(false)}
  imagenes={imagenesModal}
  contenido={contenidoModal}
  precio={precio}  
  lado={ladoModal}
  sonido="/sounds/sfx-motorcycle-doppler.mp3"
/>



    </div>
  );
}

export default App;
