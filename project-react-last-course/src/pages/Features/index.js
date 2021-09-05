import React, {Suspense, lazy} from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../core/guards/PrivateRoute';

const ProductDetail = lazy(() => import('./ProductDetail'));
const AddProduct = lazy(() => import('./AddProduct'));
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
          <PrivateRoute path="/add-product">
            <AddProduct />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default Features;
