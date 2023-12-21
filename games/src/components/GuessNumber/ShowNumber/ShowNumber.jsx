import PropTypes from 'prop-types';
import './ShowNumber.scss';

export function ShowNumber({ children, isToo }) {

    const classArrow = isToo ? 'up' : 'down';

    return (
        <>
            <div className='showNumber'>
                <div className="showNumber__icon icon">
                    <i className={"icon__arrow bi bi-arrow-" + classArrow}></i>
                    <i className={"icon__arrow--mirror bi bi-arrow-" + classArrow}></i>
                </div>
                <div className="showNumber__number number">
                    <p className='number__display'>{children}</p>
                    <p className='number__display--mirror'>{children}</p>
                </div>
            </div>
        </>
    );
}

ShowNumber.propTypes = {
    children: PropTypes.number.isRequired,
    isToo: PropTypes.bool.isRequired,
}