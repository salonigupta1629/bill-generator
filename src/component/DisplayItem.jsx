import React from 'react'
const DisplayItem = ({formValue}) => {
  return (
    <div>
        <h1 className='text-4xl font-semibold mb-4'>Item List</h1>
        <table>
            <thead>
               <tr>
               <th>Bag</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delete</th>
               </tr>
            </thead>
            <tbody>
              {
               formValue.items.map((bill,index) =>
                 <tr key={index}>
                <td>{bill.item}</td>
                <td>{bill.qty}</td>
                <td>{bill.price}</td>
            </tr>
                )
               }
            </tbody>
        </table>
    </div>
  )
}

export default DisplayItem