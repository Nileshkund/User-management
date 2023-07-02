export const selectFilteredUsers = (state) => {
    const { users, searchTerm, filters } = state;
    return users.filter((user) => {
      const nameMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
      const domainMatch = filters.domain ? user.domain === filters.domain : true;
      const genderMatch = filters.gender ? user.gender === filters.gender : true;
      const availabilityMatch = filters.availability ? user.availability === filters.availability : true;
      return nameMatch && domainMatch && genderMatch && availabilityMatch;
    });
  };
  
  export const selectTeam = (state) => state.team;
  
  export const selectTotalPages = (state) => Math.ceil(selectFilteredUsers(state).length / 20);
  