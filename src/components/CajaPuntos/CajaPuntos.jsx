import { ListaPuntuaciones } from "../ListaPuntuacioines/ListaPuntuaciones";
import { PaginaPuntos } from "../PaginaPuntos/PaginaPuntos";
import "./CajaPuntos.css";

export const CajaPuntos = () => {
  const puntuaciones = [
    {
      puntos: 1500,
      iniciales: "XAS",
    },
    {
      puntos: 1000,
      iniciales: "RAF",
    },
    {
      puntos: 900,
      iniciales: "MSP",
    },
    {
      puntos: 1300,
      iniciales: "SRR",
    },
    {
      puntos: 1400,
      iniciales: "GBB",
    },
  ];

  return (
    <div className="caja_puntos_container">
      <div className="caja_puntos_columna_1">
        <PaginaPuntos reverse></PaginaPuntos>
      </div>
      <div className="caja_puntos_columna_2">
        <ListaPuntuaciones puntuaciones={puntuaciones}></ListaPuntuaciones>
      </div>
      <div className="caja_puntos_columna_3">
        <PaginaPuntos></PaginaPuntos>
      </div>
    </div>
  );
};
