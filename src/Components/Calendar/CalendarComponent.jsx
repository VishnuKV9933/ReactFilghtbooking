import React, { useState } from 'react';
import Calendar from 'react-calendar'
function CalendarComponent({selectedDate, setSelectedDate , setDateOpen}) {

  const handleChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className='w-[220px] text-sm bg-white border-2 border-stone-400 absolute p-1 z-10'>
     <Calendar

value={selectedDate}
onChange={handleChange}
     
     />
       <p className='mx-auto font-semibold'> Selected date: {selectedDate.toLocaleDateString()}</p>
       <div onClick={(e)=>{setDateOpen(false)
      e.stopPropagation()
      }} className='px-3 py-2 rounded-md hover:bg-red-200 w-fit cursor-pointer m-auto bg-red-100 border-2 boreder-blue-300'>OK</div>
    </div>
  );
}

export default CalendarComponent;