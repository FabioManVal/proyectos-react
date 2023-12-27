import PropTypes from 'prop-types';

import { RangeNumber } from '../RangeNumber/RangeNumber';
import './DisplayGuessNumber.scss';

export function DisplayGuessNumber({ children, number, maxRange }) {
    return (
        <>
            <div className="displayGuessNumber">
                <div className="displayGuessNumber__show show">
                    <div className="show__min">
                        <RangeNumber maxRange={1}></RangeNumber>
                    </div>
                    <p className='show__number'>{
                        children == number ?
                            number :
                            '?'
                    }</p>
                    <p className='show__number show__number--mirror'>
                        {
                            children == number ?
                                number :
                                '?'
                        }
                    </p>
                    <div className="show__max">
                        <RangeNumber maxRange={maxRange}></RangeNumber>
                    </div>
                </div>

            </div>
        </>
    );
}

DisplayGuessNumber.propTypes = {
    children: PropTypes.number,
    number: PropTypes.number,
    maxRange: PropTypes.number,
};