"use client";
import React, { ReactNode } from "react";
import BoardTitle from "./_boardColumnTitle";
import { Droppable } from "@hello-pangea/dnd";
interface BoardColumnProps {
  title: string;
  children: ReactNode;
  setAlteraStatus?: () => void;
}

const BoardColumn = ({ title, children }: BoardColumnProps) => {
  return (
    <div className="flex flex-col border-r-2 border-solid border-white w-[22rem] h-full first:border-l-2 ">
      <BoardTitle title={title} />
      <Droppable
        droppableId={title}
        direction="vertical"
        type="COLUMN"
        key={title}
      >
        {(provided) => (
          <article
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`min-h-80 flex h-full `}
          >
            <div>{children}</div>
            {provided.placeholder}
          </article>
        )}
      </Droppable>
    </div>
  );
};

export default BoardColumn;
