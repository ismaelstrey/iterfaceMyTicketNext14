"use client";
import React, { ReactNode, useContext, useState } from "react";
import BoardTitle from "./_boardColumnTitle";
import { TicketContext } from "@/app/context/TicketContext";
import { Droppable } from "@hello-pangea/dnd";
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




  return (

    <div className="flex flex-col border-r-2 border-solid border-white min-w-[10rem] min-h-[90vh] first:border-l-2 ">
      <BoardTitle title={title} />
      <Droppable
        droppableId={title}
        direction="vertical"
        type="COLUMN"
        key={title}
      >
        {(provided) => (
          <article ref={provided.innerRef} {...provided.droppableProps} className="h-80">
            <div>{children}</div>
            {provided.placeholder}
          </article>
        )}
      </Droppable>
    </div>
  );
};

export default BoardColumn;
