import React, { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

export default function AddExercise() {
  const exerciseName = useRef();
  const duration = useRef();
  const caloriesBurned = useRef();
  // Set collection reference
  const ref = collection(firestore, "Exercises");

  const handleSave = async (e) => {
    e.preventDefault();
    // check to see if info is correctly stored
    // console.log(exerciseName.current.value);

    let data = {
      // structure data for database
      name: exerciseName.current.value,
      duration: duration.current.value,
      carlories: caloriesBurned.current.value,
    };

    try {
      // Add data to database
      addDoc(ref, data);
      // Clear the data
      exerciseName.current.value = "";
      duration.current.value = "";
      caloriesBurned.current.value = "";
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {/* Structure how the user input info */}
      <h2>Submit An Exercise</h2>
      <form onSubmit={handleSave}>
        <label>Exercise Name: </label>
        <input type="text" ref={exerciseName} />
        <label>Duration: </label>
        <input type="text" ref={duration} />
        <label>Calories Burned: </label>
        <input type="text" ref={caloriesBurned} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
