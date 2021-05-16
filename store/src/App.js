import './App.css';
import {useState} from 'react'
import ProductList from './components/ProductsList'
import CreateProducts from "./components/CreateProducts"
import BucketList from "./components/BusketList"
import {BrowserRouter as Switch, Route, Link} from "react-router-dom"

function App() {
  const [productList, setProductList] = useState([])
  const [bucketList, setBucketList] = useState([])
  
  return (
    <div className="App">
      <Link to={"/create"}> Create</Link>
      <Link to={"/products"} >Prod</Link>
      <Link to={"/buskets"}> Busk</Link>
      <Switch>
      <Route exact path="/create">
         <CreateProducts setProductList={setProductList}/>
      </Route>

      <Route path="/products">
          <ProductList productList={productList} setBucketList={setBucketList}/>
      </Route>
      <Route path="/buskets">
          <BucketList bucketList={bucketList}/>
      </Route>
        
        </Switch>
     
      
    </div>
  );
}

export default App;
