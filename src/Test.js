import { useState, useEffect } from "react";

function Test() {
  const [count, setCount] = useState(0);

  console.log("🎨 Renderizando componente...");

  useEffect(() => {
    console.log("🔄 useEffect ejecutado después del render", count);
  }, [count]);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
export default Test;