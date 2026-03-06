let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

let correctedNom = nom.trim();
if (!correctedNom) correctedNom = "Inconnu";

let correctedAge = parseInt(age);
let ageDisplay = (!isNaN(correctedAge) && correctedAge > 0) ? `${correctedAge} (valide)` : "valeur invalide";

let emailParts = email.split("@");
let emailValid = email.includes("@") && emailParts[1] && emailParts[1].includes(".") ? "valide" : "invalide : pas de point après @";

let correctedScore = parseInt(scoreJeu);
correctedScore = isNaN(correctedScore) ? 0 : correctedScore;

let correctedAdmin = estAdmin === "true";

let correctedDerniere = derniereConnexion ?? "Jamais connecté";

let correctedNb = parseInt(nombreConnexions);
let displayNb = correctedNb === 0 ? "Aucune connexion" : correctedNb.toString();

console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${correctedNom}" (corrigé : espaces supprimés)`);
console.log(`age              : ${ageDisplay}`);
console.log(`email            : "${email}" (${emailValid})`);
console.log(`scoreJeu         : ${correctedScore} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin         : ${correctedAdmin} (attention : Boolean("${estAdmin}") = true, conversion manuelle requise)`);
console.log(`derniereConnexion: "${correctedDerniere}" (valeur par défaut via ??)`);
console.log(`nombreConnexions : "${displayNb}" (0 après conversion)`);
console.log("================================");
