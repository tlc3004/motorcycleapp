// src/hooks/useAppLinks.js
import { useEffect, useState } from "react";

// ✅ asegúrate de retornar al menos un array vacío
export function useAppData() {
  const [apps, setApps] = useState([]); // <- esto ya lo tienes bien

  useEffect(() => {
    fetch("/data/apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => {
        console.error("Error cargando apps:", err);
        setApps([]); // ← en caso de error, deja vacío
      });
  }, []);

  return [apps]; // ← NO retornes undefined
}
