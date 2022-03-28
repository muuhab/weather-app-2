export function formatDate(dayOfWeek, day, year) {
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "Friday",
    "saturday",
  ];

  return daysOfWeek[dayOfWeek] + " " + day + ", " + year;
}

export function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = ((fTemp - 32) * 5) / 9;
  return fToCel
}
