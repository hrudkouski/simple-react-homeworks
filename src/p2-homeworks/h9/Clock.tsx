import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW9.module.css";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    const [showClock, setShowClock] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        setShowClock(true)
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)

        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString('ru-RU') // fix with date
    const stringDate = date.toLocaleDateString('ru-RU')// fix with date

    return (
        <div style={{height: '140px'}}>
            <div className={s.wrapper}>
                {showClock && (
                    <div
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        className={s.clock}
                    >
                        {stringTime}
                    </div>
                )}

                {show && (
                    <span className={s.date}>
                    Current date - {stringDate}
                </span>
                )}

                <div className={s.buttons}>
                    <SuperButton onClick={start}>start</SuperButton>
                    <SuperButton onClick={stop}>stop</SuperButton>
                </div>
            </div>
        </div>

    )
}

export default Clock


