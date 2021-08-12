//modification de src/Components/ButtonCapacity.js

import React from "react";
import { connect } from "react-redux";
import { hitMonster } from "../actions/index";
import { hitBack } from "../actions/index";
import { bigAttack } from "../actions/index";
import { hitMana } from "../actions/index";
import { Turn } from "../actions/index";

import "./Button.css"
const mapStateToProps = (state, props) => {
  // console.log(state,props)

  return {
        player: props.player,
          players:state.players,
          count: state.count
          
        };

};

function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(4);
let result=Math.floor(Math.random() * (max - min)) + min;
return result 

}


console.log(getRandomInt())

const mapDispatchToProps = (dispatch) => {
  
  return {
    hitMonsters: (payload)=> dispatch(hitMonster(payload)),
    hitBacks : (payload)=> dispatch(hitBack(payload)),
    hitManas : (payload)=> dispatch (hitMana(payload)),
    Turns: (payload) => { dispatch(Turn(payload)) },
    bigAttacks : (payload)=> dispatch(bigAttack(payload)),
  };
};


const ButtonCapacityConnect = ({ hitMonsters, hitBacks, player,hitManas,Turns, count, players,bigAttacks }) => {
  const combat = () => {
    hitMonsters(-5);
    hitBacks({damage: -5, playerId: player.id});
    hitManas({manare: -5,playerId: player.id});
    Turns({player: player})
    if(count>=3){

    bigAttacks({bigdamage: -10, playerId: player.id});
  }
 
   
    console.log("aie !");

  };

  // console.log(count);

  return (
    <>
      <button 
//permet de desactiver le bouton après que le joueur aille joué. On appelle le player. played (donc son acton puis on la définie en fonction du fait qu'elle soit true , il se passe le bouton désactivé et false on continue comme ça)

        disabled = {player.played ? true : false || player.pv===0 ? true : false || player.mana===0 ? true : false}

          type="button"
          onClick={() =>combat()}
          className="btn btn-success material-tooltip-main "
      >
        hit
        <i className="fas fa-bomb"></i> 5<i className="fas fa-fire-alt"></i> - 5
      </button>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonCapacityConnect);