//modification de src/Components/ButtonCapacity.js

import React from "react";
import { connect } from "react-redux";
import { hitMonster } from "../actions/index";
import { hitBack } from "../actions/index";
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
const mapDispatchToProps = (dispatch) => {
  
  return {
    hitMonsters: (payload)=> dispatch(hitMonster(payload)),
    hitBacks : (payload)=> dispatch(hitBack(payload)),
    hitManas : (payload)=> dispatch (hitMana(payload)),
    Turns: (payload) => { dispatch(Turn(payload)) },
  };
};

const ButtonCapacityConnect = ({ hitMonsters, hitBacks, player,hitManas,Turns, count, players }) => {
  const combat = () => {
    hitMonsters(-5);
    hitBacks({damage: -5, playerId: player.id});
    hitManas({manare: -5,playerId: player.id});
    Turns({player: player})
   
    console.log("aie !");

  };

  // console.log(count);
  
  return (
    <>
      <button 
        disabled = {player.played ? true : false}
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
