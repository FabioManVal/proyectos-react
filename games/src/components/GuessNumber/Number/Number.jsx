export function Number({ children, too }) {
    return (
        <>
            <div className='number'>
                {
                    too ?
                        <i className="number__icon icon--invert bi bi-arrow-down"></i> :
                        <i className="number__icon icon bi bi-arrow-down"></i>
                }
                <div className="number__alert">
                    {children}
                </div>
            </div>
        </>
    );
};