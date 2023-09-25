import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'
import { ErrorHandling } from './errorHandling.js'

/**
 *
 */
export class RandomPrimeGenerator {
  /**
   *
   */
  constructor () {
    this.lcg = new LinearCongruentialGenerator()
    this.error = new ErrorHandling()
  }

  /**
   *
   * @param min
   * @param max
   */
  randomPrimeNumber (min, max) {
    let number
    if (this.error.handleMinMax(min, max)) {
      do {
        number = this.lcg.nextIntRange(min, max)
      } while (!this.#isPrime(number))

      return number
    }
  }

  /**
   *
   * @param number
   */
  #isPrime (number) {
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

  /**
   *
   * @param min
   * @param max
   * @param length
   */
  randomPrimeNumberSequence (min, max, length) {
    if (this.error.handleMinMax(min, max) && length > 0) {
      const arr = []
      for (let i = 0; i < length; i++) {
        arr.push(this.randomPrimeNumber(min, max))
      }
      if (length <= 0) {
        throw new error('length must be bigger than 0')
      }
      return arr
    }
  }
}
