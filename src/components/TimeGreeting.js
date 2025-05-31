import React, { useState, useEffect } from "react";
function TimeGreeting() {
  const [hourMessage, setHourMessage] = useState();
  const [hour, setHour] = useState();

  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
    if (date.getHours() > 5 && date.getHours() < 12) {
      setHourMessage("Good morning!");
    } else if (date.getHours() >= 12 && date.getHours() <= 17) {
      setHourMessage("Good afternoon!");
    } else if (date.getHours() >= 17 && date.getHours() <= 21) {
      setHourMessage("Good evening!");
    } else {
      setHourMessage("Good Night!");
    }
  });

  return (
    <div className="">
      <p>{hour} hrs, </p>
      <p>{hourMessage}</p>{" "}
    </div>
  );
}

export default TimeGreeting;
