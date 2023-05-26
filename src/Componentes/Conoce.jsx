import React from 'react';
import Card from 'react-bootstrap/Card';
import {Button } from 'react-bootstrap';
import tafi from '../Imagenes/tafi.jpg';
import aguaschiquitas from '../Imagenes/aguaschiquitas.jpg';
import cadillal from '../Imagenes/cadillal.jpg';
import casahistorica from '../Imagenes/casahistorica.jpg';
import sanjavier from '../Imagenes/sanjavier.jpg';
import ruinas from '../Imagenes/ruinas.jpg';
import villanogues from '../Imagenes/villanogues.webp';
 export const Conoce = () => {
  return (
    <section>
    <div>
        <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={casahistorica} />
      <Card.Body>
        <Card.Title className='titulo'>Casa Histórica</Card.Title>
        <Card.Text className='descripcion'>
          clima frio y nevado
        </Card.Text>
        <Button variant="primary">Más info</Button>
      </Card.Body>
    </Card>
    </div>

    <div>
        <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={tafi} />
      <Card.Body>
        <Card.Title className='titulo'>Tafí del Valle</Card.Title>
        <Card.Text className='descripcion'>
          clima frio y nevado
        </Card.Text>
        <Button variant="primary">Más info</Button>
      </Card.Body>
    </Card>
    </div>

    <div>
        <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={sanjavier} />
      <Card.Body>
        <Card.Title className='titulo'>Tafí del Valle</Card.Title>
        <Card.Text className='descripcion'>
          clima frio y nevado
        </Card.Text>
        <Button variant="primary">Más info</Button>
      </Card.Body>
    </Card>
    </div>

    <div>
        <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={ruinas} />
      <Card.Body>
        <Card.Title className='titulo'>Las Ruinas de Quilmes</Card.Title>
        <Card.Text className='descripcion'>
          clima frio y nevado
        </Card.Text>
        <Button variant="primary">Más info</Button>
      </Card.Body>
    </Card>
    </div>

    <div>
        <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={villanogues} />
      <Card.Body>
        <Card.Title className='titulo'>Villa Nogués</Card.Title>
        <Card.Text className='descripcion'>
          clima frio y nevado
        </Card.Text>
        <Button variant="primary">Más info</Button>
      </Card.Body>
    </Card>
    </div>
     
    <div>
        <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={cadillal} />
      <Card.Body>
        <Card.Title className='titulo'>El Cadillal</Card.Title>
        <Card.Text className='descripcion'>
          clima frio y nevado
        </Card.Text>
        <Button variant="primary">Más info</Button>
      </Card.Body>
    </Card>
    </div>

    <div>
        <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={aguaschiquitas} />
      <Card.Body>
        <Card.Title className='titulo'>Cascada Aguas Chiquitas</Card.Title>
        <Card.Text className='descripcion'>
          clima frio y nevado
        </Card.Text>
        <Button variant="primary">Más info</Button>
      </Card.Body>
    </Card>
    </div>
  </section> 
  )
}

