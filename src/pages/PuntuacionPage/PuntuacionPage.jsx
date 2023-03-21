import { CajaPuntos } from "../../components/CajaPuntos/CajaPuntos";
import { Titulo } from "../../components/Titulo/Titulo";

export const PuntuacionPage = () => {
  const style = {
    backgroundColor: "gray",
    height: "100%",
    width: "100%"
  };

  return (
    <div style={style} className="puntuacion_page">
      <Titulo posicion="center" text="React Arcade"></Titulo>
      <CajaPuntos></CajaPuntos>
    </div>
  );
};
