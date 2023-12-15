export function ShowNumber({ children, number }) {

    // error en el children

    return (
        <>
            <div className="showNumber">
                <div className="showNumber__show">
                    {
                        children[0] == number ?
                            number :
                            '?'
                    }
                </div>
            </div>
        </>
    );
};