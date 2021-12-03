import UseFetchMeetUps from "../components/customHooks/FetchMeetUpHook";
import MeetUpList from "../components/meetups/MeetUpList";

function AllMeetUpPage() {
  const [error, loading, data] = UseFetchMeetUps(process.env.REACT_APP_DB_URL);

  if (error) {
    return (
      <Container>
        <p>Error Occurred while fetching data.</p>
      </Container>
    );
  }
  if (loading) {
    return (
      <Container>
        <p>Please wait while meetups is being loaded...</p>
      </Container>
    );
  }
  console.log("data:", data);
  return <Container>{<MeetUpList meetups={data} />}</Container>;
}

function Container({ children }) {
  return (
    <div>
      <div>
        <h1>React Meetups</h1>
      </div>
      {children}
    </div>
  );
}

export default AllMeetUpPage;
