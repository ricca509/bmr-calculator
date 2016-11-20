import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Container, Row, Col} from 'react-grid-system';
import AppBar from 'material-ui/AppBar';

import activityLevels from '../definitions/activityLevels';
import AgeSelector from './AgeSelector';
import HeightSelector from './HeightSelector';
import WeightSelector from './WeightSelector';
import ActivityLevelSelector from './ActivityLevelSelector';
import GenderSelector from './GenderSelector';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: 33,
      weight: 75,
      height: 170,
      gender: 'M',
      level: 3
    };

    this.onAgeChanged = this.onAgeChanged.bind(this);
    this.onWeightChanged = this.onWeightChanged.bind(this);
    this.onHeightChanged = this.onHeightChanged.bind(this);
    this.onGenderChanged = this.onGenderChanged.bind(this);
    this.onActivityLevelChanged = this.onActivityLevelChanged.bind(this);
  }

  onAgeChanged(proxy, id, value) {
    this.setState({
      age: value
    });
  }

  onWeightChanged(proxy, id, value) {
    this.setState({
      weight: value
    });
  }

  onHeightChanged(proxy, id, value) {
    this.setState({
      height: value
    });
  }

  onGenderChanged(proxy, value) {
    this.setState({
      gender: value
    });
  }

  onActivityLevelChanged(proxy, value) {
    this.setState({
      level: value
    });
  }

  render() {
    return (
      <div className="App">
        <AppBar
          title="BMR Calculator"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Container>
          <Col xs={12} sm={5}>
            <Row>
              <AgeSelector
                age={this.state.age}
                onAgeChanged={this.onAgeChanged}
              />
            </Row>
            <Row>
              <WeightSelector
                weight={this.state.weight}
                onWeightChanged={this.onWeightChanged}
              />
            </Row>
            <Row>
              <HeightSelector
                height={this.state.height}
                onHeightChanged={this.onHeightChanged}
              />
            </Row>
            <Row>
              <GenderSelector
                onGenderChanged={this.onGenderChanged}
                gender={this.state.gender}
              />
            </Row>
            <Row>
              <ActivityLevelSelector
                onActivityLevelChanged={this.onActivityLevelChanged}
                levels={activityLevels}
                selectedLevel={this.state.level}
              />
            </Row>
          </Col>
          <Col xs={12} sm={7}>
            <Row>
              References:
              <a href="https://en.wikipedia.org/wiki/Basal_metabolic_rate">
                https://en.wikipedia.org/wiki/Basal_metabolic_rate
              </a>
            </Row>
          </Col>
        </Container>
      </div>
    );
  }
}

export default App;
