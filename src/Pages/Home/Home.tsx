import { Feed, Head } from "Components"

export const Home = () => {
  return (
    <section>
      <Head title='Fotos' description='Home do site dogs, com o feed de fotos.' />
      <Feed user={'0'} />
    </section>
  )
}
