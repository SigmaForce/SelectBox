import { useState } from "react";
import { SelectCidade } from "./components/SelectCidade";
import { SelectEstado } from "./components/SelectEstado";

function App() {
  const [selectedUf, setSelectedUf] = useState("");
  return (
    <div className="App">
      <SelectEstado onChange={setSelectedUf} />
      <SelectCidade uf={selectedUf} />

      {/* 
      <select value={selectedEstado} onChange={handleEstadoUpdate}>
        {estados.map((estado) => (
          <option key={estado.id} value={estado.sigla}>
            {estado.nome}
          </option>
        ))}
      </select>
      {loadingCidades ? (
        <p>Carregando cidades... aguarde</p>
      ) : (
        <select name="" id="">
          {cidades.map((cidade) => (
            <option key={cidade.codigo_ibge}>{cidade.nome}</option>
          ))}
        </select>
      )}
     */}
    </div>
  );
}

export default App;
