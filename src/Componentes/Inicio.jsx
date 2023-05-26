import '../styles/inicio.css';
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

export const Inicio = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="Inicio" id="Inicio">
      <Container className='Container'>
        <Row>
          <Col className='columna'>
            <div className="inicio-box">
              <h2>"Tucumán: Un Destino que Encanta"</h2>
              <p>
                Tucumán es una provincia Argentina ubicada en el noroeste del
                país. Conocida como "El Jardín de la República", se destaca por
                su rica historia, hermosos paisajes montañosos y una vibrante
                cultura. En Tucumán puedes encontrar una combinación de
                tradición y modernidad, con una destacada producción de azúcar y
                limones, así como una gran cantidad de sitios históricos, como
                la Casa Histórica de la Independencia. Además, la provincia es
                famosa por sus festivales y celebraciones, como la Fiesta
                Nacional de la Empanada. 
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
