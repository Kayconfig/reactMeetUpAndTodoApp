import styles from "./MeetUpList.module.css";
import MeetUpItem from "./MeetUpItem";

function MeetUpList({ meetups }) {
  return meetups.length > 0 ? (
    <ul className={styles.list}>
      {meetups.map((meetup, index) => (
        <MeetUpItem {...meetup} key={index} />
      ))}
    </ul>
  ) : (
    <section>
      <p>Please select favorites to display.</p>
    </section>
  );
}

export default MeetUpList;
