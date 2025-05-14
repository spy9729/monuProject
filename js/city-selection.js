const cities = [
  { name: "Yapkashnagar", value: "yapkashnagar" },
  { name: "Lihaspur", value: "lihaspur" },
  { name: "Narmis City", value: "narmis" },
  { name: "Shekharvati", value: "shekharvati" },
  { name: "Nuravgram", value: "nuravgram" }
];

const selects = document.querySelectorAll('.city-select');

let selectedCity = '';

selects.forEach(select => {
  select.addEventListener('change', function () {
    selectedCity = this.value
    console.log(selectedCity);
  })

    cities.forEach(city => {
      const option = document.createElement('option');
      if (selectedCity !== city.value) {
      option.value = city.value;
      option.textContent = city.name;
      select.appendChild(option);
      }
  })
})