import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { firestore } from '../firebase.config'


//saving new items
export const saveItem = async (data) => {
    await setDoc(doc(firestore, "cars", `${Date.now()}`), data, {
        merge: true,
    })
}
//get all cars
export const getAllCars = async () => {
    const items = await getDocs(
        query(collection(firestore, "cars"), orderBy("id", "desc"))
    )
    return items.docs.map((doc) => doc.data())
}