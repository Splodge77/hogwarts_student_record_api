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
  populateList(students);
};

const populateList = function(students){
  const ul = document.getElementById("student-list")
  students.forEach(function(student){
    const img = document.createElement('img');
    img.src = student.image;
    img.alt = student.name;
    img.height = '150';
    const li = document.createElement('li');
    li.innerText = student.name;
    ul.appendChild(img);
    img.appendChild(li)
  });
}

document.addEventListener('DOMContentLoaded', app);
