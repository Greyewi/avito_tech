import {useState} from 'react'

const CreateProducts = (props) => {
  const {setProductList} = props
  const [productName, setProductName] = useState('')


  return(
    <div>
      <input type="text" value={productName} onChange={(e) => setProductName((prevState) => {
        console.log(prevState)
        return e.target.value
      })}/>
      <button onClick={() => setProductList((prevState) => [...prevState, productName])}>Add</button>
    </div>
  )
}

export default CreateProducts