import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Grid} from 'semantic-ui-react';
import Navbar from './components/navbar';
import FormDatos from './components/ingreso_datos';

class App extends Component {
  render() {
    return (
      <div className="">
        <Container>
          <Navbar />
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <FormDatos />
              </Grid.Column>
              <Grid.Column>
                <p>
                  Aca van los datos de las pruebas ingresadas anteriormente
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
