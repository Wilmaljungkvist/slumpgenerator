import { PrimeGenerator } from '../src/js/primeGenerator'

describe('PrimeGenerator', () => {
  let primeGenerator

  beforeEach(() => {
    primeGenerator = new PrimeGenerator()
  })

  test('randomPrimeNumber should return a random prime number within the range', () => {
    let min = 10
    let max = 20
    for (let i = 1; i < 6; i++) {
      const randomPrimeNumber = primeGenerator.getRandomPrimeNumber(min, max)
      expect(randomPrimeNumber).toBeGreaterThanOrEqual(min)
      expect(randomPrimeNumber).toBeLessThanOrEqual(max)
      min += i
      max += i
      expect(isPrime(randomPrimeNumber)).toBe(true)
    }
  })

  test('randomPrimeNumber should throw an error if max is smaller than min', () => {
    const min = 10
    const max = 1
    expect(() => {
      primeGenerator.getRandomPrimeNumber(min, max)
    }).toThrow('Minimum must be the same or smaller than maximum.')
  })

  test('randomPrimeNumberSequence should throw an error if max is smaller than min', () => {
    const min = 10
    const max = 1
    expect(() => {
      primeGenerator.getRandomPrimeNumberSequence(min, max)
    }).toThrow('Minimum must be the same or smaller than maximum.')
  })

  test('randomPrimeNumberSequence should generate a sequence of prime numbers within the given range', () => {
    const min = 10
    const max = 30
    const length = 5
    const sequence = primeGenerator.getRandomPrimeNumberSequence(min, max, length)

    expect(sequence).toHaveLength(length)

    for (let i = 0; i < sequence.length; i++) {
      expect(sequence[i]).toBeGreaterThanOrEqual(min)
      expect(sequence[i]).toBeLessThanOrEqual(max)
      expect(isPrime(sequence[i])).toBe(true)
    }
  })

  /**
   * Function for testing if a number is Prime.
   *
   * @param {number} number - The number getting tested.
   * @returns {boolean} - Returns true if the number is a prime.
   */
  function isPrime (number) {
    if (number <= 1) {
      return false
    } else if (number <= 3) {
      return true
    } else if (number % 2 === 0 || number % 3 === 0) {
      return false
    }

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false
      }
    }
    return true
  }
})
