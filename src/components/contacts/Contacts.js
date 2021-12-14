import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Contacts.css';

export default function Contacts() {
  return (
    <Card className="main-card" style={{ width: "700px", minHeight: "450px", }}>
      <Card.Header>
        <h4 className="text-center">Контакти</h4>
      </Card.Header>
      <Card.Body className="contacts-card align-middle">
        <Card className="w-50 mb-3" style={{ opacity: '0.9', textAlign: 'left' }} bg="Light">
          <Card.Body>
            <Card.Title> Телефони </Card.Title>
            <Card.Text>
              +35988 888 8888 | 02/888 888
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="w-50 mb-3" style={{ opacity: '0.9', textAlign: 'left' }} bg="Light">
          <Card.Body>
            <Card.Title> Email </Card.Title>
            <Card.Text>
              contact@docrate.bg
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="w-50 mb-3" style={{ opacity: '0.9', textAlign: 'left' }} bg="Light">
          <Card.Body>
            <Card.Title> Адрес </Card.Title>
            <Card.Text>
              гр. София, бул. "Цар Борис III" 356 ет. 3 оф. 10 "Докрейт ЕООД"
            </Card.Text>
          </Card.Body>
        </Card>
      </Card.Body >
      <Card.Footer>
        <div>
          Имаш въпроси?  <Link to="/about" className="no-line" > Запознай се с нас! </Link>
        </div>
      </Card.Footer>
    </Card >
  );
}

