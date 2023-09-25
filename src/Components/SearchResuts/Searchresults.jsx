import React from 'react';
import Header from '../Header/Header';
import './SearchResults.css'

import {MdFlight} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';



function SearchResults() {
const navigate=useNavigate()
    return (
  
      <>
      <Header/>

      <div className='px-[20px]'>
    <h1 className='flex w-full justify-center text-4xl mt-3 font-bold mb-[20px] ' >Make a booking</h1>
    <hr />
    Friday, 5 January 2024
    <hr />

    <div className='mt-[20px] flex justify-center items-center'>
        <div className='card w-full h-[200px] border shadow-md rounded-md flex justify-around items-center'>
            
            <div className='p-2 w-fit h-fit border rounded shadow-sm flex flex-col justify-centet items-center gap-2'>
            <MdFlight/>
            AI 934
            </div>

            <div className='flex flex-col justify-around w-[80%] items-center  '>
                <div className='justify-around flex w-full items-center'>

            <div className='details '>
                <small className='text-stone-500'>Sat, 30 Sept 23</small>
                <div>14:45</div>
                <small className='text-stone-500'>DXB</small>
            </div>
                <div>4h 0min</div>
            <div className='details '>
                <small className='text-stone-500'>Sat, 30 Sept 23</small>
                <div>20:15</div>
                <small className='text-stone-500'>COK</small>
            </div>
                </div>
                <div className='w-full flex'>
                    <div onClick={()=>navigate('/payment')}  className='w-1/2 h-full flex flex-col justify-center items-center bg-red-200'>
                        <small>Economy</small>
                        <div>INR 12334</div>
                    </div>
                    <div onClick={()=>navigate('/payment')}  className='w-1/2 h-full flex flex-col justify-center items-center bg-blue-200'>
                        <small>Bussines class</small>
                        <div>INR 12334</div>
                    </div>
                </div>

            </div>



        </div>
    </div>

    <div className='mt-[20px] flex justify-center items-center'>
        <div className='card w-full h-[200px] border shadow-md rounded-md flex justify-around items-center'>
            
            <div className='p-2 w-fit h-fit border rounded shadow-sm flex flex-col justify-centet items-center gap-2'>
            <MdFlight/>
            AI 934
            </div>

            <div className='flex flex-col justify-around w-[80%] items-center  '>
                <div className='justify-around flex w-full items-center'>

            <div className='details '>
                <small className='text-stone-500'>Sat, 30 Sept 23</small>
                <div>14:45</div>
                <small className='text-stone-500'>DXB</small>
            </div>
                <div>4h 0min</div>
            <div className='details '>
                <small className='text-stone-500'>Sat, 30 Sept 23</small>
                <div>20:15</div>
                <small className='text-stone-500'>COK</small>
            </div>
                </div>
                <div className='w-full flex'>
                 
                    <div onClick={()=>navigate('/payment')} className='w-1/2 h-full flex flex-col justify-center items-center bg-red-200'>
                        <small>Economy</small>
                        <div>INR 12334</div>
                    </div>
                    <div onClick={()=>navigate('/payment')}  className='w-1/2 h-full flex flex-col justify-center items-center bg-blue-200'>
                        <small>Bussines class</small>
                        <div>INR 12334</div>
                    </div>
                </div>

            </div>



        </div>
    </div>
      </div>
      </>
    
  );
}

export default SearchResults;