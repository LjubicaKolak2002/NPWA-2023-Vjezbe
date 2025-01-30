import React from "react";
import Drink from "./Drink";


const Result = ({data, type}) => {
    return (
        <div>
            {data.map((item) => (
                <Drink vrsta={item.vrsta} type={type}/>
            ))}
        </div>
    )

};

export default Result;