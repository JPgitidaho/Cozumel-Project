const apiKey = '39a93938e81e6967af92542761303653';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cozumel,mx&appid=${apiKey}&units=metric`;

// Función para obtener la temperatura máxima y el icono del clima
async function obtenerDatosClima() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const temperaturaMaxima = data.main.temp_max;
    const iconoTiempo = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconoTiempo}.png`;

    document.getElementById('max-temp').textContent = temperaturaMaxima + '°C';
    document.getElementById('weather-icon').src = iconUrl;
    document.getElementById('weather-banner').style.display = 'block';
  } catch (error) {
    console.error('Error al obtener los datos del clima:', error);
  }
}

// Llamar a la función para obtener la temperatura cuando se cargue la página
window.onload = obtenerDatosClima;

// Función para cerrar el banner
document.getElementById('close-banner').addEventListener('click', function() {
  document.getElementById('weather-banner').style.display = 'none';
});