var playerAtaque = async (personagem, inimigo) => {
  if (getHouveBotaoPressionado()) {
    var movimento = getMovimento(personagem.movement);
    if (estáCorrendo(movimento)) {
      var acao = getAcao(personagem.action);
      if (estáBloqueando(acao)) {
        personagem.status.dano = personagem.offense - inimigo.defense * inimigo.level;
        personagem.status.defesa = personagem.defense * personagem.level;
        personagem.status.crítico = personagem.critChance;
        inimigo.status.dano = inimigo.offense * inimigo.level;
        inimigo.status.defesa = inimigo.defense * inimigo.level;
        inimigo.status.crítico = inimigo.critChance;
        var dano = await ataque(personagem, inimigo);
        console.log(personagem.name + " causou " + dano + " de dano ao inimigo " + inimigo.name);
      } else {
        console.log("Não pode atacar enquanto está bloqueando.");
      }
    } else {
      console.log("Não pode atacar enquanto está correndo.");
    }
}
}

