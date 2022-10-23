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
            <FontAwesomeIcon icon={faGithub} />
        </footer>
    )
}

export default LuarzitoFooter;