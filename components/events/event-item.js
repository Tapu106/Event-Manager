import Link from "next/link";
function eventItem(props) {
  const { title, date, address, image, id } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const fomattedAddress = address.replace(", ", "\n");
  const expolrableLink = `/events/${id}`;
  console.log(image);
  return (
    <li key={id}>
      <img src={"/" + image} alt="" />
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <time>{formattedDate}</time>
        </div>
        <div>
          <address>{address}</address>
        </div>
        <div>
          <Link href={expolrableLink}>Explore Events</Link>
        </div>
      </div>
    </li>
  );
}

export default eventItem;
