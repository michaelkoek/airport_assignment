import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Input } from "./components/Input";
import JSONDATA from "./data/flights.json";
import { GlobalStyles } from "./helpers/GlobalStyles";

/**
 * TODO'S
 * [x] Create input
 * [x] Input reacts to 3 char or more
 * [x] convert to lowercase()
 * [x] No flight information initially
 * [] Fetch from JSON using Fetch API
 * [x] Show *destination airports* containing input filter
 * [] Show max 5 flights
 *    [x] if input has length and map is empty, show 'no flights' message
 * [] Results should be sortable on date
 *    [] Results should be sortable
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

const MAX_RESULT = 5;

const AppContainer = styled.section`
    padding: 20px;
`;

const SearchInput = styled(Input)`
    font-size: 21px;
`;

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [flightsData, setFlightsData] = useState<FlightInfoProps[]>([]);
    const [queriedFlights, setQueriedFlights] = useState<FlightInfoProps[]>([]);

    const searchQueryCondition = searchQuery.length >= 3;

    useEffect(() => {
        // const fetchData = async () => {
        //   const response = await fetch('./data/flights.json')
        //   console.log({ response })
        //   const { flights } =  await response.json();
        //   console.log({ flights })
        // }
        // fetchData();
        setFlightsData(JSONDATA.flights);
    }, []);

    useEffect(() => {
        const filteredFlights = flightsData.filter((flightData) => {
            const airportName = flightData.airport.toLowerCase();
            const searchInput = searchQuery.toLowerCase();
            return (
                searchQueryCondition &&
                airportName.includes(searchInput) &&
                flightData
            );
        });

        setQueriedFlights(filteredFlights);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);

    return (
        <AppContainer className="App">
            <GlobalStyles />
            <section>
                <SearchInput
                    label="Search an Airport"
                    name="search_input"
                    type="search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="type here the name of the airport..."
                />

                {searchQueryCondition && (
                    <section>
                        {queriedFlights.length > 0 ? (
                            <ul>
                                {queriedFlights
                                    .slice(0, MAX_RESULT)
                                    .map(
                                        ({
                                            airport,
                                            flightNumber,
                                            flightIdentifier,
                                        }) => (
                                            <li key={flightIdentifier}>
                                                <article>
                                                    <span>{airport}</span> |{" "}
                                                    <span>{flightNumber}</span>
                                                </article>
                                            </li>
                                        )
                                    )}
                            </ul>
                        ) : (
                            <p>No flights found</p>
                        )}
                    </section>
                )}
            </section>
        </AppContainer>
    );
}

export default App;
