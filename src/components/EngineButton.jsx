import { useState } from "react";
import { useSpring, animated as Animated } from "@react-spring/web";
import './EngineButton.css';

export default function EngineButton({ onClick, children, sonido, delay = 1800 }) {
  const [isPressed, setIsPressed] = useState(false);

  const styles = useSpring({
    transform: isPressed ? 'scale(0.75) translateY(1px)' : 'scale(1) translateY(0)',
    config: { tension: 200, friction: 10 },
  });

  const handleClick = () => {
    if (sonido) {
      const audio = new Audio(sonido);
      audio.volume = .9;
      audio.play().catch(err => console.error("Error al reproducir sonido:", err));
    }

    setIsPressed(true);

    setTimeout(() => {
      setIsPressed(false);
      if (onClick) onClick();
    }, delay);
  };

  return (
    <Animated.button
      className="engine-button"
      onClick={handleClick}
      style={styles}
    >
      {children}
    </Animated.button>
  );
}
