import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardComponent from '../components/CardComponent/CardComponent';
import Spinner from '../components/Spinner/Spinner';

import { db } from '../firebase/firebaseConfig';

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from 'firebase/firestore';

const GenreType = () => {
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log(productData);

    const { category } = useParams();

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, 'Tienda Motors'), where('category', '==', category));
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
        getProducts();
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    }, [category]);

    return (
        <div>
            {isLoading ? (
                <div className='Spinner'>
                    <Spinner />
                </div>
            ) : (
                productData.map((data) => {
                    return <CardComponent ProductData={data} />;
                })
            )}
        </div>
    );
};

export default GenreType;
