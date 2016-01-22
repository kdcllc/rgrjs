import AppDispatchter from '../AppDispatchter';
import {ActionTypes} from '../Constants';

let ServerActions = {
    receivedLinks(links) {
        console.log('2. In ServerActions');
        
        AppDispatchter.dispatch({
            actionType: ActionTypes.RECEIVE_LINKS,
            links
        })
    }
};
export default ServerActions;
