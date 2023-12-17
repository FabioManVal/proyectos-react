import PropTypes from 'prop-types'

export function DisplayGuessNumber({ children, number }) {
    return (
        <>
            <div className="displayGuessNumber">
                <div className="displayGuessNumber__show">
                    <p className='show__number'>{
                        children == number ?
                            number :
                            '?'
                    }</p>
                    <div className="displayGuessNumber__show displayGuessNumber__show--mirror">
                        <p className='show__number show__number--mirror'>
                            {
                                children == number ?
                                    number :
                                    '?'
                            }
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

DisplayGuessNumber.propTypes = {
    children: PropTypes.string,
    number: PropTypes.number
};