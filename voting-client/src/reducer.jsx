import {Map, fromJS} from 'immutable';

function setState(state, newState) {
  return state.merge(state, newState);
}

export default function(state = Map(), action) {
  switch(action.type){
  case 'SET_STATE':
    return setState(state, action.state);
  }

  return state;
}