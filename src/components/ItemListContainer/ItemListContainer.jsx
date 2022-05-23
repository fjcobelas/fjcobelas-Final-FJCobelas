import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';
import db from '../../services/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

  const { categoryId } = useParams()

  const [items, setItems] = useState() 
  const [load, setLoad] = useState(true) 

  const getData = async (category) =>{
    try {
      setLoad(true)
      const document = category ? query(collection(db,"items"),where('category','==',category))
                                : collection(db,"items")
      const col = await getDocs(document)
      const result = col.docs.map((doc) => doc = { id:doc.id,...doc.data()})
      setItems(result)
      setLoad(false)
    } catch (error) {
      console.log(error)
    }
  }  

  useEffect(() => {
    getData(categoryId)
  }, [categoryId])
  
  return (
    <>
      {load ? <Spinner /> : <ItemList data={items} />}
    </>
  );
};

export default ItemListContainer;
