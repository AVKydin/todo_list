import React, {useEffect, useState} from 'react';

const CheckSheet = () => {
    let [check = [], setCheck] = useState();
    useEffect(() => {

    }, [])

    const Add = () => {
        const ask = prompt()
        return setCheck([...check, ask]);
    }

    const Del = () => {
        console.log(check)
        setCheck([...check])
    }

    const Dell = (i)=>{
        check.splice(i,1)
        setCheck([...check])
    }

    return (
        <div>
            <button onClick={Add}>Add</button>

            {check.map((value, i) =>
                <div key={i}>
                    <span>{i}</span>
                    <span>{value}</span>
                    <button onClick={()=>Dell(i)}>Delete</button>
                </div>)}
        </div>
    );
};

export {
    CheckSheet
};