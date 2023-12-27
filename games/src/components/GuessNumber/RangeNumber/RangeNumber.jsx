import PropTypes from 'prop-types';
import './RangeNumber.scss';

export function RangeNumber({ maxRange }) {
    return (
        <div className={"rangeNumber"}>
            <p className="rangeNumber__number">{maxRange}</p>
            <p className="rangeNumber__number rangeNumber__number--mirror">{maxRange}</p>
        </div>
    )
}

RangeNumber.propTypes = {
    maxRange: PropTypes.number,
}