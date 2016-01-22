import AppDispatchter from '../AppDispatchter';
import {ActionTypes} from '../Constants';
import {EventEmitter} from 'events';

let _links = [];

class LinkStore extends EventEmitter {
    constructor(props) {
        super(props);

        AppDispatchter.register(action => {
            switch (ActionTypes.RECEIVE_LINKS) {
                case ActionTypes.RECEIVE_LINKS:
                    console.log('3. In Store');
                    _links = action.links;
                    this.emit('change');
                    break;
                default:
                //do nothing
            }
        });
    }
    
    getAll() {
        return _links;
    }
}

export default new LinkStore();