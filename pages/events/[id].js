import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
function eventDetails() {
  const router = useRouter();
  const eventId = router.query.id;
  const eventDetails = getEventById(eventId);

  if (!eventDetails) {
    return <p>No Event Found!</p>;
  }
  return (
    <Fragment>
      <EventSummary title={eventDetails.title} />
      <EventLogistics
        date={eventDetails.date}
        image={eventDetails.image}
        address={eventDetails.location}
        imageAlt={eventDetails.title}
      />
      <EventContent>
        <p>{eventDetails.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default eventDetails;
