import {useState} from 'react'

const CreateProducts = (props) => {
  const {setProductList} = props
  let [productName, setProductName] = useState("set product name")
  const changeInputName = (e) => setProductName((prevState) => {
    return e.target.value
  })

  return(
    <div>
      <input type="text" value={productName} onChange={changeInputName}/>
      <button onClick={() => setProductList((prevState) => [...prevState, productName])}>Add</button>
    </div>
  )
}

export default CreateProducts