const initialState = {
    users: [],
    searchTerm: '',
    filters: {},
    team: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS_SUCCESS':
        return { ...state, users: action.payload };
      case 'FETCH_USERS_FAILURE':
        return state; // Handle error state if necessary
      case 'SET_SEARCH_TERM':
        return { ...state, searchTerm: action.payload };
      case 'SET_FILTERS':
        return { ...state, filters: action.payload };
      case 'ADD_TO_TEAM':
        return { ...state, team: [...state.team, action.payload] };
      case 'REMOVE_FROM_TEAM':
        return { ...state, team: state.team.filter((user) => user.id !== action.payload.id) };
      default:
        return state;
    }
  };
  
  export default reducer;
  