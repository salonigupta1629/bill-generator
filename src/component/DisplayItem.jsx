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
    <div className="bg-gray-200 w-[700px] h-[660px] mx-auto mt-1 p-6 rounded-lg shadow-xl border-b border-gray-300">
      <h1 className="text-3xl font-semibold mt-[-3px]">Item List</h1>
      <div className="h-[470px] overflow-scroll mt-3">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-center">
              <th className="px-4 py-2 border">Item</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Total</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody >
            {formValue.items.map((bill, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border">{bill.item}</td>
                <td className="px-4 py-2 border">{bill.qty}</td>
                <td className="px-4 py-2 border">{bill.price}</td>
                <td className="px-4 py-2 border">{bill.price * bill.qty}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-3 py-2 rounded bg-green-500 text-white font-semibold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="fixed bottom-12 left-auto z-50">
          <h1 className="text-xl font-semibold mt-1">Total Amount : Rs{total}</h1>
          <button
            onClick={() => window.print()}
            className="px-5 py-2 rounded bg-green-500 text-white font-semibold mt-2"
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
};


export default DisplayItem