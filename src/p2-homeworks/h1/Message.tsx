import React from 'react'
import style from './Message.module.css';

export type MessageTypeProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageTypeProps) {
    return (
        <div className={style.wrapper}>
            <span className={style.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </span>
            <div className={style.messages}>
                <div className={style.name}>
                    {props.name}
                </div>
                <div className={style.message}>
                    {props.message}
                </div>
                <div className={style.time}>
                    {props.time}
                </div>
            </div>
            <svg width="31" height="151">
                <polygon points="5,135 115,5 225,135"
                />
            </svg>
        </div>
    )
}

export default Message
