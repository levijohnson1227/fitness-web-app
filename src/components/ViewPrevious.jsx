import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";

export function ViewExercise() {
  const [exercises, setExercises] = useState([]);
  const exerciseCollectionRef = collection(firestore, "Exercises");
  useEffect(() => {
    // Function to fetch data from Firebase Realtime Database
    const fetchData = async () => {
      const data = await getDocs(exerciseCollectionRef);
      //   console.log(data);
      setExercises(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchData(); // Call the fetch data function
  }, []);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="exercise-list">
      <h2>Previous Exercise List</h2>
      <div className="exercise-container">
        <div className="grid-container">
          {exercises.map((exercise) => {
            return (
              <div key={exercise.id} className="exercise-card">
                <h2>{capitalizeFirstLetter(exercise.name)}</h2>
                <p>Duration: {exercise.duration} minutes</p>
                <p>Calories: {exercise.carlories} calories burned</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
