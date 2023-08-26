const fname = localStorage.getItem('name'); 
const Email = localStorage.getItem('mail');
const password = localStorage.getItem('pass-word');


document.getElementById('name').textContent = fname;
document.getElementById('mail').textContent = Email;
document.getElementById('pass-word').textContent = password;


function logout(){
    window.location.assign("index.html");
}