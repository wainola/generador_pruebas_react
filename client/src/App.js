import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Grid} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="">
        <Container>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <h1>GRID</h1>
              </Grid.Column>
              <Grid.Column>
                <h1>GRID</h1>
              </Grid.Column>
              <Grid.Column>
                <h1>GRID</h1>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <h1>GRID</h1>
              </Grid.Column>
              <Grid.Column>
                <h1>GRID</h1>
              </Grid.Column>
              <Grid.Column>
                <h1>GRID</h1>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
