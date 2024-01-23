"use client";
import React, { ReactNode, useContext, useState } from "react";
import BoardTitle from "./_boardColumnTitle";
import { TicketContext } from "@/app/context/TicketContext";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
interface BoardColumnProps {
  title: string;
  children: ReactNode;
  id: number;
  setAlteraStatus?: () => void;
}

const BoardColumn = ({ title, children, id }: BoardColumnProps) => {
  const { atualizarTicket } = useContext(TicketContext);
  const [alteraStatus, setAlteraStatus] = useState("");
  const [pegaOrigem, setPegaOrigem] = useState("");

  function onDragEnd(result: any) {
    if (!result.destination) return;
    const { source, destination } = result;
    console.log({ onDragEnd: result });
    // if (source.droppeableId !== destination.droppeableId) {
    // }
  }
  function onDragStart(result: any) {
    console.log({ onDragStart: result });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col border-r-2 border-solid border-white min-w-[10rem] min-h-[90vh] first:border-l-2 ">
        <BoardTitle title={title} />
        <Droppable
          droppableId={id.toString()}
          direction="vertical"
          type={title}
          key={title}
        >
          {(provided) => (
            <article ref={provided.innerRef} {...provided.droppableProps}>
              <div>{children}</div>
              {provided.placeholder}
            </article>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default BoardColumn;
