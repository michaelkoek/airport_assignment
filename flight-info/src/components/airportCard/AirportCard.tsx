import React from "react";

import {
    AirportName,
    BottomContainer,
    Container,
    Header,
    Timers,
    InnerContainer,
} from "./AirportCard.styles";

interface AirportCardProps {
    flightId: string;
    flightNumber: string;
    expectedTime: string;
    originalTime: string;
    airport: string;
}

export const AirportCard = ({
    airport,
    flightId,
    flightNumber,
    expectedTime,
    originalTime,
}: AirportCardProps) => {
    return (
        <Container>
            <Header>{flightId}</Header>
            <InnerContainer>
                <section>
                    <span>Flight number: {flightNumber}</span>
                </section>

                <Timers>
                    <span>Expected: {expectedTime}</span>
                    <span>Original: {originalTime}</span>
                </Timers>
            </InnerContainer>
            <BottomContainer>
                <AirportName>{airport}</AirportName>
            </BottomContainer>
        </Container>
    );
};
