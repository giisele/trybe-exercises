import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
        Feito com&nbsp;
        <span class="icon has-text-danger-dark">
          <FontAwesomeIcon icon={faHeart} />
        </span>
        &nbsp;por <a href="http://github.com/giisele" rel="noreferrer" target="_blank">Gisele Costa</a>.
      </p>
  </footer>
    )
  }
}

export default Footer;