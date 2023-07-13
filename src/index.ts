/***
 *  2 ways for typescript to add type
 * 1. Implicit
 * 2. Explicit
 */

// Implicit 
let firstName = 'Daniel'

// firstName = 1234 // this will fail

// Explicit
let lastName: string | number | boolean | undefined = 'Lancheros'

lastName = 3445
lastName = false
lastName = undefined


import { twoSum } from "./typePractice"

twoSum ({ num1: 5, num2: 9, message: 'test'})