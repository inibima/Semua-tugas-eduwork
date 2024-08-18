// main.js
document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
      .then(response => response.json())
      .then(users => {
        const tbody = document.getElementById("user-table-body");
        users.forEach(user => {
          const tr = document.createElement("tr");
  
          tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
          `;
  
          tbody.appendChild(tr);
        });
      })
      .catch(error => console.error("Error fetching data:", error));
  });