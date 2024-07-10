const form = document.getElementById('form1');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const password = document.getElementById('password');
const successMessage = document.getElementById('successMessage');

// Validation regex patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    inputValidation();
});

const envErr = (element, message) => {
    const errorElement = document.getElementById(element.id + 'Error');
    errorElement.innerText = message;
    element.classList.add('error');
    element.classList.remove('success');
}

const envSucc = (element) => {
    const errorElement = document.getElementById(element.id + 'Error');
    errorElement.innerText = '';
    element.classList.add('success');
    element.classList.remove('error');
}

const inputValidation = () => {
    let isValid = true;

    // Validation du prénom
    if (prenom.value.trim().length < 3 || prenom.value.trim().length > 15) {
        envErr(prenom, "Le prénom doit contenir entre 3 et 15 caractères.");
        isValid = false;
    } else {
        envSucc(prenom);
    }

    // Validation du nom
    if (nom.value.trim().length < 3 || nom.value.trim().length > 15) {
        envErr(nom, "Le nom doit contenir entre 3 et 15 caractères.");
        isValid = false;
    } else {
        envSucc(nom);
    }

    // Validation de l'email
    if (!emailPattern.test(email.value.trim())) {
        envErr(email, "L'adresse email n'est pas valide.");
        isValid = false;
    } else {
        envSucc(email);
    }

    // Validation du mot de passe
    if (password.value.trim().length < 8) {
        envErr(password, "Le mot de passe doit contenir au moins 8 caractères.");
        isValid = false;
    } else {
        envSucc(password);
    }

    // Affichage du message de succès si tout est valide
    if (isValid) {
        form.style.display = 'none';
        successMessage.style.display = 'block';
    }
}
