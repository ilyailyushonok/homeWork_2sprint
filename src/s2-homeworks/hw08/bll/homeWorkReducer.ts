import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const stateCopy=[...state]
            if (action.payload === 'up')return  stateCopy.sort((a, b) => a.name.localeCompare(b.name))
            else if (action.payload === 'down') return stateCopy.sort((a, b) =>b.name.localeCompare(a.name))
            else return stateCopy
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
