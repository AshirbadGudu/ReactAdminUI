import { useState } from "react";

const useAppointment = () => {
  // eslint-disable-next-line no-unused-vars
  const [appointment, setAppointment] = useState([
    {
      id: 987654321,
      slno: 1,
      name: "Subhakanta",
      email: "patisubhakantaniku@gmail.com",
      subject: "Exposuium",
      message: "Hello world Hello world Hello world Hello world Hello world",
    },
    {
      id: 767593472,
      slno: 2,
      name: "Subhakanta Pati",
      email: "patisubhakanta@gmail.com",
      subject: "Exposuium",
      message: "Hello world Hello world Hello world Hello world Hello world",
    },
  ]);
  return { appointment };
};

export default useAppointment;
