import style from "./Botao.module.scss";

interface Props {
  onClick?: () => void;
  texto: string;
  type?: "button" | "submit" | "reset" | undefined;
}

function Botao({ onClick, texto, type }: Props) {
  return (
    <button
      type={type ? type : "button"}
      className={style.botao}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}
export default Botao;
