import React from 'react'

const Purchases = () => {
  return (
    <div className='mx-auto w-full bg-gray-300 p-4'>
      <div>
        <div>
          <br />
          <h1 className='text-3xl text-blue-950 font-semibold'>Checkout</h1>
        </div>
        <br />
        <div className='flex justify-between text-gray-400'>
          <p>Ac fermentum nunc sociis neque nec nunc vivamus.</p>
          <button>Dashboard / Checkout</button>
        </div>
      </div>
      <br /><br />
      
      <div className='flex flex-col md:flex-row'>
        <div className='left w-full md:w-[70%]'>
          <div>
            <h1 className='font-semibold text-lg mb-4'>Contact Information</h1>
            
            {/* Add New Contact Checkbox */}
            <div className='mb-4 flex items-center'>
              <input type='checkbox' id='add-new-contact' className='mr-2' />
              <label htmlFor='add-new-contact' className='text-gray-700'>Add New Contact</label>
            </div>
            
            <form>
              <div className='mb-4 flex flex-col md:flex-row md:space-x-4'>
                <div className='w-full md:w-1/2'>
                  <label className='block text-gray-700'>First Name</label>
                  <input type='text' className='w-full p-2 border bg-slate-100 rounded-md' placeholder='Enter first name' />
                </div>
                <div className='w-full md:w-1/2'>
                  <label className='block text-gray-700'>Last Name</label>
                  <input type='text' className='w-full p-2 border bg-slate-100 rounded-md' placeholder='Enter last name' />
                </div>
              </div>
              <div className='mb-4 flex flex-col md:flex-row md:space-x-4'>
                <div className='w-full md:w-1/2'>
                  <label className='block text-gray-700'>Email Address</label>
                  <input type='email' className='w-full p-2 border bg-slate-100 rounded-md' placeholder='Enter your email' />
                </div>
                <div className='w-full md:w-1/2'>
                  <label className='block text-gray-700'>Phone Number</label>
                  <input type='tel' className='w-full p-2 border bg-slate-100 rounded-md' placeholder='Enter your phone number' />
                </div>
              </div>

              {/* Select Contact Information Heading */}
              <h2 className='font-semibold text-lg mb-2'>Select Contact Information</h2>
              
              {/* Use Saved Information Checkbox */}
              <div className='mb-4 flex items-center'>
                <input type='checkbox' id='use-saved-info' className='mr-2' />
                <label htmlFor='use-saved-info' className='text-gray-700'>Use Saved Information</label>
              </div>

              <div className='mb-4 bg-gray-100 text-gray-400'>
                <select className='w-full p-2 border border-gray-400 rounded-md'>
                  <option value='saved'>Use Saved Information</option>
                  <option value='new'>Enter New Information</option>
                </select>
              </div>

              <div className='mt-6'>
                <h2 className='text-xl font-semibold mb-2'>Review & Place Order</h2>
                <p className='text-gray-600 mb-4'>Please review the order details and payment details before proceeding to confirm your order.</p>

                <div className='mb-4 flex items-center'>
                  <input type='checkbox' id='terms' className='mr-2' />
                  <label htmlFor='terms' className='text-gray-700'>I understand and agree to the <a href='#' className='text-blue-500'>Terms & Conditions</a> & <a href='#' className='text-blue-500'>Privacy Policy</a></label>
                </div>

                <div className='mb-4 flex items-center'>
                  <input type='checkbox' id='subscribe' className='mr-2' />
                  <label htmlFor='subscribe' className='text-gray-700'>Sign me up to the email list</label>
                </div>

                <button className='w-full bg-blue-950 text-white py-2 rounded-md hover:bg-blue-900'>Proceed to Payment</button>
              </div>

            </form>
          </div>
        </div>

        <div className='right w-full md:w-[40%] p-6 py-10'>
          <div className='right p-6 bg-white rounded-lg shadow-md'>
            <h2 className='text-lg font-semibold mb-4 pt-6 '>Order Summary</h2>
            <div className='mb-2 flex justify-between text-gray-700'>
              <span>Prep Room</span>
              <span>$56.73</span>
            </div>
            <div className='mb-2 flex justify-between text-gray-700'>
              <span>Shipping and handling:</span>
              <span className='font-semibold'>$5.50</span>
            </div>
            <div className='mb-2 flex justify-between text-gray-700'>
              <span>Before tax:</span>
              <span className='font-semibold'>$56.73</span>
            </div>
            <div className='mb-2 flex justify-between text-gray-700'>
              <span>Tax Collected:</span>
              <span className='font-semibold'>$8.21</span>
            </div>
            <div className='mt-4 border-t pt-2 flex justify-between font-semibold text-gray-900'>
              <span>Order Total:</span>
              <span className='font-semibold'>$70.44</span>
            </div>
          </div>

          <h2 className='font-semibold mt-6 ml-4 text-2xl'>Payment Details</h2>
          <div className='mt-2 flex space-x-2'>
            {/* Placeholder for payment logos */}
            <img src='/assets/visa-logo.png' alt='Visa' className='h-6' />
            <img src='/assets/stripe-logo.png' alt='Mastercard' className='h-6' />
            <img src='/assets/paypal-logo.png' alt='PayPal' className='h-6' />
            <img src='/assets/g-pay.png' alt='PayPal' className='h-6' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchases;
