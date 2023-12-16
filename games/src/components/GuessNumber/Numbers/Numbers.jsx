import PropTypes from 'prop-types'

export function Numbers({ arrNumbers, tooTall }) {

    const tooClass = tooTall ? 'numbers__tall' : 'numbers__low';
    const alignNumbers = tooTall ? 'numbers--left' : 'numbers--right';

    return (
        <div className={'numbers ' + alignNumbers}>
            {
                arrNumbers ?
                    arrNumbers.map((num) => {
                        return num[1] !== '' ?
                            <div key={num[0]} className={tooClass}>
                                <p className="numbers__input input__alert">{num[0]}</p>
                            </div> :
                            <div key={num[0]} className={tooClass}>
                                <p className="numbers_input">{num[0]}</p>
                            </div>
                    }) :
                    ''
            }
        </div>
    );
}

Numbers.propTypes = {
    arrNumbers: PropTypes.array,
    tooTall: PropTypes.bool,
}