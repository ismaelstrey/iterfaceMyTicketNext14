export function drop(event: React.DragEvent<HTMLDivElement>, title: string) {
    event.preventDefault();

    console.log({ "ticket_status_destino": title });


}
export function drag(event: React.DragEvent<HTMLDivElement | any>) {
    //@ts-ignore
    console.log({ "id_ticket": event.target.accessKey, "ticket_status_origem": event.target.ariaDescription });

}