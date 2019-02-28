import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    planets: []
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api/planets/3`)
      .then(res => {
        const planets = res.data;
        this.setState({ planets });
      })
  }

  render() {
    return (
      <div>
        { this.state.planets.climate }
      </div>
    )
  }
}