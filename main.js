// sla input en warninng op
console.log("hij doet het");

const inputUsername = document.getElementById('username');
const warningUsername = document.getElementById('warning-name');

// Zet een event listener op het gebruikersnaam-veld
inputUsername.addEventListener('keyup', checkUsername);

// Laat een functie checken of de huidige waarde van de input een '@' bevat
function checkUsername(e)   {
    if (e.target.value.includes("@"))   {
        warningUsername.textContent = "Gebruikersnaam mag geen @ bevatten";
    } else {
        warningUsername.textContent = "";
    }
}


const inputPassword = document.getElementById('password');
const warningPassword = document.getElementById('warning-password');

inputPassword.addEventListener('keyup', checkPassword);
function checkPassword(e)   {
    if (e.target.value === "" || e.target.value.length > 8)    {
        warningPassword.textContent = "";
    } else  {
        warningPassword.textContent = "Het wachtwoord moet minimaal 8 tekens lang zijn";
    }
}

