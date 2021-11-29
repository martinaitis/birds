import { db, storage } from "./firestore.config";
import { collection, getDocs } from 'firebase/firestore/lite';
import { ref, getDownloadURL } from "firebase/storage";

export async function getBirds() {
    const birdsCol = collection(db, 'birds');
    const birdsSnapshot = await getDocs(birdsCol);
    const birds = birdsSnapshot.docs.map(doc => doc.data());
    return birds;
}

export async function getBirdImageURL(imageName) {
    const imageRef = ref(storage, `birds/${imageName}.jpg`);
    const birdImageURL = await getDownloadURL(imageRef);
    return birdImageURL;
}