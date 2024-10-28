import Highlight from 'react-highlight.js';
import "../../src/dracula.css";

const Code = ({ code, language }) => {
  return (
    <Highlight language={language}>
      {code}
    </Highlight>
  )
}

export default Code