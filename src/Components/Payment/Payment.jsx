import React from 'react';
import Header from '../Header/Header';
import './payment.css'
function PayMent() {
  return (
    <div>
        <Header/>
        
      <div className="payment-conainer  flex flex-col gap-[30px] flex-wrap justify-center items-center  p-[10px] mt-[100px] m-[10px] text-white">
                <div className='payment flex flex-col flex-wrap justify-center items-center md:w-1/2 border rounded-md py-[10px] gap-[10px] shadow'>
                   <div className='font-semibold'>Fill up The Details</div>
                   <input className='bg-blue-100 rounded h-[30px] px-2' type="text" placeholder='Name'/>
                   <input className='bg-blue-100 rounded h-[30px] px-2' type="email" placeholder='Email'/>
                   <input className='bg-blue-100 rounded h-[30px] px-2' type="number" placeholder='Mobile'/>

                   <div>
                    From:Kochin International airport
                   </div>
                   <div>
                    To:Dubai International airport
                   </div>
                        <div>INR 12346</div>
                </div>
                <div className='Proceed'>Proceed to Pay</div>
      </div>
    </div>
  );
}

export default PayMent;