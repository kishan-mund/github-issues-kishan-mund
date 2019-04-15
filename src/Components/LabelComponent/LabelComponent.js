import React from "react";
import './Label.css';


const LabelComponents = (props) => {
    return (<span className="label-data">
        {
            props.lbl.map((l) => {
                return <span >
                    <strong style={{ backgroundColor: "#" + l.color }} className="label-name" >{l.name}</strong>
                </span>
            })
        }

    </span>)

};

export default LabelComponents;