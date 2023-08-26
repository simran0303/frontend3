const form = document.getElementById('form');
const fname = document.getElementById('fname');
const Email = document.getElementById('Email');
const password = document.getElementById('password');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nameValue= fname.value;
    const EmailValue = Email.value;
    const passwordValue = password.value;

    localStorage.setItem('name', nameValue);
    localStorage.setItem('mail', EmailValue);
    localStorage.setItem('pass-word', passwordValue);

    window.location.href = "profile.html";
})

function message(){
    var fname = document.getElementById('fname');
    var Email = document.getElementById('Email');
    var password = document.getElementById('password'); 
    var confirm = document.getElementById('Cpassword');
    
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(fname.value==='' || Email.value==='' || password.value==='' || confirm.value===''){
        danger.style.display = 'block';
    }

    else{
        danger.style.display = 'none';
        success.style.display = 'block';
    }
}

