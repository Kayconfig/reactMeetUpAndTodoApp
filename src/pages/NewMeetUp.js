import NewMeetUpForm from "../components/meetups/NewMeetUpForm";
import { useNavigate } from "react-router-dom";

function NewMeetUpPage() {
  const navigate = useNavigate();

  function addMeetUpHandler(meetUpFormData) {
    fetch(process.env.REACT_APP_DB_URL, {
      method: "POST",
      body: JSON.stringify(meetUpFormData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        alert("Meetup added successfully.");
        navigate("/allmeetups", { replace: true });
      })
      .catch((err) => alert("Unable to add meetUp"));
  }
  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
}

export default NewMeetUpPage;
