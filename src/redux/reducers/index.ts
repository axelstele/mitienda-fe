import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import user from './user';
import articles from './articles';
import categories from './categories';
import global from './global';

export default (history: History<any>) => combineReducers({
  router: connectRouter(history),
  user,
  articles,
  categories,
  global,
});
