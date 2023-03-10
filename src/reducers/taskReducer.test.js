import taskReducer from './taskReducer'
import deepFreeze from 'deep-freeze'

describe('taskReducer', () => {
    test('returns new state with action tasks/createTask', () => {
        const state = []
        const action = {
            type: 'tasks/createTask',
            payload: 'learn more about how the app state is in redux store',
        }

        deepFreeze(state)
        const newState = taskReducer(state, action)

        expect(newState).toHaveLength(1)
        expect(newState.map(s => s.content)).toContainEqual(action.payload)
    })

    test('returns new state with action tasks/toggleImportanceOf', () => {
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
            type: 'tasks/toggleImportanceOf',
            payload: 2
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