let pairs = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let countDiff = 0;

function format(val) {
    if (typeof val === 'string') return `"${val}"`;
    return val;
}

for (let [a, b] of pairs) {
    let eq = a == b;
    let seq = a === b;
    console.log(`${format(a)} == ${format(b)}         -> ${eq}    |   ${format(a)} === ${format(b)}         -> ${seq}`);
    if (eq && !seq) countDiff++;
}

console.log("---");
console.log(`${countDiff} paire(s) où == et === donnent des résultats différents`);
