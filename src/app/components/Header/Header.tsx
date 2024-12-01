import { A, Container, Li, Nav, Ul } from "./Header.styled"

export const Header = () => {
    return (
        <Container>
            <Nav>
                <Ul>
                    <A href="#sobre-mim">
                        <Li>Sobre mim</Li>
                    </A>
                    <A href="#projects">
                        <Li>Projetos</Li>
                    </A>
                    <A href="#contact">
                        <Li>Contato</Li>
                    </A>
                </Ul>
            </Nav>
        </Container>
    )
}