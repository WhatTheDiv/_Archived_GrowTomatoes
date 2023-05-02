'use client'
import { useState } from 'react'
import './admin.css'

export default function AdminPage(){
  function serverCall_addProductToDatabase(product){
    product._id = '0x'+(productList.length)
    setProductList([
      ... productList,
      product
    ])
    setModifierValue('edit')
    setProductId(product._id)
    console.log('new product list : ')
    console.table(productList)
  }
  function serverCall_editProductInDatabase(originalObjectId,objectOfChangedItems){
    setProductList(productList.map( item => {
      if(item._id === originalObjectId){
        const modifiedItem = {... item }
        for (let prop in objectOfChangedItems)
          if (Object.prototype.hasOwnProperty.call(objectOfChangedItems, prop))
            modifiedItem[prop] = objectOfChangedItems[prop]
        return modifiedItem
      } else return item
    }))
  }
  function display_whichDisplay(act){
    function display_newProduct(){
      function formSubmit_addNewProduct(event){
        event.preventDefault()
        const arr = []
        document.querySelectorAll('.addProduct_itemField').
          forEach( (item,index) => {
            arr.push(item.querySelector('input').value)
          })
        const item = {
          title:arr[0],
          description:arr[1],
          price:arr[2]
        }
        serverCall_addProductToDatabase(item)
      }
      return(
        <form className='container_addProduct productForm' onSubmit={ (e) => formSubmit_addNewProduct(e) }>
          <span className='addProduct_itemField'>
            <label htmlFor="title">Title</label>
            <input onClick={ (e) => e.target.select() } autoFocus type="text" defaultValue='dummyName' name='title'/>
          </span>
          <span className='addProduct_itemField'>
            <label htmlFor="description">Description</label>
            <input onClick={ (e) => e.target.select() } type="text" defaultValue='dummyDescrip' name='description'/>
          </span>
          <span className='addProduct_itemField'>
            <label htmlFor="price">Price</label>
            <input onClick={ (e) => e.target.select() } type="currency" defaultValue={11.11} name='price'/>
          </span>
          <span className='addProduct_submitButton'>
            <input type="submit" value='Add To Database'/>
          </span>
        </form>
      )
    }
    function display_editProduct(){
      function formSubmit_editProduct(event){
        event.preventDefault()
        const arr = []
        const item = {}
        const originalItem = productList.find(product => product._id === productId)
        document.querySelectorAll('.editProduct_itemField').
          forEach( (item,index) => {
            arr.push(item.querySelector('input').value)
          })
        if(originalItem.title !== arr[0]) item.title = arr[0]
        if(originalItem.description !== arr[1]) item.description = arr[1]
        if(originalItem.price != arr[2]) item.price = arr[2]

        if(Object.keys(item).length <= 0){
          console.log('No changes made')
          return
        }
        else{
          serverCall_editProductInDatabase(originalItem._id,item)
        }
      }
      function productChangeHandler(event){
        document.querySelector('.productForm')?.reset()
        if(event.target.value === 'addProduct') setModifierValue('new')
        else setProductId(event.target.value)
      }

      if(productId === ' '){
        return (
          <div className="container_editProduct">
            <span className='editProduct_selectProduct'>
              <select defaultValue=' ' name="products" onChange={ e =>                 productChangeHandler(e)} id="selectProductSelect">
                <option value=' ' label='Select a product'></option>
                {
                  productList.map(( item, index ) => {
                    return <option value={item._id} key={index} label={item.title}/>
                  })
                }
                <option value="addProduct" label='+ Add new product'></option>
              </select>
            </span>
          </div>
        )
      }
      else {
        const product = productList.find( item => item._id === productId)
        return (
        <div className="container_editProduct">
          <span className='editProduct_selectProduct'>
            <select value={productId} name="products" onChange={ e => productChangeHandler(e)} id="selectProductSelect">
              <option value=' ' label='Select a product'></option>
              {
                productList.map(( item, index ) => {
                  return <option value={item._id} key={index} label={item.title}/>
                })
              }
              <option value="addProduct" label='+ Add new product'></option>
            </select>
          </span>
          <form className='productForm' onSubmit={ (e) => formSubmit_editProduct(e) }>
            <span className='editProduct_itemField'>
              <label htmlFor="title">Title</label>
              <input onClick={ (e) => e.target.select() } type="text" defaultValue={product.title} name='title'/>
            </span>
            <span className='editProduct_itemField'>
              <label htmlFor="description">Description</label>
              <input onClick={ (e) => e.target.select() } type="text" defaultValue={product.description} name='description'/>
            </span>
            <span className='editProduct_itemField'>
              <label htmlFor="price">Price</label>
              <input onClick={ (e) => e.target.select() } type="currency" defaultValue={product.price} name='price'/>
            </span>
            <span className='editProduct_submitButton'>
              <input type="submit" value='Submit Edit'/>
            </span>
          </form>
        </div>
      )}
    }

    switch (act) {
      case 'new':
        return display_newProduct()
        break;
      case 'edit':
        return display_editProduct()
        break;
      case 'view':
        throw new Error('break')
      default:
        return display_newProduct()
        break;
    }
  }
  function changeHandler(e){
    document.querySelector('.productForm')?.reset()
    setModifierValue(e.target.value)
    setProductId(' ')
  }

  const [ modifierValue, setModifierValue ] = useState('edit')
  const [ productId, setProductId ] = useState(' ')
  const [ productList, setProductList ] = useState([
    {
      title: 'Tent',
      description: 'This is a fine tent',
      price: 78.82,
      _id: '0x0'
    },
    {
      title: 'Filter',
      description: 'Carbon air filter',
      price: 13.29,
      _id: '0x1'
    },
    {
      title: 'Water Pump',
      description: 'Water pump 32gpm',
      price: 25.00,
      _id: '0x2'
    }
  ])

  return (
    <div className='container_admin'>
      <h1>Product Modifications</h1>
      <div className="container_newOrEdit">
        <select value={modifierValue} name="newOrEdit" onChange={ e => changeHandler(e)} id="editProductSelect">
          <option value="add" label='Add new product'></option>
          <option value="edit" label='Edit a product'></option>
          <option disabled value="view" label='View a product'></option>
        </select>
      </div>
      { display_whichDisplay(modifierValue) }
    </div>
  );
}