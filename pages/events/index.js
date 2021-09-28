import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

function eventsList() {
  const events = getFeaturedEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default eventsList;
