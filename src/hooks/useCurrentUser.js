import { useState } from "react";

const useCurrentUser = () => {
  const [currentUserData] = useState({
    role: "stall",
    id: "1234567890",
  });

  return { currentUserData };
};

export default useCurrentUser;
