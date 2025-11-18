import { useState } from "react";

const useCheckOnline = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  window.addEventListener("offline", () => {
    setOnlineStatus(false);
  });

  window.addEventListener("online", () => {
    setOnlineStatus(true);
  });

  return onlineStatus;
};

export default useCheckOnline;
