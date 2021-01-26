import axios from "axios";
import { useEffect, useState } from "react";

const useAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setAppointments([
          {
            id: res.data[0].id,
            lastName: res.data[0].name,
            firstName: "Jon",
            age: 35,
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return {
      appointments
  };
};

export default useAppointment;
