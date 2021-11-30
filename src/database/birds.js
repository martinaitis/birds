import { db, storage } from "./firestore.config";
import { collection, doc, setDoc, getDocs } from 'firebase/firestore/lite';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function getBirds() {
    const birdsCol = collection(db, 'birds');
    const birdsSnapshot = await getDocs(birdsCol);
    const birds = birdsSnapshot.docs.map(doc => doc.data());
    return birds;
}

export async function uploadBirdImage(image, name) {
    const imageRef = ref(storage, 'birds/' + name);
    await uploadBytes(imageRef, image);

    const docRef = doc(db, 'birds/' + name);
    const birdImageURL = await getDownloadURL(imageRef);
    const docData = {
        imagePath: birdImageURL,
        name: name,
        points: 8
    }
    await setDoc(docRef, docData);
}
