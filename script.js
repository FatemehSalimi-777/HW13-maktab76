
let API_URL = "https://62ab6beda62365888bdc2f11.mockapi.io";


//GET REQUEST
document.addEventListener("DOMContentLoaded", () => {
  readData();
});

function readData() {
  fetch(`${API_URL}/Hw13`)
    .then((response) => response.json())
    .then((data) => data.forEach(addToDOM));
}

//CREAT TABLE
const tabelBody = document.querySelector('tbody');
function addToDOM(data) {
  const tableRow = document.createElement("tr");
  tableRow.dataset.id = data.id;
  const { id, insDate, site, project, formData, todate, toTarget } =
    generateCells(data);

  tableRow.appendChild(id);
  tableRow.appendChild(insDate);
  tableRow.appendChild(site);
  tableRow.appendChild(project);
  tableRow.appendChild(formData);
  tableRow.appendChild(todate);
  tableRow.appendChild(toTarget);

  tabelBody.appendChild(tableRow);
}

//GENERATE TABLE
function generateCells(data) {
  
  const id = document.createElement("td");
  id.innerHTML = data.Id;
  
  const insDate = document.createElement("td");
  insDate.innerHTML = new Date(data.InsDate).toDateString();
  
  const site = document.createElement("td");
  site.innerHTML = data.SiteId;
  
  const project = document.createElement("td");
  project.innerHTML = data.ProjectId;
  
  const formData = document.createElement("td");
  formData.innerHTML = new Date(data.FromDate).toDateString();
  
  const todate = document.createElement("td");
  todate.innerHTML = new Date(data.ToDate).toDateString();
  
  const toTarget = document.createElement("td");
  toTarget.innerHTML = data.Target;
  
  return { id, insDate, site, project, formData, todate, toTarget };
}
