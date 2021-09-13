import { fakeDb } from '../db/fakeDb'
import { BadRequest, NotFound } from '../utils/Errors.js'

class BurgersService {
  getById(id) {
    const found = fakeDb.burgers.find(burger => burger.id.toString() === id)
    if (!found) {
      throw new NotFound('no burger by that id' + id)
    }
    return found
  }

  createBurger(burgerData) {
    const found = fakeDb.burgers.find(burger => burger.name === burgerData.name)
    if (found) {
      throw new BadRequest('that burger already exists')
    }
    burgerData.id = Math.floor(Math.random() * 51)
    fakeDb.burgers.push(burgerData)
    return burgerData
  }
}

export const burgerService = new BurgersService()
