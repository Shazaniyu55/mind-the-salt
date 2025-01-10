import { doc, getDoc, DocumentReference, DocumentData } from "firebase/firestore";
import { db } from '../firebase.config';

export const getDocumentById = async (
  collectionName: string,
  docId: string
): Promise<any> => {
  try {
    const docRef: DocumentReference<DocumentData> = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { docId: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    throw error;
  }
};
