import Link from "next/link";
import classes from "./main-header.module.css";
function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <a style={{ textDecoration: "none" }}>
              <Link href={"/events"}>Browse all events</Link>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
