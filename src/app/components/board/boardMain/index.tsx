import React, { useContext } from "react";
import BoardWrap from "./_boardWrap";
import BoardColumn from "./_boardColumn";
import Card from "../card";
import { TicketContext } from "@/app/context/TicketContext";
import { DragDropContext } from "@hello-pangea/dnd";

const Board = () => {
  const { apiTicket, ticketType, updateTicket } = useContext(TicketContext);


  function onDragEnd(result: any) {
    if (!result.destination) return;

    const { source, destination, draggableId } = result
    const id: number = draggableId
    const destino: string = destination.droppableId
    updateTicket(id, destino, apiTicket)
  }

  const RenderBoard = () =>
    ticketType.map((l, key) => (
      <BoardColumn title={l} key={key} id={key}>
        {apiTicket
          .filter((filtra) => filtra.type === l)
          .map((lista, index) => (
            <Card
              key={lista.id}
              index={index}
              id={lista.id}
              type={lista.type}
              title={lista.title}
              subTitle={lista.subTitle}
              description={lista.description}
              prioridade={lista.prioridade}
            />
          ))}
      </BoardColumn>
    ));
  return (
    <BoardWrap>
      <DragDropContext onDragEnd={onDragEnd}>
        <RenderBoard />
      </DragDropContext>
    </BoardWrap>
  );
};

export default Board;
