import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  render() {
    return (
      <div>
        >GifSearch fetchGIFs
        <GifList gifs={this.state.gifs} />;
      </div>

    )
  }

  fetchGIFS = (query = "dolphins") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        gifs: data.map(gif => ({
          url: gif.images.original.url
        }))
      })
    })
  }

  componentDidMount() {
    this.fetchGIFS()
  }
}

export default GifListContainer
