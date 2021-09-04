import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const {id} = useParams();

  return (
    <div className="container">
      <ul className="product-list row">
        <li key={id} className="product-item col-medium-3">
            <img src="https://picsum.photos/id/237/300/300" alt="product" />
          <h4 className="product-name">Product {id}</h4>
          <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button type="button">Add to cart</button>
        </li>
      </ul>
    </div>
  );
}

export default ProductDetail;
