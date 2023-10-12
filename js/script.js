document.addEventListener('DOMContentLoaded', function () {
const celciusInput = document.getElementById('input-celcius');
const fahrenheitInput = document.getElementById('input-fahrenheit');
const hasilKalkulasi = document.getElementById('kalkulasi');
const btnKonversi = document.getElementById('btn-konversi');
const btnReset = document.getElementById('btn-reset');
const btnReverse = document.getElementById('btn-reverse');

btnKonversi.addEventListener('click', function () {
    if (celciusInput.value !== '') {
      const celcius = parseFloat(celciusInput.value);
      const fahrenheit = (celcius * 9) / 5 + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
      hasilKalkulasi.value = `(${celcius}°C * 9/5) + 32 = ${fahrenheit}°F`;
    } else if (fahrenheitInput.value !== '') {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      const celcius = ((fahrenheit - 32) * 5) / 9;
      celciusInput.value = celcius.toFixed(2);
      hasilKalkulasi.value = `(${fahrenheit}°F - 32) * 5/9 = ${celcius}°C`;
    }
  });

  btnReset.addEventListener('click', function () {
    celciusInput.value = '';
    fahrenheitInput.value = '';
    hasilKalkulasi.value = '';
  });

  btnReverse.addEventListener('click', function () {
    const celciusValue = celciusInput.value;
    const fahrenheitValue = fahrenheitInput.value;
    const fahrenheitLabel = document.getElementById('label[for="input-fahrenheit"]');
    const celciusLabel = document.getElementById('label[for="input-celcius"]');

    celciusInput.value = fahrenheitValue;
    fahrenheitInput.value = celciusValue;
    celciusLabel.innerHTML = fahrenheitLabel;
    fahrenheitLabel.innerHTML = celciusLabel;
    hasilKalkulasi.value = '';
  });
});