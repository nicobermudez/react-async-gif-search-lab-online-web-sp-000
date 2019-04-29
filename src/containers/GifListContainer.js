import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGIFS()
  }

  render() {
    return (
      <GifList gifs={this.state.gifs} />;
    )
  }
}

export default GifListContainer
