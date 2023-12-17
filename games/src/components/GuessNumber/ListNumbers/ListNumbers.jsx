// numbers = [[1,'class'], [2,'class'], [3,'class']]
import PropTypes from "prop-types";

export function ListNumbers({ arrNumbers, isToo }) {

    const classArrow = isToo ? 'up' : 'down';

    const numberContentClass = (arrNumber, alertClass) => {
        return arrNumber[1] !== '' ? alertClass : '';
    }
    return (
        <div className="listNumbers">
            {
                arrNumbers.map((number) => {
                    return (
                        <div key={number[0]} className={'listNumbers__content ' + numberContentClass(number, 'listNumbers__content--alert')}>
                            <div className="content__icon">
                                <p className="icon__arrow"><i className={"bi bi-arrow-" + classArrow}></i></p>
                                <p className="icon__arrow--mirror"><i className={"bi bi-arrow-" + classArrow}></i></p>
                            </div>
                            <div className="content__number">
                                <p className="number__text">{number[0]}</p>
                                <p className="number__text--mirror">{number[0]}</p>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    );
}

ListNumbers.propTypes = {
    arrNumbers: PropTypes.array.isRequired,
    isToo: PropTypes.bool.isRequired,
}