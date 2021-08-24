import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Button } from 'react-bootstrap';
const axios = require('axios');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedData: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3030/flowers').then((response) =>
      this.setState({
        addedData: response.data.flowerslist
      })).catch((error) => { alert(error.message) });


  }
  createFlower(index) {
    const link = axios.post('http://localhost:3030/creatingFlowers', index)
  }


  render() {
    return (
      <>

        <Row xs={2} md={4}>
          {this.addedData.length > 0 && this.addedData.map((flower, idx) => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={flower.photo} />
                <Card.Body>
                  <Card.Title>{flower.name}</Card.Title>
                  <Button variant="primary" onClick={() => this.createFlower}>Add to favorites</Button>
                </Card.Body>
              </Card>
            )
          }
          )}
        </Row>

      </>
    )
  }
}

export default Home;
