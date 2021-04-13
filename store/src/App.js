import './App.css';
import {useState} from 'react'
import ProductList from './components/ProductsList'
import CreateProducts from "./components/CreateProducts"

function App() {
  const [productList, setProductList] = useState([])
  const [bucketList, setBucketList] = useState([])

  return (
    <div className="App">
      <ProductList productList={productList} setBucketList={setBucketList}/>
      <CreateProducts setProductList={setProductList}/>
    </div>
  );
}

export default App;
