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

if( !formValue.currentItem.item || !formValue.currentItem.qty || !formValue.currentItem.price){
alert("Please fill all fields before adding an item.");
return;
}
setFormValue(prevState => ({
  ...prevState,
  items: [...prevState.items, prevState.currentItem],
  currentItem: { item: '', qty: '', price: '' } 
}));
};
return (
    <div className="bg-gray-200 h-[550px] p-12  w-[500px] mt-2  rounded-lg shadow-xl">
        <h1 className='text-4xl font-semibold mb-7'>Bill/Invoice Generator</h1>
        <form className='flex flex-col'onSubmit={handleAdd} >
          <div className='flex flex-1 flex-col mb-7'>
          <label className='mb-2 font-semibold'>Item:</label>
          <input onChange={handleOnChange} name="item" value={formValue.currentItem.item} type="text" className='p-3 border border-gray-600 rounded' placeholder='Item Name'/>
          </div>
          <div className='flex flex-1 flex-col mb-7'>
          <label className='mb-2 font-semibold'>Quantity:</label>
          <input onChange={handleOnChange} name="qty" value={formValue.currentItem.qty} type="number" className='p-3 border border-gray-600 rounded' placeholder='Item Quantity'/>
          </div>
          <div className='flex flex-1 flex-col mb-7'>
          <label className='mb-2 font-semibold'>Price:</label>
          <input onChange={handleOnChange} name="price" value={formValue.currentItem.price} type="number" className='p-3 border border-gray-600 rounded' placeholder='Item Price'/>
          </div>
          <button className='w-36 py-2  font-semibold rounded bg-green-500 text-white rounded mt-3 mx-auto'>Add Item</button>
        </form>
    </div>
  )
}

export default AddItem;
