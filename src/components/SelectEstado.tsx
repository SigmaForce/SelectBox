import { useState } from "react";
import { useEstados } from "../hooks/useEstados";
import Select from "react-select";
export const SelectEstado = ({ onChange }) => {
  const { estados } = useEstados();
  const [selectedEstado, setSelectedEstado] = useState<number | null>(null);

  const handleEstadoUpdate = (event: any) => {
    setSelectedEstado(event.value);
    const selectedUf = estados.find((e) => e.id === event.value)?.sigla;
    onChange(selectedUf);
  };

  const estadoOptions = estados.map((estado) => ({
    value: estado.id,
    label: estado.nome,
  }));
  const selectedOptionEstado = estadoOptions.find(
    (e) => e.value === selectedEstado
  );
  return (
    <Select
      placeholder="Selecione um Estado"
      options={estadoOptions}
      value={selectedOptionEstado}
      onChange={handleEstadoUpdate}
    />
  );
};
