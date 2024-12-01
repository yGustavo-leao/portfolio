import Image from "next/image";
import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 2rem 0 6rem 0;

    max-width: 1000px;
    margin: auto;
`

export const Introduction = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const IntroductionContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 2rem 1rem;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.element};

    @media (min-width: 800px) {
        max-width: 500px;
        padding: 3rem 2rem;
    }
`

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.text};
`

export const Info = styled.p`
    color: ${({ theme }) => theme.colors.subText};
`

export const Highlight = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.highlight};
`

export const Technologies = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    column-gap: .5rem;
`

export const TechnologieIcon = styled(Image)`
`

export const Avatar = styled(Image)`
    align-self: center;
    border-radius: 50%;

    @media (min-width: 800px) {
        width: 250px;
        height: 250px;
        border-radius: 20px;
    }

    @media (min-width: 900px) {
        width: 300px;
        height: 300px;
    }
`

export const Projects = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
    height: 500px;
    border-radius: 10px;
    overflow: auto;
    align-self: center;

    @media (min-width: 800px) {
        flex-direction: row;
        overflow-x: auto;
        column-gap: 1rem;
        border: none;
    }
`

export const Card = styled.div`
    min-width: 300px;
    max-width: 300px;
    min-height: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    backdrop-filter: blur(10px);
    background-color: ${({ theme }) => theme.colors.card};
    padding: 1rem;
    `

export const BannerContainer = styled.div`
    height: 170px;
    overflow: hidden;
    position: relative;
`

export const CardBanner = styled(Image)`
    object-fit: cover;
    max-height: 170px;
`

export const CardTitle = styled.h2`
    color: ${({ theme }) => theme.colors.text};
`

export const CardDescription = styled.p`
    font-size: .9rem;
    color: ${({ theme }) => theme.colors.subText};
`

export const CardFooter = styled.footer`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
`

export const GithubIcon = styled(Image)`

`

export const PageLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-weight: bold;
    background: transparent;
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
`

export const ShowSiteIcon = styled(Image)`
`

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    column-gap: 1rem;
    padding: 1rem;
    backdrop-filter: blur(10px);
    background-color: ${({ theme }) => theme.colors.element};
`

export const FooterIcon = styled(Image)`
`