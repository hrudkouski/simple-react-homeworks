// Actions
const IS_LOADING = 'HW10/IS_LOADING'

// Types
type InitStateType = typeof initState;
type LoadingActionsType = ReturnType<typeof loadingAC>;

// Initial state
const initState = {
    isLoading: false
}

// Reducer
export const loadingReducer = (state = initState, action: LoadingActionsType): InitStateType => { // fix any
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

// Action Creators
export const loadingAC = (isLoading: boolean) => ({type: IS_LOADING, isLoading} as const)
// fix any ++