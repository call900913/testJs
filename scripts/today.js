function day(date) {
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekDays[date.getDay()];
}

function greet(time) {
  return `Hello! Have a good ${time}!`
}
