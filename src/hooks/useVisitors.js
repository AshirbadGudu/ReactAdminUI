import { useEffect, useState } from "react";

const useVisitors = () => {
  const [visitors, setVisitors] = useState([]);
  useEffect(() => {
    setVisitors([]);
  }, []);
  return { visitors };
};

export default useVisitors;
