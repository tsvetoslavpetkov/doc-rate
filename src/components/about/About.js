import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './About.css';

export default function About() {
  document.title = 'DocRate | За Нас'
  return (
    <Card className="main-card" style={{ width: "700px", minHeight: "450px", }}>
      <Card.Header>
        <h4 className="text-center">За Нас</h4>
      </Card.Header>
      <Card.Body className="about-card align-middle">
        <Card className="w-50" style={{opacity: '0.9', textAlign: 'left'}} bg="Light">
          <Card.Body>
            <Card.Title> Кауза </Card.Title>
            <Card.Text>
              Нашата кауза е да предоставим обективна оценка за лекарите в България. Приложението "DocRate" има за цел
              да предоставя на своите потребители лесно достъпна и изключително добре систематизирана информация на база
              реални потребителски оценки за медицинските лица в България. 
              Силно се надяваме да сме ви полезни! ❤
            </Card.Text>
          </Card.Body>
        </Card>

      </Card.Body >
      <Card.Footer>
        <div>
          Имаш въпроси?  <Link to="/contacts" className="no-line" > Свържи се с нас! </Link>
        </div>
      </Card.Footer>
    </Card >
  );
}

