import EventItem from "./event-item";
import classes from "./event-list.module.css";

function eventLists(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          location={item.location}
          title={item.title}
          image={item.image}
          date={item.date}
        />
      ))}
    </ul>
  );
}

export default eventLists;
