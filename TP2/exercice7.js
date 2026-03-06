let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = "promo";  // Changed to enable reduction
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let subtotal = prix * quantite;
console.log(`Sous-total: ${subtotal}`);

let reduction = (codePromo != null && estMembre) ? subtotal * (reductionPourcentage / 100) : 0;
console.log(`Réduction: ${reduction}`);

let total = subtotal - reduction;
console.log(`Total final: ${total}`);

let statut = soldeCompte >= total ? "Paiement accepté" : "Solde insuffisant";
console.log(`Statut: ${statut}`);

let newSolde = soldeCompte - total;
if (statut === "Paiement accepté") {
    console.log(`Nouveau solde: ${newSolde}`);
}

console.log("===== RÉCAPITULATIF =====");
console.log(`Produit   : ${nomProduit}`);
console.log(`Quantité  : ${quantite}`);
console.log(`Prix unit.: ${prix} MAD`);
console.log(`Sous-total: ${subtotal} MAD`);
console.log(`Réduction : ${reduction} MAD`);
console.log(`Total     : ${total} MAD`);
console.log(`Statut    : ${statut}`);
if (statut === "Paiement accepté") {
    console.log(`Solde     : ${newSolde} MAD`);
}
console.log("=========================");
