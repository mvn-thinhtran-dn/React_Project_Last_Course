import React, {useState, useEffect} from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeroBanner from '../../../components/HeroBanner';
import { useDispatch } from 'react-redux';
import { toggle } from '../../../store/favSlice';
import firebaseData from '../../../Firebase'

const Home = () => {
  const dispatch = useDispatch();
  const [prods, setProds] = useState([]);

  useEffect(() => {
    firebaseData.once('value').then(snapshot => {
      let productList = [];
      snapshot.forEach(snap => {
        productList.push(snap.val());
      });
      setProds(productList)
    })
  }, [])

  const handleFav = (e, id) => {
    e.preventDefault();
    const newProds = prods.map(e => {
      if (e.id === id) {
        e.favs = !e.favs;
      }
      return e;
    });
    setProds(newProds);
    dispatch(toggle(id));
  }

  return (
    <div>
      <HeroBanner />
      <div className="container">
        <h2>Product Latest</h2>
        <ul className="product-list row">
          {
            prods.map(e => (
              <li key={e.id} className="product-item col-medium-3">
                <Link to={`/products/${e.id}`} className="product-img">
                  <img src={`${e.prd_img}`} alt="product" />
                  <span className={`product-fav ${e.favs ? 'active' : ''}`} onClick={(event) => handleFav(event, e.id)}><FaHeart /></span>
                </Link>
                <h4 className="product-name"><Link to={`/products/${e.id}`}>{e.prd_name}</Link></h4>
                <p className="product-desc">{e.prd_desc}</p>
                <p className="product-price">{e.prd_price}</p>
                <button type="button">Add to cart</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Home;
