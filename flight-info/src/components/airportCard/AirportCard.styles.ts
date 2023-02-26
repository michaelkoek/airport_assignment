import styled from "styled-components";

const ANIMATE_DURATION = 70;
const ANIMATE_TIMING = "ease-in";
const BORDER_RADIUS = "5px";

export const Container = styled.article`
    position: relative;
    padding: 10px 10px 50px;
    box-shadow: 0px 5px 7px 1px var(--grey-storm);
    border: 1px solid var(--grey-storm);
    border-radius: ${BORDER_RADIUS};
    background-image: var(--gradient-flights);
    transition: transform ${ANIMATE_DURATION}ms ${ANIMATE_TIMING},
        scale ${ANIMATE_DURATION * 2}ms ${ANIMATE_TIMING};

    &:hover {
        transform: translate(0, -5px);
        scale: 101%;
    }
`;

export const Header = styled.h1`
    margin: 5px;
    font-size: 24px;
    text-align: center;
`;

export const BottomContainer = styled.section`
    background-color: var(--seebuyfly-yellow);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom-left-radius: ${BORDER_RADIUS};
    border-bottom-right-radius: ${BORDER_RADIUS};
`;

export const AirportName = styled.p`
    width: 100%;
    text-align: center;
    font-weight: 600;
`;

export const Timers = styled.section`
    margin: 10px 0;
    span {
        margin-bottom: 5px;
        display: block;
    }
`;
