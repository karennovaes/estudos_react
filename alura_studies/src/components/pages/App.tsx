import React, { useState } from 'react';
import Cronometro from '../Cronometro';
import Formulario from '../Formulario';
import Lista from '../Lista';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();
  
  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}/>
      <Cronometro />
    </div>
  );
}

export default App;
