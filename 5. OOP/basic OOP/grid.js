class Grid {
    constructor({ data, columns, container }) {
      this.data = data;
      this.columns = columns;
      this.container = document.querySelector(container);
    }
  
    render() {
      const table = document.createElement("table");
      table.className = "table table-striped";
  
      const thead = document.createElement("thead");
      const tr = document.createElement("tr");
  
      this.columns.forEach(column => {
        const th = document.createElement("th");
        th.textContent = column.name;
        tr.appendChild(th);
      });
  
      thead.appendChild(tr);
      table.appendChild(thead);
  
      const tbody = document.createElement("tbody");
  
      this.data.forEach(row => {
        const tr = document.createElement("tr");
  
        this.columns.forEach(column => {
          const td = document.createElement("td");
          td.textContent = row[column.field];
          tr.appendChild(td);
        });
  
        tbody.appendChild(tr);
      });
  
      table.appendChild(tbody);
      this.container.appendChild(table);
    }
  }