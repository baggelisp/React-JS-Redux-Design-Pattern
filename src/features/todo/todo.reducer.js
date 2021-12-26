// Constants
export const todoActions = {
    SUCCESS: 'TODOS_SUCCESS',
    ERROR: 'TODOS_ERROR',
    CLEAR: 'TODOS_CLEAR'
};

// Actions
function getToDosSuccess(data) { return { type: todoActions.SUCCESS, data } }

export const toDosActions = {
    getToDosSuccess
};

// Initial State
const initialState = { toDos: [] }

// Reducer
export function toDosReducer(state = initialState, action) {
    switch (action.type) {
        case todoActions.SUCCESS:
            return {
                ...state,
                toDos: action.data
            };
        case todoActions.ERROR:
        case todoActions.CLEAR:
            return {
                ...state,
                toDos: []
            };
        default:
            return state
    }
}