import React from 'react'
import {FaFilter} from "react-icons/fa";
import "./filter.css"
const Filter = () => {
  return (
    <>
        <div className="filter-container">
            <FaFilter className = "filter-icon"/>
            <p className = "filter-title-heading">Filters</p>
        </div>
    </>
  )
}

export default Filter