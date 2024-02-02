function updateTime() {

let belizeCityElement = document.querySelector("#belize-city");
let belizeCityDateElement = belizeCityElement.querySelector(".date");
let belizeCityTimeElement = belizeCityElement.querySelector(".time");
let belizeCityTime = moment().tz("America/Belize");

belizeCityDateElement.innerHTML = belizeCityTime.format("MMMM Do YYYY");
belizeCityTimeElement.innerHTML = belizeCityTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
}

updateTime();
setInterval(updateTime, 1000);
