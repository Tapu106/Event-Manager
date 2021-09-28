import EventItem from "./event-item";

function eventLists(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          address={item.location}
          title={item.title}
          image={item.image}
          date={item.date}
        />
      ))}
    </ul>
  );
}

export default eventLists;
