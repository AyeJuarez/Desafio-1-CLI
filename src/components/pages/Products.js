import React from 'react'
import { ItemListContainer } from '../../components/ItemListContainer'
import { useParams } from 'react-router-dom'


const Products = () => {
    const { categoryId, titleId } = useParams()


    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row justify-content-center'>
                    <br /> <br />
                    
                    <ItemListContainer categoryId={categoryId} titleId={titleId}/>
                    

                </div>
            </div>
        </div>
    )
}

export default Products