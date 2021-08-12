//modification de src/Components/ButtonCapacity.js

import React from "react";
import { connect } from "react-redux";
import {hitMonster, hitBack , hitMana ,Turn, playerDeath } from "../actions/index";

import "./Button.css"
const mapStateToProps = (state, props) => {
  // console.log(state,props)

  return {
        player: props.player,
          players:state.players,
          count: state.count,
          btnType: props.type
          
        };

};


const mapDispatchToProps = (dispatch) => {
  
  return {
    hitMonsters: (payload)=> dispatch(hitMonster(payload)),
    hitBacks : (payload)=> dispatch(hitBack(payload)),
    hitManas : (payload)=> dispatch (hitMana(payload)),
    Turns: (payload) => dispatch(Turn(payload)) ,
    death: (payload) => ( dispatch(playerDeath(payload))),
  };
};


const ButtonCapacityConnect = ({ btnType, hitMonsters, hitBacks, player,hitManas,Turns, count, players, death }) => {
  function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(4);
    let result = Math.round(Math.random() * (max - min)) + min;
    return result 
  
  }
  function checkDeath(player) {
    death({id :player.id})
  }


  const combat = () => {
    let id = getRandomInt(1, Object.keys(players).length)
    
    while (players[id]=== undefined || !players[id].pv >0) {
      id = getRandomInt(1, Object.keys(players).length)
    }
    hitMonsters(-5);
    hitBacks({damage: -5, playerId: id});
    hitManas({manare: -5,playerId: player.id});
    Turns({player: player})
    if(count >= 3){
      console.log('test');
      hitBacks({damage: -10, playerId: id})
    }
    
    console.log("aie !");
  };

  const mana = () =>{

  }
  if (player.pv <= 0) {
    checkDeath(player)
  }

function type() {
  switch (btnType) {
    case 'attack':
        return ( <button 
          //permet de desactiver le bouton après que le joueur aille joué. On appelle le player. played (donc son acton puis on la définie en fonction du fait qu'elle soit true , il se passe le bouton désactivé et false on continue comme ça)
          
                  disabled = {player.played ? true : false || player.pv===0 ? true : false || player.mana===0 ? true : false}
          
                    type="button"
                    onClick={()=>combat()}
                    className="btn btn-danger material-tooltip-main "
                >
                  hit
                  <i className="fas fa-bomb"></i> 5<i className="fas fa-fire-alt"></i> - 5
                </button>)
      break;
    case 'mana':
        return ( <button 
          //permet de desactiver le bouton après que le joueur aille joué. On appelle le player. played (donc son acton puis on la définie en fonction du fait qu'elle soit true , il se passe le bouton désactivé et false on continue comme ça)
          
                  disabled = {player.played ? true : false || player.pv===0 ? true : false || player.mana===0 ? true : false}
          
                    type="button"
                    onClick={()=>mana()}
                    className="btn btn-primary material-tooltip-main "
                >
                  heal
                  <i className="fas fa-bomb"></i> 5<i className="fas fa-fire-alt"></i> - 5
                </button>)
      break;
      case 'heal':
        return ( <button 
          //permet de desactiver le bouton après que le joueur aille joué. On appelle le player. played (donc son acton puis on la définie en fonction du fait qu'elle soit true , il se passe le bouton désactivé et false on continue comme ça)
          
                  disabled = {player.played ? true : false || player.pv===0 ? true : false || player.mana===0 ? true : false}
          
                    type="button"
                    onClick={()=>mana()}
                    className="btn btn-success material-tooltip-main "
                >
                  mana
                  <i className="fas fa-fire-alt"></i>  5
                  <i className="fas fa-heart"></i> -5
                </button>)
      break;
    default:
      break;
  }
}
  return (
    <>
     {type()}
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonCapacityConnect);