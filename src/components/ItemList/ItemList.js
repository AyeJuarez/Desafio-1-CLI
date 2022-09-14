import { Item } from '../Item'

const ItemList = ({ items }) => {
    return (
        <>
            {items ? (
                items.map((item) => {
                    return <Item key={item.id} data={item} />
                })
            ) : (
                // Mensaje que se mostrara en caso de que falle el fetch 
                <p>Error al cargar los datos. Revisar Fetch</p>
            )}
        </>
    )
}
export default ItemList
