const carRepository = require('../../repository/cars')

exports.getCars = async () => data = await carRepository.getCars()
exports.getCar = async (id) => data = await carRepository.getCar(id)
exports.createCar = async (payload) => data = await carRepository.createCar(payload)
exports.updateCar = async (id, payload) => data = await carRepository.updateCar(id, payload)
exports.deleteCar = async (id) => data = await carRepository.deleteCar(id)