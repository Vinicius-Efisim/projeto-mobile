import React, {useState} from "react";
import style from "./Lista.module.scss";
import Item from './Item';
import { ITarefa } from "../../Types/tarefa";

function Lista ({tarefa} : {tarefa: ITarefa[]}) {
    /*const [tarefas, setTarefas] = useState ([{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    },{
        tarefa: 'TypeScript',
        tempo: '03:00:00'
    }]);*/


    return(
        <aside className={style.listaTarefas}>
            <h2 >
                Estudos do dia
            </h2>
            <ul>
                {tarefa.map((item, index) => (
                    <Item
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;