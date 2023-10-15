import React from 'react'
import Header from '../components/Header/Header'
import "./eventpage.css"
import DaySelector from '../components/DaySelector/DaySelector'

const EventPage = () => {
  return (
    <div>
        <Header />
        <div className = "p-2">
            <h2 className = "agenda-heading text-slate-800" style = {{borderBottom: "2px solid"}}>Agenda</h2>
            <DaySelector />
        </div>
    </div>
  )
}

export default EventPage