import { cursorTo } from 'readline';
import { ITarefa } from '../../../Types/tarefa';
import style from './item.module.scss';
interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}
export default function Item({ tarefa, tempo, selecionado,
    completo, id, selecionaTarefa }: Props) {
    console.log('item atual: ', {
        tarefa, tempo, selecionado,
        completo, id
    })
    return (
        <li
            className={`${style.item} ${selecionado ?
                style.itemSelecionado : ''}`} //``não é aspas simples, é crase
            onClick={() => selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completo,
                    id
                }
            )}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}
