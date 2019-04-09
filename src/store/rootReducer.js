import { combineReducers } from 'redux'; // метод для объеденения редьюсеров
import { connectRouter } from 'connected-react-router' // метод для подключения роутинга к Redux


export default function rootReducer(history) { // сборка наших редюсеров
    return combineReducers({
        router: connectRouter(history)
    });
}
