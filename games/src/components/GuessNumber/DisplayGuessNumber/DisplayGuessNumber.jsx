import PropTypes from 'prop-types';
import './DisplayGuessNumber.scss';

export function DisplayGuessNumber({ children, number }) {
    return (
        <>
            <div className="displayGuessNumber">
                <div className="displayGuessNumber__show show">
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
                </div>
            </div>
        </>
    );
}

DisplayGuessNumber.propTypes = {
    children: PropTypes.number,
    number: PropTypes.number
};