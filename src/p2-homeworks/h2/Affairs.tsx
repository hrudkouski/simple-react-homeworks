import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'

type AffairsPropsType = { // need to fix any +++
    data: AffairType[]
    // setFilter: (filter: FilterType) => void
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const {filter} = props;

    const setAll = () => {
        props.setFilter('all')
    } // need to fix +++
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={style.someClass}>
            {mappedAffairs}
            <div className={style.priorityButton}>
                <button
                    className={filter === 'all' ? style.filterStyle : ''}
                    onClick={setAll}>All
                </button>
                <button
                    className={filter === 'high' ? style.filterStyle : ''}
                    onClick={setHigh}>High
                </button>
                <button
                    className={filter === 'middle' ? style.filterStyle : ''}
                    onClick={setMiddle}>Middle
                </button>
                <button
                    className={filter === 'low' ? style.filterStyle : ''}
                    onClick={setLow}>Low
                </button>
            </div>
        </div>
    )
}

export default Affairs
