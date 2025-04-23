
document.addEventListener('DOMContentLoaded', fetchAlumni);

function fetchAlumni() {
  fetch('http://localhost:3000/alumni')
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector('#alumniTable tbody');
      tbody.innerHTML = '';
      data.forEach(alumni => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${alumni.name}</td>
          <td>${alumni.email}</td>
          <td>${alumni.graduation_year}</td>
          <td>${alumni.course}</td>
          <td>${alumni.phone}</td>
          <td>${alumni.address}</td>
        `;
        tbody.appendChild(row);
      });
    });
}

function searchAlumni() {
  const query = document.getElementById('search').value.toLowerCase();
  fetch('http://localhost:3000/alumni')
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(alumni =>
        alumni.name.toLowerCase().includes(query) ||
        alumni.course.toLowerCase().includes(query)
      );
      const tbody = document.querySelector('#alumniTable tbody');
      tbody.innerHTML = '';
      filtered.forEach(alumni => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${alumni.name}</td>
          <td>${alumni.email}</td>
          <td>${alumni.graduation_year}</td>
          <td>${alumni.course}</td>
          <td>${alumni.phone}</td>
          <td>${alumni.address}</td>
        `;
        tbody.appendChild(row);
      });
    });
}
