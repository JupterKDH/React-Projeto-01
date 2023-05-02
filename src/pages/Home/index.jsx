import { Container } from "./styles";
import headImg from "../../assets/sala.png"
import headImg2 from "../../assets/sala.jpg"
import headImg3 from "../../assets/sala.avif"
import balls from "../../assets/balls.svg"

export function Home(){
  return (
    <Container>
      <header>
        <img 
        src={headImg} 
        alt="Desenho de sala com móveis"/>
        <img 
        src={headImg2} 
        alt="Desenho de sala com móveis"/>
        <img 
        src={headImg3} 
        alt="Desenho de sala com móveis"/>

      </header>

      <main>
        <h1>Ambientes <span>únicos</span> para você!</h1>

        <p>Nós criamos ambientes <strong>exclusivos</strong> e <strong>únicos</strong> com muito bom gosto e profissionalismo, investimos tempo e <span>dedicação no seu projeto</span>.
        <br />
        <br />
        
        Tenha <span>ambientes limpos</span> e bem decorados, transmitindo <strong>elegância</strong> e <strong>finesse</strong> para todo aquele que estiver ali.
        </p>
      </main>

      <footer>
        <a
        target="_blank" 
        href="https://instagram.com/moveisparavoce">
          Instagram  
        </a>

        <a href="mailto:contato@moveisparavoce.com">
          Fale conosco 
        </a>
      </footer>

      <img 
      id="balls"
      src={balls}
      alt="Bolinhas laranjadas no canto direito inferior da tela"/>
    </Container>
  )
}