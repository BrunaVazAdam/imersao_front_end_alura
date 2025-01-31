// Váriavel que guarda o id "greeting"
const saudacao = document.getElementById("greeting");

// Váriavel que guarda o horário atual em horas
const horarioAtual = new Date().getHours;

if (horarioAtual >= 5 && horarioAtual < 12) {
    saudacao.textContent = "Bom dia";
} else if (horarioAtual >= 12 && horarioAtual < 18) {
    saudacao.textContent = "Boa tarde";
} else {
    saudacao.textContent = "Boa Noite";
}