import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const f1 = (n = 1) => {
    return n + 1;
  };

  const handleAgregarLista = (color, idx) => {
    setData((prev) => {
      return [...prev, { id: idx, color, nombre: input }];
    });

    setInput("");
  };
  const resultado = f1(4);
  console.log({ resultado });

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleAgregarLista("red", data.length + 1)}>
        cambiar color 1
      </button>
      <button onClick={() => handleAgregarLista("green", data.length + 1)}>
        cambiar color 2
      </button>

      {data?.map((item) => (
        <button key={item.id} style={{ backgroundColor: item.color }}>
          {item.nombre} {item.id}
        </button>
      ))}
    </>
  );
}

export default App;
