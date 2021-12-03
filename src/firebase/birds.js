import { db, storage } from "./firestore.config";
import { collection, doc, setDoc, getDocs } from 'firebase/firestore/lite';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const birdsColRef = collection(db, 'birds');

export async function getRandomBirds(limit) {
    const birdsSnapshot = await getDocs(birdsColRef);
    const birds = birdsSnapshot.docs.map(doc => doc.data());
    if (birds.length < limit - 1) {
        limit = birds.lenght;
    }

    const randomBirds = birds
    .map(x => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(a => a.x)
    .slice(0, limit);

    return randomBirds;
}

export async function uploadBirdImage(image, name) {
    const newImageRef = ref(storage, 'birds/' + image.name);

    await uploadBytes(newImageRef, image);
    await setBirdDoc(newImageRef, name);
}

async function setBirdDoc(imageRef, name) {
    const newDocRef = doc(db, 'birds/' + name);
    const birdImageURL = await getDownloadURL(imageRef);
    const newDocData = {
        imagePath: birdImageURL,
        name: name
    }
    await setDoc(newDocRef, newDocData);
}