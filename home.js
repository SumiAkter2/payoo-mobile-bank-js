console.log("from home");

const todayDate = new Date().toLocaleString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

document.getElementsByClassName("today-date")[0].innerText =
  `Today: ${todayDate} `;

console.log(todayDate);
