//Deze functie controleert of een opgegeven e-mailadres een geldig formaat heeft

export function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//Formulier valideren
    return re.test(String(email).toLowerCase());
}
