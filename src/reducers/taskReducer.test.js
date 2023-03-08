import taskReducer from './taskReducer'
import deepFreeze from 'deep-freeze'

describe('taskReducer', () => {
    test('returns new state with action NEW_TASK', () => {
        const state = []
        const action = {
            type: 'NEW_TASK',
            payload: {
                content: 'learn more about how the app state is in redux store',
                important: true,
                id: 1
            }
        }

        deepFreeze(state)
        const newState = taskReducer(state, action)

        expect(newState).toHaveLength(1)
        expect(newState).toContainEqual(action.payload)
    })
})