import axios from "axios";
import { useEffect, useState } from "react";

const useCatalog = () => {
  const [catalogs, setCatalogs] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setCatalogs([
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
  return { catalogs };
};

export default useCatalog;
