import React from 'react'
import { useEffect, useState } from 'react'
import { getProductos,  getProductosByCategory , getProductosByTitle} from './asyncmock'
import { useParams } from 'react-router-dom'
import ItemList from '../Items/ItemList'
import style from './style.css'
import Loader from '../Loader/Loader'



const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false)
  const { titleId, categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    if(!titleId && !categoryId ){
      getProductos().then(productos => {
        setProductos(productos)
        setLoading(false)
          })
    }
    else if(titleId){
      getProductosByTitle(titleId).then(productos => {
        setProductos(productos)
        setLoading(false)
      })
    }
    
    else{
      getProductosByCategory(categoryId).then(productos => {
        setProductos(productos)
        setLoading(false)
      })
    }

  }, [titleId, categoryId])
  
  return (
    <div className={style.container}>
      {loading ? < Loader /> : <ItemList productos={productos}/> }
    </div>
  )
}

export default ItemListContainer