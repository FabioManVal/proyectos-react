import PropTypes from 'prop-types';

export function Tries({ children }) {
    return (
        <div className="tries">
            <div className="tries__description">
                <p className='description__text'>Intento</p>
                <p className='description__text description__text--mirror'>Intento</p>
            </div>
            <div className="tries__countTries">
                <p className='countTries__tries'>{children}</p>
                <p className='countTries__tries countTries__tries--mirror'>{children}</p>
            </div>
        </div>
    );
}

Tries.propTypes = {
    children: PropTypes.number
}