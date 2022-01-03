import styled from 'styled-components';

export const ContainerPhoto = styled.div`
    display: grid;
    gap: 1rem;
    grid-auto-rows: 12rem;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill,minmax(min(100%,20rem),1fr));
    justify-items: center;
    align-items: center;
    padding: 20px
`;