import '../index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * https://fontawesome.com/icons
 */

const LuarzitoFooter = () => {
    return (
        <footer>
            <div>
                Luarzito &#169; 2022 | Raul Rodrigues
            </div>
            <p><FontAwesomeIcon icon="fa-brands fa-github" /></p>
        </footer>
    )
}

export default LuarzitoFooter;