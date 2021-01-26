import axios from "axios";
import { useEffect, useState } from "react";

const useVisitors = () => {
  const [visitors, setVisitors] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setVisitors([
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
  return { visitors };
};

export default useVisitors;
