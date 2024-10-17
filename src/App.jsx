import './App.css'
import { getFirestore,collection,addDoc } from 'firebase/firestore'
import {app} from './firebase'
const firestore = getFirestore(app);
function App() {

  const writeData = async () => {
   const result =  addDoc(collection(firestore,'cities'), {
      name : "Faisalabad",
      pinCode : 1346,
      Area : 1234566,
    })

    console.log(`result ${result}`)
  }

  return (
    <>
    <h1>Firebase Firestore</h1>  
    <button onClick={writeData}>Put Data</button>  
    </>
  )
} 

export default App
