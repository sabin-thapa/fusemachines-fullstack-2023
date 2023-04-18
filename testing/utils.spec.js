const {mapObjectToArray, getNewUser} = require('./utils')

describe('mapObjectToArray()', () => {
    test('maps values to array using callback', () => {
        const result = mapObjectToArray({age: 30, height: 65}, (k,v) => {
            return v + 10
        })
        expect(result).toEqual([40, 75])
    })
})

describe('getNewUser()', () => {
    test('gets a user', async () => {
        const user = await getNewUser(1)
        expect(user).toBeTruthy()
        expect(user.id).toBe(1)
    })
    test('doesn not get a user', async () => {
        expect.assertions(1)
        try{
            const user = await getNewUser(10)
        } catch(e) {
            expect(e).toBeTruthy()
        }
    })
})