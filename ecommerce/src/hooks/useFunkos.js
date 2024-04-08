import { useEffect, useState } from 'react'

// import required modules
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/config'

export function useFunkos() {
   
    const [funkoCard, setFunkoCard] = useState([]);
    const [loading, setLoading] = useState(false);
    const [swipperReady, setSwipperReady] = useState(false);

    useEffect (()=>{

        const getFunkos = async () =>{
            
            setLoading(true);

            try{
                const productRef = collection(db, "funkos");
                const querySnapshot = await getDocs(productRef);
                const products = []
                querySnapshot.forEach((doc) => {
                    products.push({ ...doc.data(), id: doc.id });
                });
                setFunkoCard(products)
            } catch (error){
                console.error('error al traer los funkos: ', error)
            } finally{
                setLoading(false);
                setSwipperReady(true);
            }
        }

        getFunkos();
    }, [])
  
    return { funkoCard, loading, swipperReady }
}

export default useFunkos