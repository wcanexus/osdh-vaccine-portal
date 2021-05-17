
let searchButton = document.getElementById('entity-list-map-search');

let searchButtonHandler = searchButton.addEventListener('click', () => {
  setTimeout( () => {
    let locations = document.querySelectorAll('table tr')
      for (let location of locations) {
              // console.log(location)
        let status = location.querySelectorAll('a')[0].textContent;
          // console.log(status)
          if (status != 'Book Appointment') {
              location.style.display = 'none'
          }
      }
  }, 2000);
});


