'use client'

import { Avatar, BannerContainer, Card, CardBanner, CardDescription, CardFooter, CardTitle, Container, Footer, FooterIcon, GithubIcon, Highlight, Info, Introduction, IntroductionContainer, PageLink, Projects, ShowSiteIcon, TechnologieIcon, Technologies, Title } from "./home/Home.styled"
import data from '../assets/data/data.json'
import { useEffect, useState } from "react"
import { DataType } from "@/types/DataType";

export default function Home() {
  const [projects, setProjects] = useState<DataType[]>([]);

  useEffect(() => {
    setProjects(data)
  }, [])
  return (
    <Container>
      <Introduction id="sobre-mim">
        <IntroductionContainer>
          <Title>Olá meu chamo <Highlight>Gustavo leão</Highlight>, sou desenvolvedor <Highlight>fullstack</Highlight>!</Title>
          <Info>
            Atualmente desenvolvendo com <Highlight>React</Highlight>, <Highlight>Next.js</Highlight>, <Highlight>Styled components</Highlight> e <Highlight>Typescript</Highlight>. Quando não estou codando, gosto de explorar design gráfico e aprender novas tecnologias.
          </Info>

          <Technologies>
            <TechnologieIcon src="/images/icons/react.svg" width={40} height={40} alt="React icon" />
            <TechnologieIcon src="/images/icons/nextjs.svg" width={40} height={40} alt="Next icon" />
            <TechnologieIcon src="/images/icons/typescript.svg" width={40} height={40} alt="Typescript icon" />
            <TechnologieIcon src="/images/icons/nodejs.svg" width={40} height={40} alt="NodeJS icon" />
            <TechnologieIcon src="/images/icons/mysql.svg" width={40} height={40} alt="MySQL icon" />
            <TechnologieIcon src="/images/icons/mongodb.svg" width={40} height={40} alt="mongoDB icon" />
          </Technologies>
        </IntroductionContainer>

        <Avatar src="/images/photo.jpg" width={200} height={200} alt="github icon" />
      </Introduction>

      <Projects id="projects">
        {
          projects.map(current =>
            <Card key={current.id} id={`${current.id}`}>
              <BannerContainer>
                <CardBanner src={current.image} fill sizes="268px" alt="Imagem do projeto" />
              </BannerContainer>
              <CardTitle>{current.title}</CardTitle>
              <CardDescription>{current.description}</CardDescription>

              <CardFooter>
                {
                  current.link.github ?
                    (
                    <PageLink href={current.link.github} target="_blank">
                      <GithubIcon src="/images/icons/github.svg" width={30} height={30} alt="Ícone do Github" />
                    </PageLink>
                    ) : null
                }

                <PageLink href={current.link.live} target="_blank">
                  Ver site
                  <ShowSiteIcon src="images/icons/right-arrow.svg" width={30} height={30} alt="Ícone de seta" />
                </PageLink>
              </CardFooter>
            </Card>
          )
        }

        <Footer id="contact" >
          <PageLink href="https://github.com/ygustavo-leao" target="_blank">
            <FooterIcon src="images/icons/github.svg" width={50} height={50} alt="Ícone do Github" />
          </PageLink>
          <PageLink href="https://www.linkedin.com/in/gustavo-le%C3%A3o-2288a1332/" target="_blank" >
            <FooterIcon src="images/icons/linkedin.svg" width={50} height={50} alt="Ícone do Linkedin" />
          </PageLink>
        </Footer>
      </Projects>
    </Container>
  )
}
