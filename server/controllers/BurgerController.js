import BaseController from '../utils/BaseController.js'
import { fakeDb } from '../db/fakeDb.js'
import { burgerService } from '../services/BurgersService.js'

export class BurgerController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
      .get('/:id', this.getBurger)
      .post('', this.createBurger)
  }

  async getBurgers(req, res, next) {
    res.send(fakeDb.burgers)
  }

  async getBurger(req, res, next) {
    try {
      const id = req.params.id
      const burger = await burgerService.getById(id)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(req, res, next) {
    try {
      const newBurger = await burgerService.createBurger(req.body)
      res.send(newBurger)
    } catch (error) {
      next(error)
    }
  }
}
