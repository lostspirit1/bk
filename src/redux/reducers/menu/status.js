import {TOGGLE_MENU } from '../../actions/menu/types';

const initialState = {
    menuStatus: true,
};

const CheckingStatus = ( state = initialState, action) => {
    switch (action.type){
        case TOGGLE_MENU:
            return{
              ...state,
              menuStatus: !state.menuStatus
            }

        default:
        return state;
    }
}

export default CheckingStatus;