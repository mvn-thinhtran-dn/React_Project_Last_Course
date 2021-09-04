import React, {Suspense, lazy} from 'react';
// import AboutUs from './AboutUs';
// import Products from './Products';
// import ProductDetail from './ProductDetail';
// import Home from './Home';
import { Switch, Route } from 'react-router-dom';

const ProductDetail = lazy(() => import('./ProductDetail'));
const AboutUs = lazy(() => import('./AboutUs'));
const Products = lazy(() => import('./Products'));
const Home = lazy(() => import('./Home'));

const Features = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default Features;
