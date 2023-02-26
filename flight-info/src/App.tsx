import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AirportCard } from "./components/airportCard/AirportCard";

import { Input } from "./components/input/Input";
// import JSONDATA from "./data/flights.json";

/**
 * TODO'S
 * [x] Create input
 * [x] Input reacts to 3 char or more
 * [x] convert to lowercase()
 * [x] No flight information initially
 * [x] Fetch from JSON using Fetch API
 * [x] Show *destination airports* containing input filter
 * [x] Show max 5 flights
 *    [x] if input has length and map is empty, show 'no flights' message
 * [x] Results should be sortable on date
 *    [x] Results should be sortable
 * [x] Design UI using provided colors
 * [x] Write test
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

const ListContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
`;
const ListItem = styled.li`
    width: calc((100% / 3) - 20px);
    padding: 10px;
`;

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [flightsData, setFlightsData] = useState<FlightInfoProps[]>([]);
    const [queriedFlights, setQueriedFlights] = useState<FlightInfoProps[]>([]);
    const [isReversedOrder, setIsReversedOrder] = useState(false);

    const searchQueryCondition = searchQuery.length >= 3;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("flights.json");
            const { flights } = await response.json();
            setFlightsData(flights);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const filteredFlights = flightsData.filter((flightData) => {
            const airportName = flightData.airport.toLowerCase();
            const searchInput = searchQuery.toLowerCase();
            return (
                searchQueryCondition &&
                airportName.includes(searchInput) && {
                    ...flightData,
                    sortValue: +flightData.originalTime.replace(":", ""),
                }
            );
        });

        setQueriedFlights(filteredFlights);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);

    const sortedFlights = (
        flights: FlightInfoProps[],
        reverseOrder?: boolean
    ) => {
        const flightLimit = flights.slice(0, MAX_RESULT);
        return reverseOrder ? flightLimit.reverse() : flightLimit.sort();
    };

    return (
        <AppContainer className="App">
            <section>
                <SearchInput
                    data-testid="search_input"
                    label="Search an Airport"
                    name="search_input"
                    type="search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="type here the name of the airport..."
                />
                {queriedFlights.length > 0 && (
                    <section>
                        <button
                            onClick={() =>
                                setIsReversedOrder((prevState) => !prevState)
                            }
                        >
                            Reverse flight order
                        </button>
                    </section>
                )}

                {searchQueryCondition && (
                    <section>
                        {queriedFlights.length > 0 ? (
                            <ListContainer>
                                {sortedFlights(
                                    queriedFlights,
                                    isReversedOrder
                                ).map(
                                    ({
                                        airport,
                                        flightNumber,
                                        flightIdentifier,
                                        expectedTime,
                                        originalTime,
                                    }) => (
                                        <ListItem key={flightIdentifier}>
                                            <AirportCard
                                                flightId={flightIdentifier}
                                                flightNumber={flightNumber}
                                                expectedTime={expectedTime}
                                                originalTime={originalTime}
                                                airport={airport}
                                            />
                                        </ListItem>
                                    )
                                )}
                            </ListContainer>
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
