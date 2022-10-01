import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './styles.module.css';
import CardComponent from '../../components/CardComponent/CardComponent';
import Spinner from '../../components/Spinner/Spinner';

import { db } from '../../firebase/firebaseConfig';

// FIRBASE - FIRESTORE
import {
    collection,
    query,
    getDocs,
    documentId,
    where,
} from 'firebase/firestore';

const ItemDetail = () => {
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log(productData);

    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const q = query(collection(db, 'Tienda Motors'), where(documentId(), '==', id));
            const docs = [];
            const querySnapshot = await getDocs(q);
            // console.log('DATA:', querySnapshot);
            querySnapshot.forEach((doc) => {
                // console.log('DATA:', doc.data(), 'ID:', doc.id);
                docs.push({ ...doc.data(), id: doc.id });
            });
            // console.log(docs);
            setProductData(docs);
        };
        getProduct();
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    }, [id]);

    return (
        <div>
            {isLoading ? (
                <div className='Spinner'>
                    <Spinner />
                </div>
            ) : (
                productData.map((data) => {
                    return <CardComponent productData={data} />;
                })
            )}
        </div>
    );
};

export default ItemDetail;
