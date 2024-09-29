// Função para calcular o saldo de vitórias e determinar o nível
function calcularRank(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel;

  // Estruturas de decisão para definir o nível do jogador
  if (vitorias < 10) {
      nivel = "Ferro 🛠️";
  } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze 🥉";
  } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata 🥈";
  } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro 🥇";
  } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante 💎";
  } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário 🏆";
  } else if (vitorias >= 101) {
      nivel = "Imortal 👑";
  }

  return { saldoVitorias, nivel };
}

// Função para calcular o histórico de vitórias e derrotas
function calcularHistorico(partidas) {
  let totalVitorias = 0;
  let totalDerrotas = 0;

  for (let i = 0; i < partidas.length; i++) {
      totalVitorias += partidas[i].vitorias;
      totalDerrotas += partidas[i].derrotas;
  }

  const mediaVitorias = totalVitorias / partidas.length;
  const mediaDerrotas = totalDerrotas / partidas.length;

  return { mediaVitorias, mediaDerrotas };
}

// Função para calcular a porcentagem de vitórias
function calcularPorcentagem(vitorias, derrotas) {
  const totalPartidas = vitorias + derrotas;
  const porcentagemVitorias = (vitorias / totalPartidas) * 100;
  return porcentagemVitorias.toFixed(2);
}

// Função para dar feedback de performance
function darFeedback(porcentagemVitorias) {
  if (porcentagemVitorias >= 80) {
      return "🏆 Excelente! Você está dominando o campo de batalha!";
  } else if (porcentagemVitorias >= 60) {
      return "🔥 Ótimo trabalho! Continue assim e você vai longe!";
  } else if (porcentagemVitorias >= 40) {
      return "👍 Bom esforço, mas há espaço para melhorar!";
  } else {
      return "🤔 Precisamos revisar a estratégia. Você consegue melhorar!";
  }
}

// Função principal que faz tudo junto
function mostrarResultadoJogador(partidas) {
  for (let i = 0; i < partidas.length; i++) {
      const { vitorias, derrotas } = partidas[i];
      const { saldoVitorias, nivel } = calcularRank(vitorias, derrotas);
      const porcentagemVitorias = calcularPorcentagem(vitorias, derrotas);
      const feedback = darFeedback(porcentagemVitorias);

      // Formatação de saída personalizada
      console.log("\n-------------------------------------------");
      console.log(`🧙‍♂️ Herói ${i + 1}`);
      console.log(`Saldo de vitórias: ${saldoVitorias} ⚔️`);
      console.log(`Nível: ${nivel}`);
      console.log(`Porcentagem de vitórias: ${porcentagemVitorias}% 🏹`);
      console.log(`Feedback: ${feedback}`);
      console.log("-------------------------------------------");
  }

  const historico = calcularHistorico(partidas);
  console.log("\n📊 Histórico Geral:");
  console.log(`Média de vitórias por partida: ${historico.mediaVitorias.toFixed(2)} 🏅`);
  console.log(`Média de derrotas por partida: ${historico.mediaDerrotas.toFixed(2)} 💥`);
}

// Exemplo de uso da função
const partidas = [
  { vitorias: 15, derrotas: 5 },
  { vitorias: 50, derrotas: 25 },
  { vitorias: 105, derrotas: 30 }
];

// Chamar a função principal
mostrarResultadoJogador(partidas);
