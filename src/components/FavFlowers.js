import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Button } from 'react-bootstrap';
const axios = require('axios');

import Form from './Form';

class FavFlowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favItems : [],
      updateObj :{},
      showUpdatedModel: false,

    }
  }
  componentDidMount(){
    axios.get('http://localhost:3030/favFlowers').then((response) =>
    this.setState({
      favItems: response.data.flowerslist
    })).catch((error) => {alert(error.message)});
  }

  showModel(object){
    this.setstate({
      updateObj :object,
      showUpdatedModel: true,
    })
  }

deleteFlower(){
  axios.delete('http://localhost:3030/delFlower').then((response) => {
    this.setState({
      favItems: response.data.flowerslist
    })
  })
}

updateFlower(){

}


  render() {
    return(
      <>
     <Form 
     show = {this.showModel}
     showUpdate = {this.showUpdatedModel}
     update = {this.updateModel}
     favourite = {this.state.favItems}
     />
        <h1>My Favorite Flowers</h1>
        <Row xs={2} md={4}>
        {this.favItems.length > 0 && this.favItems.map((flower, idx) => {
         return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={flower.photo} />
              <Card.Body>
                <Card.Title>{flower.name}</Card.Title>
                <Button variant="primary" onClick={() => this.deleteFlower}>Delete</Button>
                <Button variant="primary" onClick={() => this.updateFlower}>Update</Button>
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

export default FavFlowers;
