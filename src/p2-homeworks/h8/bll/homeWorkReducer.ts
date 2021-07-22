import {initialPeople, UserType} from "../HW8";

// Types
export type AppActionsType = ReturnType<typeof sortAC> | ReturnType<typeof checkAC>;

export const homeWorkReducer = (state = initialPeople, action: AppActionsType): UserType[] => { // need to fix any +++
    switch (action.type) {
        case 'sort': {
            // need to fix +++
            let copyState = [...state]
            if (action.payload === 'up') {
                return copyState.sort((a, b) => a.name > b.name ? 1 : -1)
            } else if (action.payload === 'down') {
                return copyState.sort((a, b) => a.name < b.name ? 1 : -1)
            } else {
                return copyState
            }
        }
        case 'check': {
            // need to fix +++
            let copyState = [...state]
            return copyState.filter(el => el.age > 18)
        }
        default:
            return state
    }
}

// Action Creators
export const sortAC = (payload: string) => ({type: 'sort', payload}) as const;
export const checkAC = (payload: number) => ({type: 'check', payload}) as const;