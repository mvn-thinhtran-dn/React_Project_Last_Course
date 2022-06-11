import './App.css';
import Features from './pages/Features';
import Auth from './pages/Auth';
import Account from './pages/Account';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './core/guards/PrivateRoute';

function App() {
  
  return (
    <>
      <Header />
      <main className="page-main">
        <Switch>
          <PrivateRoute path="/account">
            <Account />
          </PrivateRoute>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Features />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
