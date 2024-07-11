const form = document.getElementById('form1');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitButton = document.getElementById('button-blue');
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

const checkField = (element, validator) => {
    if (validator()) {
        envSucc(element);
        return true;
    } else {
        envErr(element, "Le champ est invalide.");
        return false;
    }
}

prenom.addEventListener('blur', () => {
    if (checkField(prenom, () => prenom.value.trim().length >= 3 && prenom.value.trim().length <= 15)) {
        nom.disabled = false;
    } else {
        nom.disabled = true;
        email.disabled = true;
        password.disabled = true;
        submitButton.disabled = true;
    }
});

nom.addEventListener('blur', () => {
    if (checkField(nom, () => nom.value.trim().length >= 3 && nom.value.trim().length <= 15)) {
        email.disabled = false;
    } else {
        email.disabled = true;
        password.disabled = true;
        submitButton.disabled = true;
    }
});

email.addEventListener('blur', () => {
    if (checkField(email, () => emailPattern.test(email.value.trim()))) {
        password.disabled = false;
    } else {
        password.disabled = true;
        submitButton.disabled = true;
    }
});

password.addEventListener('blur', () => {
    if (checkField(password, () => password.value.trim().length >= 8)) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

const inputValidation = () => {
    let isValid = true;

    // Validation du prénom
    if (!checkField(prenom, () => prenom.value.trim().length >= 3 && prenom.value.trim().length <= 15)) {
        isValid = false;
    }

    // Validation du nom
    if (!checkField(nom, () => nom.value.trim().length >= 3 && nom.value.trim().length <= 15)) {
        isValid = false;
    }

    // Validation de l'email
    if (!checkField(email, () => emailPattern.test(email.value.trim()))) {
        isValid = false;
    }

    // Validation du mot de passe
    if (!checkField(password, () => password.value.trim().length >= 8)) {
        isValid = false;
    }

    // Affichage du message de succès si tout est valide
    if (isValid) {
        form.style.display = 'none';
        successMessage.style.display = 'block';
    }
}
