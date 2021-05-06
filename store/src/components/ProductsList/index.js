import './style.css'

import {useState} from "react"
const ProductList = (props) => {
  const {productList,setBucketList} = props
  const [productForBucket, setProductForBucket] =useState({})
  return(
    <div className="products_list__container">
      {productList && productList.map((product, key) => {
        return (
          <div key={key}>
            <input type="text" onChange={(event) => setProductForBucket((prevState) => ({ [product]:event.target.value, ...prevState}))}
              
        
          />
            {product}
          </div>
        )
      })}
      <button onClick={() => setBucketList(productForBucket)} >Add to cart</button>
    </div>
  )
}

export default ProductList