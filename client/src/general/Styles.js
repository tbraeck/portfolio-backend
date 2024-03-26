import styled from 'styled-components';

export const Heading = styled.h1`
    text-align: center;
    color: green;
`;

export const Content = styled.div`
    overflow-y: scroll; /* Note the correct property name: overflow-y */
    height: 2500px;
`;

export const Button = styled.div`
    position: fixed;
    width: 100%;
    left: 95%;
    bottom: 60px;
    height: 20px;
    font-size: 3rem;
    z-index: 7;
    cursor: pointer;
    color: violet;
`;
