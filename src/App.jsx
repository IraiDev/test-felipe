import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const handleAgregarLista = (color, idx) => {
    setData((prev) => {
      return [...prev, { id: idx, color, nombre: input }];
    });

    setInput("");
  };

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
        <div key={item.id} style={{ backgroundColor: item.color }}>
          {item.nombre} {item.id}
        </div>
      ))}
    </>
  );
}

export default App;
