import { useState, useEffect } from "react";

// why we are using useEffect
// because wihtout this main function calling component again again means fetch and so prevent this we are using useEffect *infinite loop*

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  // we are using this becasuse till the we are fecthcing the data react will show a spinener of loading
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    //  the second array determine how many types this fetch function works otherwise it continues for infinite times without this it this make no sense as previous means infinite times
    fetch(
      "https://react-getting-started-6e664-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // here we saw that in firebase it has object not array so we are using spread operator and for loop to convert the object into array
        // making external array called meetups
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  // now here we are trying to get all the data from the firbase and show

  // now we dont need to configure this request as post becasue by default it is a  get request
  // async await is use because if we are fecthing something in react and js doesn't wait and start showing whatever it is using this is wait for the above to run.

  //  in this given below code we first fetch the api using get request and then *then* taking each element while it is taking we show fidget spinner

  if (isLoading) {
    return <section>Loading..</section>;
  }

  return (
    <section>
      <h1>All Meet Ups</h1>
      {/* list to jsx */}
      {/* {[<li>Item 1</li>, <li>Item 2</li>]} */}
      {/* use map for rendering each element */}

      {/* <ul> */}
      {/* {[
          // we need to give id because otherwise it will give error
          DUMMY_DATA.map((meetup) => {
            return <li id={meetup.id}> {meetup.title}</li>;
            // <img src={meetup.image} alt="none" />;
          }),
        ]} */}
      {/* </ul> */}

      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
