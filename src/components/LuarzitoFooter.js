import '../index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'

/**
 * https://fontawesome.com/icons
 */

const LuarzitoFooter = () => {
    return (
        <footer>
            <div>
                Luarzito &#169; 2022 | Raul Rodrigues
            </div>
            <a className='social-icons' href='https://github.com/luarrekcah'><FontAwesomeIcon icon={faGithub} /></a>
        </footer>
    )
}

export default LuarzitoFooter;