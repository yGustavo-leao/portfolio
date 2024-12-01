import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: end;
    padding: 1rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    backdrop-filter: blur(10px);
    background-color: ${({theme}) => theme.colors.element};
    color: ${({theme}) => theme.colors.text};

    @media (min-width: 800px) {
        display: none;
    }

    display: none;
`

export const Nav = styled.nav`
`

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    column-gap: 1rem;
`

export const Li = styled.li`
`

export const A = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: ${({theme}) => theme.colors.text};
`