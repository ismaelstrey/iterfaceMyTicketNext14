import React from "react";
import BoardWrap from "./_boardWrap";
import BoardColumn from "./_boardColumn";
import Card from "../card";
import { DragDropContext } from "@hello-pangea/dnd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TYPE, atualizar, tiketApi } from "@/app/utils/api/api";
import { filtraTiketPorId } from "@/app/helper/helper";

const Board = () => {
  const { data: tikets } = useQuery({
    queryKey: ["tikets"],
    queryFn: tiketApi,
  });

  const queryClient = useQueryClient();
  interface filtraTiketPorIdProps {
    id: number;
    title: string;
    prioridade: string;
    type: string;
    subTitle: string;
    description: string;
  }

  const { mutateAsync: atualizarTicketFn } = useMutation({
    mutationFn: atualizar,
  });

  async function onDragEnd(result: any, tikets: filtraTiketPorIdProps[]) {
    if (!result.destination) return;

    const { destination, draggableId } = result;
    const id: number = draggableId;
    const type: string = destination.droppableId;
    const filtrado = await filtraTiketPorId(id, tikets);

    filtrado.type = type;
    const cache = await atualizarTicketFn(filtrado);
    const salvo = await atualizar(filtrado);
  }

  const RenderBoard = () =>
    TYPE.map((l, key) => (
      <BoardColumn title={l} key={key}>
        {tikets
          ?.filter((filtra) => filtra.type === l)
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
      <DragDropContext
        onDragEnd={(result) =>
          //@ts-ignore
          onDragEnd(result, tikets)
        }
      >
        <RenderBoard />
      </DragDropContext>
    </BoardWrap>
  );
};

export default Board;
