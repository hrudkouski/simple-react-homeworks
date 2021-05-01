import React from 'react'
import Message from "./Message";
import style from './Message.module.css';

const messageData = {
    avatar: 'https://planetabelarus.by/upload/resize_cache/iblock/5a1/220_220_2/5a1fdf92333813f7e0569fec1442f844.jpg',
    name: 'Kalinovskij Kastuś',
    message: ' Kaho lubiš? Biełaruś!',
    time: '22:00',
}

function HW1() {
    return (
        <div className={style.main}>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
