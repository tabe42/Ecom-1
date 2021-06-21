
import React,{useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Pages
import Home from './pages/Home'
import Categories from './pages/Categories'
import Cart from './pages/Cart'
import Nav from './Nav'

//Assets
import JSONDATA from './JSON_DATA.json'


const axios = require('axios');
export const productContext = React.createContext();

function App() {
  const [productList, setProductList] = useState(JSONDATA)
  return (
    <productContext.Provider value={[productList,setProductList]}>
      <div class="min-w-screen min-h-screen max-h-screen bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 flex flex-col overflow-hidden ">
        <Router>
         <Nav/>
         <Switch>
            <Route path="/about">
              <Categories />
            </Route>
            <Route path="/users">
              <Cart />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
    </productContext.Provider>
  );
}

export default App;
