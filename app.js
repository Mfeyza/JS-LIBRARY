const header=document.querySelector(".header")
header.style= "text-align:center ; padding:2rem ;"
const body=document.querySelector("body")
body.style="background-image: radial-gradient( circle farthest-corner at -4.5% 34.3%,  rgba(13,20,174,1) 0%, rgba(243,165,140,1) 90% );"

const title =document.getElementById("title")
title.textContent="WELCOME TO JAVASCRIPT LIBRARY"
title.style="font-family: 'Indie Flower', cursive; font-size:50px;"

const Navitem=document.querySelector(".nav-item")
Navitem.style="list-style-type:none; display:flex; justify-content:center; gap:6rem; margin:0.5rem; font-size:35px ;font-family: 'Indie Flower', cursive; cursor:pointer; "
const icon= document.querySelector("i")
icon.style= "font-size: 60px; padding:0.5rem;"

const username=document.querySelector("#username")
username.value="mfy@gmail.com"
username.disabled=true

const password=document.querySelector("#password")
password.value=2910
password.disabled=true
password.type="text"

const btn =document.querySelector(".btn")
btn.textContent="Giriş Yap"
btn.style="background-image: linear-gradient( 113.5deg,  rgba(234,234,234,1) 22.3%, rgba(201,234,211,1) 56.6%, rgba(255,180,189,1) 90.9% ); cursor:pointer; width:100px; height: 40px;border-radius:20px;font-family: 'Indie Flower', cursive;font-size:20px; border:none;"

let projects=document.getElementById("projects")
let h3=projects.firstElementChild
h3.textContent="JS DOM PROJECTS"
h3.style="font-family: 'Indie Flower', cursive; margin-top:5px"

const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"];
const ul=projects.lastElementChild

myProjects.forEach((item) => (ul.innerHTML += `<li>${item} </li>`));

// let ul=projects.lastElementChild
// ul.innerHTML="<li>Hello World!</li> <li>Guess Number</li> <li>Checkout Page</li><li>Gelir-Gider Projesi</li><li>Api Projects</li>"
// ul.style="font-family: 'Indie Flower', cursive;"
