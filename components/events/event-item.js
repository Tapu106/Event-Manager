import Button from "../ui/button";
import classes from "./event-item.module.css";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
function eventItem(props) {
  const { title, date, location, image, id } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const fomattedAddress = location.replace(", ", "\n");
  const expolrableLink = `/events/${id}`;
  console.log(image);
  return (
    <li key={id} className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h1>{title}</h1>
        </div>
        <div className={classes.date}>
          <time>
            <DateIcon />
            {formattedDate}
          </time>
        </div>
        <div className={classes.address}>
          <address>
            <AddressIcon />
            {fomattedAddress}
          </address>
        </div>
        <div className={classes.actions}>
          <Button link={expolrableLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default eventItem;
