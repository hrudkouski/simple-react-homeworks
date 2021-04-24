import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any +++
    deleteAffairCallback: (_id: number) => void // need to fix any +++
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix +++

    const colorPriority = props.affair.priority === 'low' ? style.low :
        props.affair.priority === 'high' ? style.high :
            props.affair.priority === 'middle' ? style.middle : '';

    return (
        <div className={style.affairs}>
            <span>{props.affair.name}</span>
            <span className={colorPriority}>
                [{props.affair.priority}]
            </span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
