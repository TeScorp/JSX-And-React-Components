import React from 'react';
import { Card } from 'react-bootstrap';
import Nom from './components/Nom';
import Prix from './components/Prix';
import Description from './components/Description';
import Image from './components/Image';
import product from './product';

const prenom = 'Terra';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' , flexDirection:'column' }}>
      <Card style={{ width: '20rem' , backgroundColor:'grey' , display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white' }}>
        <Card.Body style={{borderRadius:'5px' , margin:'40px'}}>
          <Nom  nom={product.nom} />
          <Prix prix={product.prix} />
          <Description description={product.description} />
          <Image image={product.image} />
        </Card.Body>
      </Card>
      <p>Bonjour, {prenom ? prenom : 'there'}!</p>
      {prenom && <img src={product.image} alt={prenom} />}
    </div>
  );
};

export default App;
