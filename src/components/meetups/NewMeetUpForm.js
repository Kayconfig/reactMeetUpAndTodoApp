import styles from "./NewMeetUpForm.module.css";
import Card from "../wrappers/Card";
import { useRef, useState } from "react";
function NewMeetUpForm({ onAddMeetUp }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const formRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const formdata = { title, image, address, description };
    onAddMeetUp(formdata);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler} ref={formRef}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type={"text"}
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="image">Meetup Image Url</label>
          <input
            type={"url"}
            id="image"
            name="image"
            required
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input
            type={"text"}
            id="address"
            name="address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetUpForm;
