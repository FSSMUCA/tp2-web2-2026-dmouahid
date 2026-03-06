let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

console.log("Partie A — ??");
console.log(`nom ?? "valeur par défaut"    -> ${nom ?? "valeur par défaut"}`);
console.log(`age ?? "valeur par défaut"    -> ${age ?? "valeur par défaut"}`);
console.log(`ville ?? "valeur par défaut"    -> ${ville ?? "valeur par défaut"}`);
console.log(`score ?? "valeur par défaut"    -> ${score ?? "valeur par défaut"}`);
console.log(`actif ?? "valeur par défaut"    -> ${actif ?? "valeur par défaut"}`);

console.log("\nPartie B — ||");
console.log(`nom || "valeur par défaut"    -> ${nom || "valeur par défaut"}`);
console.log(`age || "valeur par défaut"    -> ${age || "valeur par défaut"}`);
console.log(`ville || "valeur par défaut"    -> ${ville || "valeur par défaut"}`);
console.log(`score || "valeur par défaut"    -> ${score || "valeur par défaut"}`);
console.log(`actif || "valeur par défaut"    -> ${actif || "valeur par défaut"}`);

console.log("\nPartie C");
let vars = { nom, age, ville, score, actif };
for (let key in vars) {
    let val = vars[key];
    let nullish = val ?? "valeur par défaut";
    let or = val || "valeur par défaut";
    let same = nullish === or ? "même résultat" : "résultat différent";
    console.log(`${key}   : ?? et || -> ${same}`);
}
