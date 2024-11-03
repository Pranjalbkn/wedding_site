document.addEventListener('DOMContentLoaded', () => {
  fetch('events.json')
    .then(response => response.json())
    .then(data => {
      const stallsList = document.getElementById('stalls-list');
      const eventsList = document.getElementById('events-list');

      data.stalls.forEach(stall => {
        const stallDiv = document.createElement('div');
        stallDiv.className = 'stall';
        stallDiv.innerHTML = `<h3>${stall.name}</h3><p>${stall.description}</p>`;
        stallsList.appendChild(stallDiv);
      });

      data.events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event';
        eventDiv.innerHTML = `<h3>${event.title}</h3><p>${event.time}</p><p>${event.location}</p>`;
        eventsList.appendChild(eventDiv);
      });
    })
    .catch(error => console.error('Error loading data:', error));
});
