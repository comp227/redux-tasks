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
    test('returns new state with action TOGGLE_IMPORTANCE', () => {
        const state = [
            {
                content: 'learn more about how the app state is in redux store',
                important: true,
                id: 1
            },
            {
                content: 'understand more fully how state changes are made with actions',
                important: false,
                id: 2
            }]

        const action = {
            type: 'TOGGLE_IMPORTANCE',
            payload: {
                id: 2
            }
        }

        deepFreeze(state)
        const newState = taskReducer(state, action)

        expect(newState).toHaveLength(2)

        expect(newState).toContainEqual(state[0])

        expect(newState).toContainEqual({
            content: 'understand more fully how state changes are made with actions',
            important: true,
            id: 2
        })
    })
})