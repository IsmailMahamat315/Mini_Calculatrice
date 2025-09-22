function calculerMarge() {
    const cout = parseFloat(document.getElementById("cout").value);
    const vente = parseFloat(document.getElementById("vente").value);
    const resultat = document.getElementById("valeur-resultat");
    const message = document.getElementById("message");
  
    // Vérification des entrées
    if (isNaN(cout) || isNaN(vente)) {
      resultat.textContent = "---";
      message.textContent = "Veuillez entrer des valeurs valides.";
      message.style.color = "red";
      return;
    }
  
    const marge = vente - cout;
    resultat.textContent = marge.toFixed(2) + " €";
  
    // Message selon le résultat
    if (marge > 0) {
      message.textContent = " Vous réalisez un bénéfice.";
      message.style.color = "green";
    } else if (marge === 0) {
      message.textContent = "Vous êtes à l'équilibre.";
      message.style.color = "orange";
    } else {
      message.textContent = " Vous êtes en perte.";
      message.style.color = "red";
    }
  }
  