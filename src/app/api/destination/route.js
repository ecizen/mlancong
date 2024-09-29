import {db} from '../../../../lib/firebase'

import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

export async function POST(req) {
    const {name,  category, location, image} = await req.json();

    try {

        const docRef = await addDoc(collection(db, 'destinations'), {
            name,
            category,
            location,
            image
        });

        return new Response(JSON.stringify({ id: docRef.id, message: 'Destination added successfully!' }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
          });
        } catch (error) {
          return new Response(JSON.stringify({ error: 'Failed to add product', details: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          });
        }
}

export async function GET(req) {
    try {
        const querySnapshot = await getDocs(collection(db, 'destinations'));
        const destinations = [];
        querySnapshot.forEach((doc) => {
            const destinationData = doc.data();
            destinations.push({
                id: doc.id,
                name: destinationData.name,
                category: destinationData.category,
                location: destinationData.location,
                image: destinationData.image
            });
        });
        return new Response(JSON.stringify(destinations), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch destinations', details: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
