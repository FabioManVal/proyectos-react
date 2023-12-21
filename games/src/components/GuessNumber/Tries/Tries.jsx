import PropTypes from 'prop-types';
import './Tries.scss';

export function Tries({ children }) {
    return (
        <div className="tries">
            <div className="tries__description description">
                <p className='description__text'><i className="bi bi-recycle"></i></p>
                <p className='description__text description__text--mirror'><i className="bi bi-recycle"></i></p>
            </div>
            <div className="tries__countTries countTries">
                <p className='countTries__tries'>{children}</p>
                <p className='countTries__tries countTries__tries--mirror'>{children}</p>
            </div>
        </div>
    );
}

Tries.propTypes = {
    children: PropTypes.number.isRequired
}