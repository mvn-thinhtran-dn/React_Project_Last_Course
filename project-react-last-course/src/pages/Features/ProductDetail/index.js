import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firebaseData from '../../../Firebase'

const ProductDetail = () => {
  const {id} = useParams();
  const [prods, setProds] = useState([]);
  useEffect(() => {
    firebaseData.collection('products').onSnapshot(snapshot => {
      snapshot.docs.map(doc => {
        if(id === doc.id){
          setProds(doc.data())
        }
      })
    })
    console.log(prods);
  }, [])

  return (
    <div className="container">
      <ul className="product-detail-list row">
        <li key={id} className="product-detail-item">
            <img src={`${prods.image}`} alt="product" />    
        </li>
        <li className="product-information-item">
          <div>
            <label>Product Name: </label>
            <h4 className="product-name">{prods.name}</h4>
          </div>
          <div>
            <label>Product Description: </label>
            <p className="product-desc">{prods.desc}</p>
          </div>
          <div>
            <label>Product Price: </label>
            <p className="product-price">{prods.price} VND</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProductDetail;
