import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

export default function Home() {
  const events = getFeaturedEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}
