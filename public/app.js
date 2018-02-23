const app = function(){
  const url = "http://hp-api.herokuapp.com/api/characters/students"
  makeRequest(url, requestComplete);
}

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const students = JSON.parse(jsonString);
  populateTable(students);
};

const populateTable = function(students){
  const table = document.getElementById("student-table")
  students.forEach(function(student){
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const img = document.createElement('img');
    img.src = student.image;
    img.alt = student.name;
    img.height = '150';
    td.appendChild(img);
    tr.appendChild(td);
    table.appendChild(tr);
    // const nameCell = document.createElement('td');
    // li.innerText = student.name;
    // table.appendChild(imageRow);
    // img.appendChild(imageRow);
    // imageRow.appendChild(nameCell);
  });
}

document.addEventListener('DOMContentLoaded', app);
