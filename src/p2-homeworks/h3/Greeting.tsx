import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any +++
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any +++
    addUser: () => void // need to fix any +++
    error: string // need to fix any +++
    totalUsers: number // need to fix any +++
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPress} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div className={s.wrapper}>
            <input
                onKeyPress={onKeyPress}
                value={name}
                onChange={setNameCallback}
                className={inputClass}
            />
            <button
                disabled={error !== ''}
                onClick={addUser}>add
            </button>
            <span className={s.totalUsers}>{totalUsers} - number of users</span>
            <div className={s.titleError}>{error}</div>
        </div>
    )
}

export default Greeting
