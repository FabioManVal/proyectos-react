import PropTypes from 'prop-types';
import './InputNumber.scss';

export function InputNumber({ number }) {

    return (
        <section className='inputNumber'>
            <header className='inputNumber__title'>
                <i className="title__icon bi bi-caret-right-fill"></i>
                <div className="inputNumber_title inputNumber__title--mirror">
                    <i className="title__icon bi bi-caret-right-fill"></i>
                </div>
            </header>
            <footer className='inputNumber__number'>
                <p className="number__content">{number}</p>
                <p className="number__content number__content--mirror">{number}</p>
            </footer>
        </section>
    );
}

InputNumber.propTypes = {
    number: PropTypes.string,
}