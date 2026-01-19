import React from "react";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      <p>
        {isOpen
          ? "We're currently opened"
          : "We're happy to welcome you between 12:00 and 22:00."}
      </p>
    </footer>
  );
}

export default Footer;
