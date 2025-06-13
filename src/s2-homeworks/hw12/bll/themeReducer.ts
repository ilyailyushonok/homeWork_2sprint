const initState = {
    themeId: 1 as number,
}

export const themeReducer = (state = initState, action: changeThemeIdType): any => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':{
    return {...state,themeId: action.id}
}
        default:
            return state
    }
}

export const changeThemeId = (id: number):{type:string,id:number}  => ({ type: 'SET_THEME_ID', id } )// fix any
type changeThemeIdType=ReturnType<typeof changeThemeId>