import React, { useState } from 'react';
import firebaseData from '../../../Firebase'
import {useHistory} from 'react-router-dom'

const AddProduct = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    name: '',
    desc: '',
    image: '',
    price: ''
  })

  const [listProd, setListProd] = useState([])

  const handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name
    console.log(e.target);
    const formNew = {
      ...form,
      [name]: value
    }
    setForm(formNew)
    console.log(form);

  }

  const handleAddProd = e => {
    e.preventDefault();
    firebaseData.collection('products').add({
      name:form.name,
      desc:form.desc,
      image:form.image,
      price:form.price,
    })
    history.push('/')

  }

  return (
    <div className="container">
      <form>
          <h1>Add Product</h1>
          <div>
            <label for="name"><b>Product Name:</b></label>
            <input type="text" placeholder="Enter name" name="name" id="name" onChange={handleChange} />
          </div>
          <div>
            <label for="desc"><b>Description:</b></label>
            <input type="text" placeholder="Enter Description" name="desc" id="desc" onChange={handleChange}/>
          </div>
          <div>
            <label for="image"><b>Product Picture:</b></label>
            <input type="text" placeholder="Enter URL image" name="image" id="image" onChange={handleChange}/>
          </div>
          <div>
            <label for="price"><b>Product Price:</b></label>
            <input type="text" placeholder="Enter price" name="price" id="price" onChange={handleChange}/>
          </div>
          <button type="submit" class="registerbtn" onClick={handleAddProd}>Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
