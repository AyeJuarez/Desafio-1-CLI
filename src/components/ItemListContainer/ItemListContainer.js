import React, { useEffect, useState } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { ItemCart } from '../ItemCart/ItemCart';


export const ItemListContainer = () => {
    const [productData, setProductData] = useState([]);
    const getProduct = async () => {
        const q = query(collection(db, "Tienda Motors"));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push ({ ...doc.data(), id: doc.id});
        });
        setProductData(docs)
    };
    useEffect(() => {
        getProduct();
    }, []);
    return (
        <div>
            {productData.map((product)=>{
                return (
                <div key={product.id}> <ItemCart producData={product} /> </div>
                );
            })}
        </div>
    )
};
