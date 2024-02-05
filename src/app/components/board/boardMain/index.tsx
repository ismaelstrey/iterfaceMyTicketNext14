import React from "react";
import BoardWrap from "./_boardWrap";
import BoardColumn from "./_boardColumn";
import Card from "../card";
import { DragDropContext } from "@hello-pangea/dnd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { atualizar, tiketApi } from "@/app/utils/api/api";
import { filtraTiketPorId, mapStatusEnumToValues } from "@/app/helper/helper";
import { Status, TiketTypes } from "@/app/@types/tiketTypes";

const Board = () => {
  const { data: tikets, isLoading } = useQuery({
    queryKey: ["tikets"],
    queryFn: tiketApi,
  });

  const queryClient = useQueryClient();

  const { mutateAsync: atualizarTicketFn } = useMutation({
    mutationFn: atualizar,
  });

  async function onDragEnd(result: any, tikets: TiketTypes[]) {
    if (!result.destination) return;

    const { destination, draggableId } = result;
    const id: number = draggableId;
    const status: Status = destination.droppableId;
    const filtrado = await filtraTiketPorId(id, tikets);
    console.log(filtrado);
    filtrado.status = status;
    const cache = await atualizarTicketFn(filtrado);
    const salvo = await atualizar(filtrado);
  }
  const status = mapStatusEnumToValues(Status);
  console.log(status)
  const RenderBoard = () =>
    status.map((l, key) => (
      <BoardColumn title={l} key={key}>
        {tikets
          ?.filter((filtra) => filtra.status === l)
          .map((lista, index) => (
            <Card
              key={lista.id}
              index={index}
              id={lista.id}
              status={lista.status}
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
