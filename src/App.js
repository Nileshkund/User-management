import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, setSearchTerm, setFilters, addToTeam, removeFromTeam } from './actions';
import { selectFilteredUsers, selectTeam, selectTotalPages } from './selectors';

function App() {
  const dispatch = useDispatch();
  const filteredUsers = useSelector(selectFilteredUsers);
  const team = useSelector(selectTeam);
  const totalPages = useSelector(selectTotalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [domainFilter, setDomainFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    setCurrentPage(1);
  };

  const handleDomainFilterChange = (event) => {
    setDomainFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleGenderFilterChange = (event) => {
    setGenderFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleAvailabilityFilterChange = (event) => {
    setAvailabilityFilter(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddToTeam = (user) => {
    dispatch(addToTeam(user));
  };

  const handleRemoveFromTeam = (user) => {
    dispatch(removeFromTeam(user));
  };

  return (
    <div>
      <div>
        <input type="text" value={searchInput} onChange={handleSearchInputChange} placeholder="Search by name" />
        <select value={domainFilter} onChange={handleDomainFilterChange}>
          <option value="">All Domains</option>
          <option value="example.com">example.com</option>
          <option value="example.org">example.org</option>
          {/* Add more domain options here */}
        </select>
        <select value={genderFilter} onChange={handleGenderFilterChange}>
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          {/* Add more gender options here */}
        </select>
        <select value={availabilityFilter} onChange={handleAvailabilityFilterChange}>
          <option value="">All Availability</option>
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
          {/* Add more availability options here */}
        </select>
      </div>
      <div>
        {filteredUsers.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>Domain: {user.domain}</p>
            <p>Gender: {user.gender}</p>
            <p>Availability: {user.availability}</p>
            {user.availability === 'Available' && (
              <button onClick={() => handleAddToTeam(user)}>Add to Team</button>
            )}
          </div>
        ))}
      </div>
      <div>
        {team.length > 0 && (
          <div>
            <h2>Team Details</h2>
            {team.map((user) => (
              <div key={user.id}>
                <h3>{user.name}</h3>
                <p>Domain: {user.domain}</p>
                <p>Gender: {user.gender}</p>
                <p>Availability: {user.availability}</p>
                <button onClick={() => handleRemoveFromTeam(user)}>Remove from Team</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
