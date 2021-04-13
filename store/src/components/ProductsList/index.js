import './style.css'

const ProductList = (props) => {
  const {productList} = props

  return(
    <div className="products_list__container">
      {productList && productList.map((product, key) => {
        return (
          <div key={key}>
            <input type="text" onChange={() => {

            }}
          />
            {product}
          </div>
        )
      })}
    </div>
  )
}

export default ProductList