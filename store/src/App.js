import './App.css';
import {useState} from 'react'
import ProductList from './components/ProductsList'
import CreateProducts from "./components/CreateProducts"
import BucketList from "./components/BusketList"

function App() {
  const [productList, setProductList] = useState([])
  const [bucketList, setBucketList] = useState([])
  const [tempList, setTempList] = useState([])

  return (
    <div className="App">
      <CreateProducts setProductList={setProductList}/>
      <ProductList productList={productList} setBucketList={setBucketList}/>
      <BucketList bucketList={bucketList}/>
    </div>
  );
}

export default App;
