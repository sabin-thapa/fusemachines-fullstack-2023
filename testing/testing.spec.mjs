
// OLD METHOD USING ASSERTIONS
import {add} from './testing.mjs'
import assert from 'assert'

console.log('add() \n should add two numbers')

try {
    assert.strictEqual(add(1,2), 3)
    console.log('SUCCESS!')
} catch(err) {
    console.log('FAILED!')
    console.error(err)
}