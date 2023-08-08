import "./style.scss";
import Item from "./item";
import ITarefa from "../../types/Tarefa";

interface PropsTarefas {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Lista({ tarefas, selecionaTarefa }: PropsTarefas) {
  return (
    <aside className="listaTarefas">
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={item.id}
            id={item.id}
            completado={item.completado}
            selecionado={item.selecionado}
            tarefa={item.tarefa}
            tempo={item.tempo}
            selecionaTarefa={selecionaTarefa}
          />
        ))}
      </ul>
    </aside>
  );
}
