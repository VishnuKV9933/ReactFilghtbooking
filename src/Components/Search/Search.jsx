import React, { useState ,useEffect} from "react";
import "./Search.css";

import { HiOutlinePlus, HiOutlineMinusSm } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import CalendarComponent from "../Calendar/CalendarComponent";

function Search() {
  const navigate = useNavigate();

  const [adult, SetAdult] = useState(0);
  const [child, SetChild] = useState(0);
  const [passengersOpen, SetPassengersOpen] = useState(false);
  const [classes, SetClasses] = useState("Class");
  const [clssOpen, setClassOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [totalPasssengers,SetTotalPassengers]=useState(0)
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(()=>{
    SetTotalPassengers(adult+child)
    
  },[adult,child])
  return (
    <div className="search-container w-full h-fit  md:px-20 py-10 flex justify-center items-center flex-wrap gap-[10px] relative">
      <input
        className="hover:border-2 pl-[10px] flex justify-center items-center w-[80%] md:w-[300px] h-[50px] rounded"
        placeholder="Deperture Airport"
        type="text"
      />
      <input
        className="hover:border-2 pl-[10px] flex justify-center items-center w-[80%] md:w-[300px] h-[50px] rounded "
        placeholder="Arival Airport"
        type="text"
      />
      <div onClick={()=>{
        setDateOpen(true)
        setClassOpen(false)
        SetPassengersOpen(false)
      }} className="hover:border-2 flex justify-center items-center w-[80%] md:w-[300px] h-[50px] rounded bg-white relative">
        {dateOpen && <CalendarComponent setSelectedDate={setSelectedDate} selectedDate={selectedDate} setDateOpen={setDateOpen}/>}
      {selectedDate.toLocaleDateString()}
      </div>

      <div
        onClick={() => {
          SetPassengersOpen(true);
          setDateOpen(false)
        setClassOpen(false)
        }}
        className="flex justify-center items-center w-[80%] md:w-[300px] h-[50px] rounded bg-white relative"
      >
    { totalPasssengers}    Passengers
        {/* passengers modal table */}
        {passengersOpen && (
          <div className="passengers w-[90%] md:w-1/2 bg-white absolute">
            Passengers
            <hr />
            <div className="flex gap-2 justify-center items-center">
              Adult
              <div
                onClick={() => {
                  SetAdult(adult + 1);
                }}
              >
                <HiOutlinePlus />
              </div>
              {adult}
              <div
                onClick={() => {
                  if (adult > 0) SetAdult(adult - 1);
                }}
              >
                <HiOutlineMinusSm />
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center">
              Child
              <div
                onClick={() => {
                  SetChild(child + 1);
                }}
              >
                <HiOutlinePlus />
              </div>
              {child}
              <div
                onClick={() => {
                  if (child > 0) SetChild(child + 1);
                }}
              >
                <HiOutlineMinusSm />
              </div>
            </div>
            <div
              onClick={(e) => {
                SetPassengersOpen(false);
                e.stopPropagation();
              }}
              className="px-2 border hover:bg-red-500 rounded"
            >
              Ok
            </div>
          </div>
        )}
      </div>
      <div
        onClick={() => {
          setClassOpen(true);
          SetPassengersOpen(false);
          setDateOpen(false)
       
        }}
        className="hover:border-2 flex justify-center items-center w-[80%] md:w-[300px] h-[50px] rounded bg-white relative"
      >
        {classes}

        {clssOpen && (
          <div className="class absolute">
            classes
            <hr />
            <div
              onClick={(e) => {
                SetClasses("Economy Class");
                setClassOpen(false);
                SetPassengersOpen(false)
                e.stopPropagation()
              }}
            >
              Economy Class
            </div>
            <div
              onClick={(e) => {
                SetClasses("Premium Economy");
                setClassOpen(false);
                SetPassengersOpen(false)
                e.stopPropagation()
              }}
            >
              Premium Economy{" "}
            </div>
            <div
              onClick={(e) => {
                SetClasses("Bussines Class");
                setClassOpen(false);
                SetPassengersOpen(false)
                e.stopPropagation()
              }}
            >
              Bussines Class
            </div>
            <div
              onClick={(e) => {
                SetClasses("First Class");
                setClassOpen(false);
                SetPassengersOpen(false)
                e.stopPropagation()
              }}
            >
              First Class
            </div>
          </div>
        )}
      </div>
      <div
        onClick={() => {
          navigate("/searchreluts");
        }}
        style={{ backgroundColor: "red" }}
        className=" hover:border-2 flex justify-center items-center w-[80%] md:w-[300px] h-[50px] rounded bg-white"
      >
        Search Flights
      </div>


         

    </div>
  );
}

export default Search;
