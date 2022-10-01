import React, { useState, useEffect } from 'react';

import CardComponent from '../CardComponent/CardComponent';
import { Link } from 'react-router-dom';
import './CardList.css';
import Spinner from '../Spinner/Spinner';

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const CardList = () => {
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log(productData);

    useEffect(() => {
        const getProduct = async () => {
            const q = query(collection(db, 'Tienda Motors'));
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
        }, 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className='Spinner'>
                    <Spinner />
                </div>
            ) : (
                <div className='CardListContainer'>
                    {productData.map((data) => {
                        return (
                            <Link to={`detail/${data.id}`} key={data.id}>
                                <CardComponent productData={data} />
                            </Link>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default CardList;
