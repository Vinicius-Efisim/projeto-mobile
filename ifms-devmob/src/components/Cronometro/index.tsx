import Botao from "../Botao";
import style from "./cronometro.module.scss";
import Relogio from "./Relogio";

export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o crônometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao
                texto="Começar!"
            />
        </div>
    )
}