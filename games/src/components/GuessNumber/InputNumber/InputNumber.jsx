export function InputNumber({ number }) {

    return (
        <section className='inputNumber'>
            <header className='inputNumber__title'>
                <i className="bi bi-caret-right-fill"></i>
                <div className="inputNumber_title inputNumber__title--mirror">
                    <i className="bi bi-caret-right-fill"></i>
                </div>
            </header>
            <footer className='inputNumber__number'>{number}</footer>
        </section>
    );
}