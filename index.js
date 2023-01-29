const measurementSelect = document.getElementById('measurement');
const temperatureInput = document.getElementById('temperature');
const windInput = document.getElementById('wind');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

let windChill;
let degrees;

const calculateWindChill = () => {
  const temp = temperatureInput.value;
  const windSpeed = windInput.value;

  if (temp.trim() === '' || windSpeed.trim() === '') {
    resultDiv.innerText = 'Enter correct values!';
    return;
  }

  if (measurementSelect.value === 'english') {
    windChill = Math.round(
      35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temp * Math.pow(windSpeed, 0.16)
    );
    degrees = '°F';
  } else if (measurementSelect.value === 'metric') {
    windChill = Math.round(
      13.12 +
        0.6215 * temp -
        11.37 * windSpeed ** 0.16 +
        0.3965 * temp * windSpeed ** 0.16
    );
    degrees = '°C';
  }
  resultDiv.innerText = `The Windchill is: ${windChill}${degrees}`;
};

calculateBtn.onclick = () => calculateWindChill();
