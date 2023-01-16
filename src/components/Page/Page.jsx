import Form from '../Form/Form';
import List from '../List/List';
import { 
  itemBodyChangedAction,
  itemCheckedAction
} from '../../actions/actions';
import { useContext, useEffect } from 'react';
import { Context } from '../../context/ContextProvider';
import { createItem, getItems } from '../../services/fetch';
import { listEffects } from '../../effects/listEffects';

const Page = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    getItems(dispatch);
  }, []);

  const changeCheckbox = (itemId, checked) => {
    dispatch(itemCheckedAction(itemId, checked));
  };

  const onBodyChange = (body) => {
    dispatch(itemBodyChangedAction(body));
  };
  
  return (
    <>
      <h1>My Shopping List</h1>
      <Form 
        body={ state.newBody }
        onBodyChange={ onBodyChange }
        onSubmission={async (body) => {
          await createItem(body);
          listEffects(dispatch);
          dispatch(itemBodyChangedAction(''));        
        }}
      />
      {
        state.loadMode === 'loading' ?
          <p>Loading!</p> :
          <List list={ state.list } handleCheckedById={ (itemId, checked) => {
            changeCheckbox(itemId, checked);
          } } />
      }
    </>
  );
};

export default Page;
