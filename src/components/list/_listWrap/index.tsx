import ListItem from "../_listItem"
interface ListWrapProps {
    children: React.ReactNode
}
const ListWrap = ({ children }: ListWrapProps) => {
    return (
        <ListItem />
    )
}

export default ListWrap