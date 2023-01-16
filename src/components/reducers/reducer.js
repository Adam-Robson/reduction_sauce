export const initialState = () => {
  return {
    loadMode: 'rest',
    loadError: null,
    newItemBody: '',
    itemChecked: false,
    list: []
  };
};

export const reducer = (state, action) => {
  switch(action.type) {
    case 'load-start-action': {
      return {
        ...state,
        loadMode: 'loading'
      };
    }

    case 'load-success-action': {
      return {
        ...state,
        newList: action.newList,
        loadMode: 'success'         
      };
    }

    case 'load-error-action': {
      return {
        ...state,
        loadError: action.error
      };
    }
    
    case 'item-body-changed-action': {
      return {
        ...state,
        newItemBody: action.newItemBody
      };
    }

    case 'list-item-checked': {
      const listCopy = [...state.list];
      const index = listCopy.findIndex(item => item.id === action.itemId);
      listCopy[index] = {
        ...listCopy[index],
        checked: action.checked
      };
      return {
        ...state,
        listCopy
      };
    }

    default:
      console.error(
        `${action.type} is not supported`,
        action
      );
      return state;
  }
};
