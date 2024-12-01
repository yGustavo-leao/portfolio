export type DataType = {
    id: number,
    image: string,
    title: string,
    description: string,
    role: string,
    technologies: string[],
    link: {
        github: string,
        live: string
    }
}