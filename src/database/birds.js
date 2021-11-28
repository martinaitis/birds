import db from "./firestore.config";
import { collection, getDocs } from 'firebase/firestore/lite';

export async function getBirds() {
    const birdsCol = collection(db, 'birds');
    const birdsSnapshot = await getDocs(birdsCol);
    const birdsList = birdsSnapshot.docs.map(doc => doc.data());
    return birdsList;
}