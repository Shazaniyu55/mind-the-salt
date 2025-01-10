import { collection, query, orderBy, getDocs, CollectionReference, DocumentData, QueryConstraint, limit, Query } from "firebase/firestore";
import { db } from '@/firebase.config';

const getCommunityQuestions = async (max?: number) => {
  try {
    // Reference to the "CommunityQuestions" collection
    const colRef: CollectionReference<DocumentData> = collection(db, "CommunityQuestions");

    // Create a query to order documents by "createdAt" field in descending order
    let q: Query<DocumentData>= query(colRef, orderBy("createdAt", "desc"));

    // Limit the number of documents fetched if max parameter is provided
    if (max !== undefined) {
      q = query(q, limit(max));
    }

    // Fetch the documents
    const querySnapshot = await getDocs(q);

    // Extract data from query snapshot
    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push({
        docId: doc.id,
        ...doc.data(),
      });
    });

    return data;
  } catch (error) {
    console.error("Error getting community questions:", error);
    throw error;
  }
};

export default getCommunityQuestions;
