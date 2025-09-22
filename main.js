function calcul(operation) {
    const champ1 = parseFloat(document.getElementById("element1").value);
    const champ2 = parseFloat(document.getElementById("element2").value);
    const valeurResultat = document.getElementById("valeur-resultat");
    let resultat;

    // Vérification des champs
    if (isNaN(champ1) || isNaN(champ2)) {
        valeurResultat.textContent = "Veuillez entrer deux nombres valides.";
        return;
    }

    // Opération
    switch (operation) {
        case "+":
            resultat = champ1 + champ2;
            break;
        case "-":
            resultat = champ1 - champ2;
            break;
        case "*":
            resultat = champ1 * champ2;
            break;
        case "/":
            if (champ2 === 0) {
                valeurResultat.textContent = "Erreur : division par zéro !";
                return;
            }
            resultat = champ1 / champ2;
            break;
        default:
            valeurResultat.textContent = "Opération invalide.";
            return;
    }

    valeurResultat.textContent = resultat;
}
