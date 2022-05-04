import { useRef } from "react";

import React from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm(props) {
  // to store what use eneter after each key stroke but we are intersted in only once when the user submit the form so to interoduce this in react useRef are used. Instead of onchange to all the blocks we are using ref

  // for reading

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  // reme,ber using onsubmit will send request to https and reload the page but we dont want this instead we want to prevent that reload and run our js . We want to send request using js behind . to prevent this we get an event to prevent the reload page
  // VANILLA JAVASCRIPT
  function submitHandler(event) {
    event.preventDefault();
    // so when user write anything it goes to ref to titleinput and entered title is storing whatever user write there
    const enteredTitle = titleInputRef.current.value;
    // titleInputRef.current.value = "We can change like also but it is manually"
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    // console.log(meetupData);

    // here we make a onAddMeetup function which we pass from NewMeetup.js thorugh props on Meetup data
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
