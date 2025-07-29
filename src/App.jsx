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
  const[ setPrecio]=useState("")

  const[productos, setProductos]=useState({cascos: [], modelos:[], guantes:[], trajes:[]});
  const[ setLogos]=useState([]);
  const [imagenesModal, setImagenesModal] = useState([]);


  useEffect(() =>{
    fetch("/data/productos.json")
    .then((res) => res.json())
    .then((data) => setProductos(data))
  },[])

  useEffect(() =>{
    fetch("/data/logos.json")
    .then((res) => res.json())
    .then((data) => setLogos(data))
  },[])

const opciones = [
  {
    nombre: "/logos/modelo.png",
    precio: 300,
    angulo: -30,
    lado: "left",
    tipo: "modelos",
    sonido: "/sounds/motorcycle-engine.mp3"
  },
  {
    nombre: "/logos/casco.png",
    precio: 300,
    angulo: -20,
    lado: "left",
    tipo: "cascos",
    sonido: "/sounds/motorcycle-engine-2.mp3"
  },
  {
    nombre: "/logos/guantes.png",
    precio: 300,
    angulo: 20,
    lado: "right",
    tipo: "guantes",
    sonido: "/sounds/motorcycle-engine-2.mp3"
  },
  {
    nombre: "/logos/traje.png",
    precio: 300,
    angulo: 30,
    lado: "right",
    tipo: "trajes",
    sonido: "/sounds/motorcycle-engine.mp3"
  }
];


const handleClick = (opcion) => {
  setRotacion(opcion.angulo);
  setContenidoModal(opcion.tipo);
  setPrecio(opcion.precio)
  setLadoModal(opcion.lado || "right");
  setImagenesModal(productos[opcion.tipo] || []); 
  // Aquí sí funciona
  setMostrarModal(true);

  setTimeout(() => setRotacion(0), 5000);
};


  return (
    <div className="app">
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
  contenido={<h2>{contenidoModal}</h2>}
  precio={<h3>{opciones.precio}</h3>}
  lado={ladoModal}
  sonido="/sounds/sfx-motorcycle-doppler.mp3"
/>


    </div>
  );
}

export default App;
