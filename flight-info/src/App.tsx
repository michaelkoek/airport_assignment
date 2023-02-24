import React, { useEffect, useState } from 'react';
import { Input } from './components/Input';
import JSONDATA from './data/flights.json'

/**
 * TODO'S
 * [x] Create input
 * [x] Input reacts to 3 char or more
 * [] convert to lowercase()
 * [x] No flight information initially
 * [] Fetch from JSON using Fetch API
 * [x] Show *destination airports* containing input filter 
 * [] Show max 5 flights
 *    [] if input has length and map is empty, show 'no flights' message
 * [] Results should be sortable on date
 * [] Design UI using provided colors
 * [] Write test
 */


interface FlightInfoProps {
  flightIdentifier: string;
  flightNumber: string;
  airport: string;
  expectedTime: string;
  originalTime: string;
  url: string;
  score: string;
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [flightsData, setFlightsData] = useState<FlightInfoProps[] | null>(null);
  const [queriedFlights, setQueriedFlights] = useState<FlightInfoProps[] | undefined>(undefined);

  const searchQueryCondition = searchQuery.length >= 3;

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch('./data/flights.json')
    //   console.log({ response })
    //   const { flights } =  await response.json();
    //   console.log({ flights })
    // }
    // fetchData();
    setFlightsData(JSONDATA.flights)
  }, []);

  useEffect(() => {
      const filteredFlights = flightsData?.filter(
        (flightData) => 
          searchQueryCondition && flightData.airport.includes(searchQuery) ? 
            flightData : 
            undefined
        );
      setQueriedFlights(filteredFlights)
  }, [searchQuery]);

  return (
    <div className="App">
      <section>
        <input type="search" onChange={(e) => setSearchQuery(e.target.value)} />

        {searchQueryCondition && 
          (!!queriedFlights?.length?
            <section>
            <ul>
              {queriedFlights.map(({ airport, flightNumber, flightIdentifier }) => (
                <li key={flightIdentifier}>
                  <article>
                    <span>{ airport }</span> | <span>{ flightNumber }</span>
                  </article>
                </li>
              ))}
            </ul>
          </section>
          :
          <p>No flights found</p>
        )}

      </section>
    </div>
  );
}

export default App;
