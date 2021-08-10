//modification de src/Components/ButtonCapacity.js
 
import React from 'react';
import { connect } from 'react-redux'
import { hitMonster } from '../actions'

const mapStateToProps = (state) => {
    console.log(state)

}
const mapDispatchToProps = (dispatch) => {
    return {
        hitMonster: (payload)=>dispatch(hitMonster(payload)),
    };
}
 
const ButtonCapacityConnect = ({hitMonsters}) => {
    const combat = () => {
     hitMonster(-5)
      console.log('aie !', combat)
    }
    return (
        <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main ">
            hit
            <i className="fas fa-bomb"></i> 5
        <i className="fas fa-fire-alt"></i> - 5
    </button>
    )
}
 
export default connect( mapStateToProps , mapDispatchToProps)(ButtonCapacityConnect);