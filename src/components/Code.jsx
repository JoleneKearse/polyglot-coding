import Highlight from 'react-highlight.js';
import "../../src/dracula.css";

const Code = ({ title, code, language }) => {
  return (
    <div className="relative spacing">
      <h4 className="languageTitle">{title}</h4>
      <Highlight language={language}>
        {code}
      </Highlight>
    </div>
  )
}

export default Code