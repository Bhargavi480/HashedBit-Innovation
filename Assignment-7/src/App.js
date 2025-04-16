import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  return (
    <div className="App">
      <h1>IPL 2022 Points Table</h1>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches Played</th>
            <th>Won</th>
            <th>Lost</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.length === 0 ? (
            <tr>
              <td colSpan="5">Loading data...</td>
            </tr>
          ) : (
            teams.map((team) => (
              <tr key={team.Team}>
                <td>{team.Team}</td>
                <td>14</td> {/* Fixed Matches Played */}
                <td>{team.Won ?? 0}</td>
                <td>{team.Lost ?? 0}</td>
                <td>{team.NRR ?? 0}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
