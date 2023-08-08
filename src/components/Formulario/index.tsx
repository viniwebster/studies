import React, { useState } from "react";
import Botao from '../Botao';
import './style.scss'
import ITarefa from "../../types/Tarefa";
import { v4 as uuidv4 } from 'uuid';

interface PropsSetTarefas{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Formulario({setTarefas} :PropsSetTarefas) {

  let initial = {
    tarefa: "",
    tempo: "00:00:00"
  }
  const [tarefa, setTarefa] = useState(initial)


  function adicionarTarefa(evento :React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas(tarefasAntigas => [...tarefasAntigas, 
      {...tarefa, 
        selecionado: false, 
        completado: false,
        id: uuidv4()
      }]);
      
    setTarefa(initial)
  }

  return (
    <form className='novaTarefa' onSubmit={evento => adicionarTarefa(evento)}>
        <div className='inputContainer'>
            <label htmlFor='tarefa'>
                Adicione um novo estudo
            </label>
            <input 
              type='text' 
              name='tarefa' 
              id='tarefa' 
              placeholder='O que voce quer estudar' 
              value={tarefa.tarefa}
              onChange={(evento) => setTarefa({tarefa: evento.target.value, tempo: tarefa.tempo})}
              required/>
        </div>
        <div className='inputContainer'>
        <label htmlFor='tempo'>
                Adicione um novo estudo
            </label>
            <input 
              type='time' 
              name='tempo'
              id='tempo' 
              min="00:00:00" 
              max="01:30:00" 
              value={tarefa.tempo} 
              onChange={evento => setTarefa({ tarefa: tarefa.tarefa , tempo: evento.target.value})}
              required/>
            <Botao type='submit'>
              Adicionar
            </Botao>
        </div>
    </form>
  )
}
