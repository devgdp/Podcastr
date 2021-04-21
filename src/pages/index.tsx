// Formas de consumir API
// Tradicional SPA - Implica no Crawler  de busca para indexação do site
// useEffect(() => {
//   fetch('http://localhost:3333/episodes')
//   .then(response => response.json())
//   .then(data => console.log(data))
// })

// SSR 
// export async function getServerSideProps(){
//     const response = await fetch('http://localhost:3333/episodes')
//     const data = await response.json()

//     return { 
//       props: {
//         episodes: data,
        
//       }
//     }
// }
    

// SSG
// Método Escolhido abaixo, criando uma parte estática da pagina usado quando a pagina nao muda constantemente, atualizando em um intervalo especifico


export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return { 
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 *8
  }
}
