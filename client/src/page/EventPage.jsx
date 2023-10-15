import React from 'react'
import Header from '../components/Header/Header'
import DaySelector from '../components/DaySelector/DaySelector'
import Filter from '../components/Filter/Filter'
import "./eventpage.css"
import EventList from '../components/EventList/EventList'

const EventPage = () => {
  return (
    <div>
        <Header />
        <div className = "p-2">
            <h2 className = "agenda-heading text-slate-800" style = {{borderBottom: "2px solid"}}>Agenda</h2>
            <DaySelector />
            <Filter />
            <EventList />
        </div>
    </div>
  )
}

export default EventPage