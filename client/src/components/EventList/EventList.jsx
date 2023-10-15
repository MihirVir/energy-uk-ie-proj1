import React from 'react'
import {IoLocationSharp} from "react-icons/io5";
import "./event-list.css"
const EventList = () => {
    const event_list = [
        {
            start_time: "09:30 GBT+1",
            end_time: "10:30 GBT+1",
            event_title: "This is an event",
            event_location: "Somewhere",
            tags: ["This is a tag", "test tag", "hello world tag"]
        },
        {
            start_time: "12:30 GBT+1",
            end_time: "13:30 GBT+1",
            event_title: "This is a new event",
            event_location: "Dublin",
            tags: ["This is a cool tag", "testing this cool tag", "hello cool tag"]
        },
        {
            start_time: "15:30 GBT+1",
            end_time: "16:30 GBT+1",
            event_title: "This is a new event",
            event_location: "London",
            tags: ["event", "new event", "hello new event"]
        },
    ]
  return (
    <>
        <div className="event-list-container">
            {
                event_list.map((event,idx) => {
                    return (
                        <>
                            <div key = {idx} className="event-container">
                                <p>{event.start_time}</p>
                                <hr />
                                <h2 className = "event-name">This is an event haha</h2>
                                <p>{event.start_time + " " + "-" + " " + event.end_time}</p>
                                <div className = "location-wrapper">
                                    <IoLocationSharp className = "location-filter"/>
                                    <p>{event.event_location}</p>
                                </div>
                                <div className="tag-container">
                                    {event.tags.map((tags, idx) => {
                                        return (
                                            <p>{tags}</p>
                                        )
                                    })}
                                </div>
                                <hr style = {{marginBottom: "1rem"}}/>
                            </div>
                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default EventList