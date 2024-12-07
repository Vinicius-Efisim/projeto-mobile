import { ITarefa } from '../../Types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';
interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}
export default function Lista({ tarefas, selecionaTarefa }: Props) { /* Array<ITarefa> */
    /*o array tem dois índices, tarefas, que são as tarelas e o
    setTarefas que é uma função que muda o estado do array */
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                        selecionado={item.selecionado} // aqui
                        completo={item.completo}
                        id={item.id}
                    />
                ))}
            </ul>
        </aside>
    )
}
