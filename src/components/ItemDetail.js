import React,{useState,useEffect} from "react";

import {useParams} from "react-router-dom";

const ItemDetail=()=>{

  let {id} = useParams(); // destructure
  let [currId,setCurrId]= useState();

  useEffect(()=>{
    setCurrId(id)
  },[id]);

  return (
    <div>
      {
        currId &&

        <div>
          <h1>Item {currId}</h1>
          <p>Description for Item {currId}</p>
        </div>
      }
    </div>
  )
}
export default ItemDetail;