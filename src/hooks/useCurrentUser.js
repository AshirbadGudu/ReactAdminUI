import { useState } from "react";

const useCurrentUser = () => {
  const [currentUserData] = useState({
    role: "helpdesk",
    id: "1234567890",
  });

  return { currentUserData };
};

export default useCurrentUser;
