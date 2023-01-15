import {
  loadStartAction,
  loadSuccessAction,
  loadErrorAction
} from '../actions/actions';
import { getItems } from '../services/fetch-utils';

export const listEffects = async (dispatch) => {
  dispatch(loadStartAction());
  try {
    const items = await getItems();
    dispatch(loadSuccessAction(items));
  } catch (err) {
    dispatch(loadErrorAction(err));
  }
};
