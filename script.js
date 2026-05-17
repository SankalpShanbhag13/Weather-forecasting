async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const apiKey = "98d04cc9178b4490ac662942251210";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("cityName").textContent = `${data.location.name}, ${data.location.country}`;
    document.getElementById("temperature").textContent = `🌡️ ${data.current.temp_c}°C`;
    document.getElementById("condition").textContent = `☁️ ${data.current.condition.text}`;
  } catch (error) {
    document.getElementById("cityName").textContent = "";
    document.getElementById("temperature").textContent = "";
    document.getElementById("condition").textContent = "❌ Could not fetch weather data.";
  }
}
