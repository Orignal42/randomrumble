export function hitMonster(payload) {
    return { type: "HIT_MONSTER", payload }
  };

  export function hitBack(payload) {
    return { type: "HIT_BACK", payload }
  };

  export function hitMana(payload) {
    return { type: "MANA", payload }
  };


  export  function Turn(payload) {

    return { type: "TURN", payload }
};
  export  function resetTurn(payload) {

  return { type: "RESET_TURN", payload }
};

export  function playerDeath(payload) {
  return { type: "PLAYER_DEATH", payload }
};

