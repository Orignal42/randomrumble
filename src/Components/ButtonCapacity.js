//modification de src/Components/ButtonCapacity.js

import React from "react";
import { connect } from "react-redux";
import { hitMonster } from "../actions/index";
import { hitBack } from "../actions/index";
import { hitMana } from "../actions/index";

const mapStateToProps = (state, props) => {

  return {
        player: props.player,
          players:state.players,
          
        };

};
const mapDispatchToProps = (dispatch) => {
  
  return {
    hitMonsters: (payload)=> dispatch(hitMonster(payload)),
    hitBacks : (payload)=> dispatch(hitBack(payload)),
    hitManas : (payload)=> dispatch (hitMana(payload))
   
  };
};

const ButtonCapacityConnect = ({ hitMonsters, hitBacks, player,hitManas }) => {
  const combat = () => {
    hitMonsters(-5);
    hitBacks({damage: -5, playerId: player.id});
    hitManas({manareduct: -5,playerId: player.id})
    console.log("aie !");

  };
  return (
    <button
      type="button"
      onClick={() => combat()}
      className="btn btn-success material-tooltip-main "
    >
      hit
      <i className="fas fa-bomb"></i> 5<i className="fas fa-fire-alt"></i> - 5
    </button>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonCapacityConnect);
