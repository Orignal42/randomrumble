import React from 'react';
import PlayerCard from './PlayerCard';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  // console.log(state.players )
  return { PlayerList: state.players };
 
};


const PlayerListConnect = ({PlayerList}) => {

  const displayPlayers = () => {
    return Object.keys(PlayerList).map(key => (  
       
        <PlayerCard key={PlayerList[key].id} player={PlayerList[key]}
        />
      
    ));
    }
 
    return (
      <div className='row'>
        {displayPlayers()}
      </div>
    );
  }

  const PlayerList = connect(mapStateToProps)(PlayerListConnect)


export default PlayerList;