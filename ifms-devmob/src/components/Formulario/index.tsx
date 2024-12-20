import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { ITarefa } from '../../Types/tarefa';
import { v4 as uuidv4 } from 'uuid'; 

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }
    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefassAntigas =>
            [
                ...tarefassAntigas,
                {
                    ...this.state,
                    selecionado: false,
                    completo: false,
                    id: uuidv4()
                }
            ]
        ); //aqui 2
        this.setState({ //aqui 1
            tarefa: "",
            tempo: "00:00"
        })
    }
    render() {
        return (
            <form className={style.novaTarefa}
                onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="terefa">
                        Adicione um novo estudo:
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({
                            ...this.state, tarefa: evento.target.value
                        })}
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo:
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        value={this.state.tempo}
                        onChange={evento => this.setState({
                            ...this.state, tempo: evento.target.value
                        })}
                        id="tempo"
                        min="00:00:00"
                        max="05:00:00"
                        required
                    />
                </div>
                <Botao
                    type="submit"
                    texto="Adicionar"
                />
            </form>
        )
    }
}
export default Formulario;