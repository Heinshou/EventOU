import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

function EventsPage(){

    const events = getAllEvents();
    const router = useRouter();

    function findEventsHandler(month, year){
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

    return(
        <Fragment>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </Fragment>
    )
}

export default EventsPage;