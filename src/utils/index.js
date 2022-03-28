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
  return fToCel;
}

// export function initGeolocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success, fail);
//   } else {
//     alert("Sorry, your browser does not support geolocation services.");
//   }
// }

// function success(position) {
//   return { long: position.coords.longitude, lat: position.coords.latitude };
// }

// function fail() {
//   return { message: "Faild to get you location data" };
// }
export let long=0
export let lat=0
export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    return {message:"Geolocation is not supported by this browser."};
  }
}

function showPosition(position) {
  lat=position.coords.latitude 
  long=position.coords.longitude;
}
getLocation()