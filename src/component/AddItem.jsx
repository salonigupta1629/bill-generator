const AddItem = ({formValue,setFormValue}) => {
    const handleOnChange = (e) =>{
const input = e.target
const name = input.name
const value = input.value
setFormValue(prevState => ({
  ...prevState,
  currentItem: {
    ...prevState.currentItem,
    [name]: value
  }
}));
};

const handleAdd = (e) => {
e.preventDefault();
setFormValue(prevState => ({
  ...prevState,
  items: [...prevState.items, prevState.currentItem],
  currentItem: { item: '', qty: '', price: '' } 
}));
};
return (
    <div>
        <h1 className='text-4xl font-semibold mb-4'>Bill/Invoice Generator</h1>
        <form className='flex flex-col'onSubmit={handleAdd} >
          <div className='flex flex-1 flex-col mb-5'>
          <label className='mb-1'>Item:</label>
          <input onChange={handleOnChange} name="item" value={formValue.currentItem.item} type="text" className='p-3 border border-gray-600 rounded' placeholder='Item Name'/>
          </div>
          <div className='flex flex-1 flex-col mb-5'>
          <label className='mb-1'>Quantity:</label>
          <input onChange={handleOnChange} name="qty" value={formValue.currentItem.qty} type="text" className='p-3 border border-gray-600 rounded' placeholder='Item Quantity'/>
          </div>
          <div className='flex flex-1 flex-col mb-5'>
          <label className='mb-1'>Price:</label>
          <input onChange={handleOnChange} name="price" value={formValue.currentItem.price} type="text" className='p-3 border border-gray-600 rounded' placeholder='Item Price'/>
          </div>
          <button className='w-36 py-2 rounded bg-green-500 text-white rounded'>Add Item</button>
        </form>
    </div>
  )
}

export default AddItem;
