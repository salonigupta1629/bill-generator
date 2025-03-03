import React, { useState } from 'react'
import AddItem from "./component/AddItem";
import DisplayItem from "./component/DisplayItem";

const App = () =>{
  const [formValue, setFormValue] =  useState({
    currentItem: { item: '', qty: '', price: '' },
    items: []
  });
  return(
    <div className='bg-gray-200 w-[800px] mx-auto mt-8 p-6 rounded-lg shadow-lg'>
      <AddItem formValue={formValue} setFormValue={setFormValue} />
      <DisplayItem formValue={formValue}/>
    </div>
  )
}
export default App;
"Add item input form and display functionality for invoice generator"