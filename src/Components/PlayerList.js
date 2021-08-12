import React from 'react';
import PlayerCard from './PlayerCard';
import { connect } from 'react-redux';
import { resetTurn, playerDeath } from '../actions';

const mapStateToProps = state => {

  return { 
    PlayerList: state.players,
    count: state.count
  
  };
 
};
const mapDispatchToProps = (dispatch) => {
  
  return {
    reset : (payload)=>(dispatch(resetTurn(payload))),
  };
};

const PlayerListConnect = ({PlayerList, count, reset, death}) => {

  const displayPlayers = () => {
   
    return Object.keys(PlayerList).map(key => {
      console.log(Object.keys(PlayerList).length , count);
      if (count >= Object.keys(PlayerList).length) {
       //   console.log(key);
          
           reset({player: PlayerList[key]})
      }  
      
      return(       
        <PlayerCard key={key} player={PlayerList[key]}/>
      )
    });
  }

 
    return (
      <div className='row'>
        {displayPlayers() }
      </div>
    );
  }

  const PlayerList = connect(mapStateToProps,mapDispatchToProps)(PlayerListConnect)


export default PlayerList;