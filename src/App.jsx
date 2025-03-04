import React, { useState } from 'react'
import AddItem from "./component/AddItem";
import DisplayItem from "./component/DisplayItem";

const App = () =>{
  const [formValue, setFormValue] =  useState({
    currentItem: { item: '', qty: '', price: '' },
    items: []
  });
  return(
    <div className='bg-gray-200 w-[700px] mx-auto mt-2 p-6 rounded-lg shadow-xl'>
      <AddItem formValue={formValue} setFormValue={setFormValue} />
      <DisplayItem formValue={formValue} setFormValue={setFormValue}/>
    </div>
  )
}
export default App;
