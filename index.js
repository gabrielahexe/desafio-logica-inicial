const nomeDoHeroi = "Kikkyou"
const xpDoHeroi = 9700

let nivelDoHeroi;

if (xpDoHeroi <= 1000) {
    nivelDoHeroi = "Ferro";
} else if (xpDoHeroi > 1000 && xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi > 2000 && xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xpDoHeroi > 6000 && xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (xpDoHeroi > 7000 && xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (xpDoHeroi > 8000 && xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi > 9000 && xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else if (xpDoHeroi >= 10001) {
    nivelDoHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi + ".")
