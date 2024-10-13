/*
 * index.test.ts
 *     Created: 2024-10-13T16:07:30-04:00
 *    Modified: 2024-10-13T16:07:30-04:00
 *      Author: Justin Paul Chase <justin@justinwritescode.com>
 *   Copyright: © 2024 Justin Paul Chase, All Rights Reserved
 *     License: MIT (https://opensource.org/licenses/MIT)
 */

// Import a function like sum to test, this can be a dummy example for demonstration
function sum(a: number, b: number) {
  return a + b
}

// A simple test to check if the sum function works correctly
describe('Dummy Tests', () => {
  it('should add two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('should be a dummy test to keep TypeScript compiler happy', () => {
    const value = true
    expect(value).toBe(true)
  })
})
