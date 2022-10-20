import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

const ordersRef = collection(db, 'orders')

export async function insert(data) {
    try {
        const response = await addDoc(ordersRef, data)
        return response.id
    } catch (error) { }
}

export default { insert }