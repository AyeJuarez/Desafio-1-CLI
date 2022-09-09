import { useState, useEffect } from 'react'
import { getProductosById} from './asyncmock';
import ProductDetail from './ProductDetail';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';


const ProductDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const { productId } = useParams();

    useEffect(() => {
        setLoading(true)
        getProductosById(productId)
            .then(product => {
                setProduct(product)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, [productId])

    return (
        <div>
            {loading ? <Loader /> : product && <ProductDetail product = {product} />}
        </div>
    )
}

export default ProductDetailContainer