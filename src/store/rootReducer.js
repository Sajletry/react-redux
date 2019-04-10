import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {testReducer} from "../features/testFeature"; //импортимм

export default function rootReducer(history) {
    return combineReducers({
        router: connectRouter(history),
        testReducer: testReducer//подключаем наш новый редюсер
    });
}
