import React from 'react'
const DisplayItem = ({formValue,setFormValue}) => {

  const handleDelete = (index) =>{
setFormValue((prevState) => ({
  ...prevState,
items: prevState.items.filter((bill,i) => i !== index )
  }))
}
  let total = formValue.items.reduce((total,item) =>{ 
  return total + (item.price * item.qty)}, 0);
  return (
    <div className='h-[250px]'>
        <h1 className='text-3xl font-semibold mt-[-3px]'>Item List</h1>
      <div className='h-[160px] overflow-scroll'>
            <table>
              <thead>
                <tr className='flex flex-1 justify-between  items-center  mt-2 w-[630px] '>
                  <th >Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              <tr >
                {
               formValue.items.map((bill,index) =>
                 <div key={index} className='flex flex-1 py-1 justify-between items-center '>
                <td >{bill.item}</td>
                <td > {bill.qty}</td>
                <td > {bill.price}</td>
                <td > {bill.price*bill.qty}</td>
                <button onClick={() => handleDelete(index)} className='px-3 py-2 rounded bg-green-500 text-white font-semibold'>Delete</button>
            </div>
                )
              }
              </tr>
              </tbody>
            </table>
              <div className='fixed bottom-8 left-auto z-50'>
              <h1 className='text-xl font-semibold mt-1'>Total Amount : Rs{total}</h1>
              <button onClick={() =>window.print()} className='px-5 py-2 rounded bg-green-500 text-white font-semibold mt-2'>Print</button>
              </div>
              </div>
    </div>
  )
}

export default DisplayItem