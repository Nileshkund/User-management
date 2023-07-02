export const fetchUsers = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://drive.google.com/uc?export=download&id=1ibmr3WD7Jw6oLL6O_W390WojCLfCHw-k');
        const data = await response.json();
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
      }
    };
  };
  
  export const setSearchTerm = (searchTerm) => {
    return { type: 'SET_SEARCH_TERM', payload: searchTerm };
  };
  
  export const setFilters = (filters) => {
    return { type: 'SET_FILTERS', payload: filters };
  };
  
  export const addToTeam = (user) => {
    return { type: 'ADD_TO_TEAM', payload: user };
  };
  
  export const removeFromTeam = (user) => {
    return { type: 'REMOVE_FROM_TEAM', payload: user };
  };
  