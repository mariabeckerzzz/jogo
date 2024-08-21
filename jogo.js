// Estado inicial do jogo
let vida = 100;
let inventario = {
    empatia: 0,
    esperanca: 0,
    motivacao: 0
};

// Função para mostrar o status atual
function mostrarStatus() {
    alert("Vida: " + vida + 
          "\nInventário - Empatia: " + inventario.empatia + 
          ", Esperança: " + inventario.esperanca + 
          ", Motivação: " + inventario.motivacao);
}

// Função para explorar um local
function explorar(lugar) {
    if (lugar === "Irã") {
        alert("Você está no Irã, onde enfrenta desafios e limitações para mulheres atletas.");
        vida -= 10;
    } else if (lugar === "Reino Unido") {
        alert("Você chegou ao Reino Unido, um lugar novo cheio de desafios e oportunidades.");
        vida += 10;
    } else {
        alert("Lugar desconhecido.");
    }
    
    // Garante que a vida esteja entre 0 e 100
    if (vida < 0) vida = 0;
    if (vida > 100) vida = 100;
}

// Função para coletar um item
function coletarItem(item) {
    if (item === "empatia" || item === "esperanca" || item === "motivacao") {
        inventario[item] += 1;
        alert("Você coletou " + item + "!");
    } else {
        alert("Item desconhecido.");
    }
}

// Função para interagir com um NPC
function interagirComNpc(npc) {
    if (npc === "pai") {
        alert("Seu pai lhe dá conselhos e apoio.");
        inventario.motivacao += 2;
        vida += 5;
    } else if (npc === "refugiado") {
        alert("Você conversa com outro refugiado e compartilha experiências.");
        inventario.empatia += 2;
        vida += 10;
    } else if (npc === "treinador") {
        alert("Seu treinador oferece estratégias para melhorar seu desempenho.");
        inventario.motivacao += 3;
        vida += 5;
    } else {
        alert("NPC desconhecido.");
    }
    
    // Garante que a vida esteja entre 0 e 100
    if (vida < 0) vida = 0;
    if (vida > 100) vida = 100;
}

// Função para enfrentar um desafio
function enfrentarDesafio() {
    if (vida < 50 && inventario.motivacao < 2) {
        alert("Você enfrenta pressão social para desistir dos seus sonhos.");
        vida -= 20;
    } else if (vida < 60 && inventario.motivacao > 2) {
        alert("Você lida com dificuldades financeiras.");
        vida -= 25;
    } else if (vida > 70 && inventario.empatia > 2) {
        alert("Você enfrenta um desafio relacionado à adaptação ao novo país e cultura.");
        vida += 10;
    } else if (vida < 40) {
        alert("Você sofre uma lesão durante o treinamento.");
        vida -= 30;
    } else {
        alert("Você está indo bem e não enfrenta um grande desafio neste momento.");
    }
    
    // Garante que a vida esteja entre 0 e 100
    if (vida < 0) vida = 0;
    if (vida > 100) vida = 100;
}

// Função para verificar o fim do jogo
function verificarFimDeJogo() {
    if (vida <= 0) {
        alert("Você perdeu! Não conseguiu alcançar as Olimpíadas. Tente novamente.");
        return true;
    }
    return false;
}

// Função para a fase 1 do jogo
function fase1() {
    alert("Dia 1: Dorsa nasceu na República Islâmica do Irã e começou a jogar badminton com o pai.");
    explorar("Irã");
    mostrarStatus();

    let escolhaItem = prompt("Qual item você quer coletar? (empatia, esperanca, motivacao)");
    coletarItem(escolhaItem);
    mostrarStatus();

    let escolhaNpc = prompt("Com quem você quer interagir? (pai, refugiado, treinador)");
    interagirComNpc(escolhaNpc);
    mostrarStatus();

    enfrentarDesafio();
    if (verificarFimDeJogo()) return;
}

// Função para a fase 2 do jogo
function fase2() {
    alert("Dia 8: Dorsa se mudou para o Reino Unido e está começando uma nova fase de sua jornada.");
    explorar("Reino Unido");
    mostrarStatus();

    let escolhaItem = prompt("Qual item você quer coletar? (empatia, esperanca, motivacao)");
    coletarItem(escolhaItem);
    mostrarStatus();

    let escolhaNpc = prompt("Com quem você quer interagir? (pai, refugiado, treinador)");
    interagirComNpc(escolhaNpc);
    mostrarStatus();

    enfrentarDesafio();
    if (verificarFimDeJogo()) return;
}

// Função para a fase 3 do jogo
function fase3() {
    alert("Dia 15: Preparação intensa para a competição final.");

    let escolhaTreinamento = prompt("Você quer focar em treinamento físico, mental ou recuperação?");
    if (escolhaTreinamento === "físico") {
        alert("Você treinou intensamente, aumentando sua condição física.");
        vida += 15;
    } else if (escolhaTreinamento === "mental") {
        alert("Você trabalhou sua preparação mental, aumentando sua motivação.");
        inventario.motivacao += 3;
    } else if (escolhaTreinamento === "recuperação") {
        alert("Você focou na recuperação, aumentando sua vida.");
        vida += 10;
    } else {
        alert("Escolha inválida.");
        vida -= 5;
    }
    mostrarStatus();

    enfrentarDesafio();
    if (verificarFimDeJogo()) return;
}

// Função para a fase 4 do jogo
function fase4() {
    alert("Dia 22: Véspera das Olimpíadas.");

    let escolhaPreJogo = prompt("Você quer se motivar com uma mensagem inspiradora, relaxar ou revisar estratégias?");
    if (escolhaPreJogo === "motivação") {
        alert("Você se motivou com uma mensagem inspiradora, sentindo-se mais confiante.");
        inventario.motivacao += 5;
    } else if (escolhaPreJogo === "relaxar") {
        alert("Você optou por relaxar, sentindo-se mais tranquilo.");
        vida += 10;
    } else if (escolhaPreJogo === "estratégias") {
        alert("Você revisou suas estratégias, aumentando sua esperança.");
        inventario.esperanca += 3;
    } else {
        alert("Escolha inválida.");
        vida -= 5;
    }
    mostrarStatus();

    enfrentarDesafio();
    if (verificarFimDeJogo()) return;
}

// Função para a fase final do jogo
function faseFinal() {
    alert("Dia 28: O dia da sua estreia chegou.");

    if (vida > 0) {
        if (inventario.motivacao > 3 && inventario.empatia > 2) {
            alert("Você competiu com coragem e determinação, representando todas as mulheres atletas e superando desafios.");
            alert("Parabéns! Você alcançou as Olimpíadas com sucesso e fez história!");
        } else {
            alert("Você competiu nas Olimpíadas, mas não conseguiu o desempenho esperado devido às suas escolhas anteriores.");
            alert("Você tentou o seu melhor e aprendeu muito com a experiência.");
        }
    } else {
        alert("Você não conseguiu competir devido às suas escolhas anteriores. Tente novamente.");
    }
    mostrarStatus();
}

// Função principal para iniciar o jogo
function jogar() {
    alert("Bem-vindo ao jogo de Dorsa Yavarivafa!");

    fase1();
    if (verificarFimDeJogo()) return;

    fase2();
    if (verificarFimDeJogo()) return;

    fase3();
    if (verificarFimDeJogo()) return;

    fase4();
    if (verificarFimDeJogo()) return;

    faseFinal();
}

// Iniciar o jogo
jogar();
