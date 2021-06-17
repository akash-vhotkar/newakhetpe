import {combineReducers} from  'redux'
import Card from './card';
import user from './userdata';
const allreducers = combineReducers({
    user,
    Card
})
export default allreducers;


