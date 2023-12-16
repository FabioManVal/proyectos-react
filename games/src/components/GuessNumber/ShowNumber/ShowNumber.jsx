import PropTypes from 'prop-types'

export function ShowNumber({ children, number }) {
    return (
        <>
            <div className="showNumber">
                <div className="showNumber__show">
                    {
                        children == number ?
                            number :
                            '?'
                    }
                </div>
            </div>
        </>
    );
}

ShowNumber.propTypes = {
    children: PropTypes.string,
    number: PropTypes.number
};