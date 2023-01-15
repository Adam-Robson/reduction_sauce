export const initialState = {
  loadMode: 'rest',
  loadError: null,
  list: []
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
        loadMode: 'rest'
      };
    }

    case 'load-error-action': {
      return {
        loadError: null
      };
    }
    
    default:
      console.error(`${action.type} is not supported`);
      return state;


  }
};
