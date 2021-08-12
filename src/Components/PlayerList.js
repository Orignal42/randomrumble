import React from 'react';
import PlayerCard from './PlayerCard';
import { connect } from 'react-redux';
import { resetTurn } from '../actions';

const mapStateToProps = state => {

  return { 
    PlayerList: state.players,
    count: state.count
  
  };
 
};
const mapDispatchToProps = (dispatch) => {
  
  return {
    reset : (payload)=>(dispatch(resetTurn(payload)))
  };
};

const PlayerListConnect = ({PlayerList, count, reset}) => {

  const displayPlayers = () => {
    return Object.keys(PlayerList).map(key => {
      if (count >= 4) {
       //   console.log(key);
          
           reset({player: PlayerList[key]})
      }  
      
      return(       
        <PlayerCard key={PlayerList[key].id} player={PlayerList[key]}/>
      )
    });
  }

 
    return (
      <div className='row'>
        {displayPlayers()}
      </div>
    );
  }

  const PlayerList = connect(mapStateToProps,mapDispatchToProps)(PlayerListConnect)


export default PlayerList;