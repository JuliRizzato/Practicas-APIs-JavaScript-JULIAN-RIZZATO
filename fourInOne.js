//Primera sección: Imagen aleatoria

    function nuevaImagen() {
      // Picsum API genera una imagen aleatoria de 600x400
      const url = `https://picsum.photos/600/400?random=${Math.floor(Math.random()*10000)}`;
      document.getElementById("imagen").src = url;
    }

    // Cargar la primera imagen al iniciar
    nuevaImagen();


//Tercera sección: Información de países


    const selectPais = document.getElementById('pais');
    const infoPais = document.getElementById('infoPais');

    // Cargar la lista de países al inicio
    async function cargarPaises() {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2');
        const paises = await res.json();

        paises.sort((a, b) => a.name.common.localeCompare(b.name.common));

        selectPais.innerHTML = '<option value="">--Selecciona un país--</option>';
        paises.forEach(pais => {
          const option = document.createElement('option');
          option.value = pais.cca2;
          option.textContent = pais.name.common;
          selectPais.appendChild(option);
        });
      } catch (err) {
        console.error(err);
        selectPais.innerHTML = '<option value="">Error al cargar países</option>';
      }
    }

    // Mostrar información del país seleccionado
    async function mostrarPais() {
      const codigo = selectPais.value;
      if (!codigo) {
        infoPais.innerHTML = '';
        return;
      }

      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${codigo}`);
        const data = await res.json();
        const pais = data[0];

        infoPais.innerHTML = `
          <h2>${pais.name.common}</h2>
          <p><strong>Capital:</strong> ${pais.capital ? pais.capital[0] : 'N/A'}</p>
          <p><strong>Región:</strong> ${pais.region}</p>
          <p><strong>Población:</strong> ${pais.population.toLocaleString()}</p>
          <p><strong>Idioma(s):</strong> ${pais.languages ? Object.values(pais.languages).join(', ') : 'N/A'}</p>
          <p><strong>Moneda(s):</strong> ${pais.currencies ? Object.values(pais.currencies).map(c => c.name).join(', ') : 'N/A'}</p>
          <img src="${pais.flags.png}" alt="Bandera de ${pais.name.common}" />
        `;
      } catch (err) {
        infoPais.innerHTML = '<p>Error al obtener información del país.</p>';
        console.error(err);
      }
    }

    selectPais.addEventListener('change', mostrarPais);
    cargarPaises();
    


//Cuarta Sección: Clima de ciudades
const apiKey = '374b5b04384cfe05c7011fce86f6e6ba';

document.getElementById('buscar').addEventListener('click', async () => {
    const ciudad = document.getElementById('ciudad').value.trim();
    if (!ciudad) return alert ('Ingrese una ciudad');


    try{
        const res = await fetch(
           `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}` 
        );
        const data = await res.json();
        if (data.cod !== 200){
            document.getElementById('resultado').innerHTML = 'Ciudad no encotrada';
            return;
        }

        document.getElementById('resultado').innerHTML =
       `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temp: ${data.main.temp} ºC</p>    
        <p>Viento: ${data.wind.speed} km/h</p>    
        <p>Clima: ${data.weather[0].description}</p>
       `; 
      
    }catch (error) {
        document.getElementById('resultado').innerHTML = 'Error al conectar con la API';
    }
});