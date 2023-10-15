import React, {useState} from 'react'
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import "./day-selector.css"
const DaySelector = () => {
    const [selected, setSelected] = useState(0);
    
    const dates = [
        "All",
        "Nov 1",
        "Nov 2",
        "Nov 3",
        "Nov 4",
    ]

    const handleOnClick = (button_type) => {
        const datesSelector = document.querySelector(".dates-selector");
        const specDate = document.querySelector(".specific-date");
        const widthSpecDate = specDate.offsetWidth;
        const amountToShift = widthSpecDate;

        const currentPosition = datesSelector.scrollLeft;
        
        let shiftedPosition;
        console.log(currentPosition)
        if (button_type === "left" && currentPosition <= 0) {
          shiftedPosition = currentPosition;
        } else if (button_type === "left" && currentPosition >= 0) {
          shiftedPosition = currentPosition - amountToShift;
        } else {
          shiftedPosition = currentPosition + amountToShift;
        }
      
        datesSelector.scrollLeft = shiftedPosition;
      
        datesSelector.classList.add("smooth-scroll");
      };
      
  return (
    <div className = "dates-container">
        <AiOutlineLeft onClick = {() => handleOnClick("left")} className = "left-icon"/>
        <div className = "dates-selector">
            {dates.map((item, idx) => {
                return (
                    <>
                        <div onClick = {() => {setSelected(idx)}} key = {idx} className = {`specific-date rounded ${selected === idx ? "selected bg-slate-600 text-teal-200 border-slate-900" : ""}`}>
                              <h2 className = "date-title">{item}</h2>
                        </div>  
                    </>
                )
            })}
        </div>
        <AiOutlineRight onClick = {() => handleOnClick("right")} className = "right-icon"/>
    </div>
  )
}

export default DaySelector