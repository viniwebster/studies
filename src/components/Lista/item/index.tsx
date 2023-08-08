import React from 'react';
import ITarefa from '../../../types/Tarefa';

interface PropsItem extends ITarefa{
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa} :PropsItem) {
  return (
    <li className={`item ${selecionado ? `itemSelecionado` : ''}`} onClick={() => !completado && selecionaTarefa({
      tarefa,
      tempo,
      selecionado,
      completado,
      id
    })}>
          <h3>{tarefa}</h3>
          <span>{tempo}</span>
          {completado && ''}
    </li>
  )
}
