import React from 'react'

function CheckoutForm() {
  return (
    <form action="">
        <div className='form-control'>
            <label for="form-name">Name</label>
            <input required type="text" name="name" id="form-name"/>
        </div>

        <div className='form-control'>
            <label for="form-email">Email</label>
            <input required type="email" name="email" id="form-email"/>
        </div>

        <div className='form-control'>
            <label for="form-address">Address</label>
            <textarea required name="address" id="form-address"/>
        </div>
        <button>Pay</button>
    </form>
  )
}


export default CheckoutForm