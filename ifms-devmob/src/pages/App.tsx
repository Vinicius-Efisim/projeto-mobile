import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista/Lista';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { useState } from 'react';
import { ITarefa } from '../Types/tarefa';

function App() {
  const [tarefa, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className = {style.AppStyle}>
      <Formulario setTarefas = {setTarefas}/>
      <Lista tarefa = {tarefa}/>
      <Cronometro />
    </div>
  );
}

export default App;
