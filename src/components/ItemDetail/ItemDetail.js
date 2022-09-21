import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import {ItemCount} from "../ItemCount/ItemCount";
import './styles.module.css';


export const ItemDetail = ({item}) => {
    const { addItem } = useContext(CartContext)
    const [product, setProduct] = useState(false)
    return (
        <article>
            <h1>{item.title}</h1>
            <div className="card-detail">
                <div className="card-detail-left">
                    <img src={item.img} alt={item.title} className="img" />
                </div>
                <div className="card-detail-right">
                    <p>{item.description}</p>
                    <p className="price">${item.price}</p>
                    <p>Stock: {item.stock}</p>
                    {product ? (
                        <Link to='/cart'>
                            <button>
                                Ir al carrito
                            </button>
                        </Link>
                    ) : (
                        <ItemCount
                            item={item}
                            stock={item.stock}
                            initial={1}
                            onAdd={addItem}
                            setProduct={setProduct}
                        />
                    )}
                </div>
            </div>
        </article>
    )
}
