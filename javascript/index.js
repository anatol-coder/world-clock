function showDateAndTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
  let warsawElement = document.querySelector("#warsaw");
  let warsawDateElement = warsawElement.querySelector(".date");
  let warsawTimeElement = warsawElement.querySelector(".time");

  let warsawTime = moment().tz("Europe/Warsaw");

  warsawDateElement.innerHTML = warsawTime.format("MMMM Do YYYY");
  warsawTimeElement.innerHTML = warsawTime.format(
    "h:mm:ss [<small>]A[<small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
      <div class="city">
          <div class="city-date">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="index.html">All cities</a>`;
}

showDateAndTime();
setInterval(showDateAndTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
