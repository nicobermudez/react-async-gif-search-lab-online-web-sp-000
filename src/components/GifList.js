const GifList = props =>
  <ul>
    {props.gifs.map(g => (
      <li>{g.url}-{g.text}</li>
    ))}
  </ul>
