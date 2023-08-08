import React, { useState, useEffect } from 'react'
import Botao from '../Botao'
import Relogio from './Relogio'
import './style.scss'
import { tempoParaSegundos } from '../../common/utils/time';
import ITarefa from '../../types/Tarefa';

interface PropsCronometro {
  selecionado: ITarefa | undefined
  finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa } :PropsCronometro) {
  const [tempo, setTempo] = useState<number>();
  
  useEffect(() => {
    if(selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  },[selecionado])

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000)
  }

  return (
    <div className='cronometro'>
        <p className='titulo'> Escolha um card e Inicie o cronômetro </p>
        <div className='relogioWrapper'>
            <Relogio tempo={tempo}/>
        </div>
        <Botao onClick={() => regressiva(tempo)}>
            Começar!
        </Botao>
    </div>
  )
}
