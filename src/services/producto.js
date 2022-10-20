import { collection, getDoc, getDocs, query, where, doc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

const tienda = collection(db, 'Tienda Motors')

async function getAll() {
    const querySnapshot = await getDocs(tienda)
    const data = []
    querySnapshot?.forEach((doc) => {
        data?.push({ id: doc.id, ...doc.data() })
    })
    return data
}

async function getByCategory(categoryId) {
    // Create a query against the collection.
    const q = query(tienda, where('category', '==', categoryId.toLowerCase()))
    const querySnapshot = await getDocs(q)
    const data = []
    querySnapshot?.forEach((doc) => {
        data?.push({ id: doc.id, ...doc.data() })
    })
    return data
}

async function getById(id) {
    // Create a query against the collection.
    const querySnapshot = await getDoc(doc(db, 'Tienda Motors', id))
    return querySnapshot.data()
}

export const itemCollection = { getAll, getByCategory, getById }