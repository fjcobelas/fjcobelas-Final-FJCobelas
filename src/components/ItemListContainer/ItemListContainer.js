import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
/* import { pedirDatos } from "../../helpers/pedirDatos" */
import { collection, getDocs, getFirestore} from 'firebase/firestore';
import { ItemList } from "../ItemList/ItemList"

 
export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()

    useEffect( () => {
        const db = getFirestore();

        const itemCollection = collection(db, 'items');
        
        getDocs(itemCollection, categoryId)
          .then(snapshot => {
              console.log(snapshot.docs.map(doc => { return {...doc.data(), id: doc.id}}));
          });



        /* setLoading(true)

        pedirDatos()
            .then((res) => {
                if (categoryId) {
                    setProductos( res.filter( (prod) => prod.category === categoryId ) )
                } else {
                    setProductos( res )
                }
            })
            .catch((err) => {
                alert(err)
            })
            .finally(() => {
               setLoading(false)
            }) */

    }, [categoryId])

    return (
        <>
            {
                loading 
                    ? <h2>Cargando...</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    )
}