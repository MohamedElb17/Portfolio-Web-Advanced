//Deze functie controleert of een opgegeven e-mailadres een geldig formaat heeft
//Er wordt een callbackfunction gebruikt binnen de re.test om te controleren of het gegeven e-mailadres aan de regex-patroon voldoet.
export function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//Formulier valideren 
    return re.test(String(email).toLowerCase());// Callback function
}
