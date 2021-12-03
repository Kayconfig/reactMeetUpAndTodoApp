import { useState, useEffect } from "react";

function UseFetchMeetUps(inputUrl) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(inputUrl)
      .then((res) => res.json())
      .then((data) => {
        const meetupArr = Object.keys(data).map((id) => {
          let meetup = data[id];
          meetup.id = id;
          return meetup;
        });
        setData(meetupArr);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError({ message: err.error, inputUrl });
      });
  }, [inputUrl]);

  return [error, loading, data];
}

export default UseFetchMeetUps;
