import React from "react";
import CardWrap from "./_cardWrap";
import CardTitle from "./_cardTitle";
import CardMain from "./_cardMain";
import CardFooter from "./_cardFooter";
import { limitarTexto } from "@/app/helper/helper";
import { Draggable } from "@hello-pangea/dnd";

interface CardPorps {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  type: string;
  prioridade?: string;
  index: number;
}

const Card = ({
  id,
  title,
  subTitle,
  description,
  type,
  prioridade,
  index,
}: CardPorps) => {
  return (
    <Draggable key={id} draggableId={id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`${snapshot.isDragging ? "opacity-50" : ""}`}
        >
          <CardWrap id={id} type={type} prioridade={prioridade}>
            <CardTitle
              id={id}
              title={title}
              subTitle={subTitle}
              type={type}
              prioridade={prioridade}
            />
            <CardMain
              description={limitarTexto(description)}
              className="hidden"
            />
            <CardFooter />
          </CardWrap>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
