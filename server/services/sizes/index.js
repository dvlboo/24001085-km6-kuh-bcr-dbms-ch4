const sizeRepository = require('../../repository/sizes')

exports.getSizes = async () => data = await sizeRepository.getSizes()
exports.getSize = async (id) => data = await sizeRepository.getSize(id)
exports.createSize = async (payload) => data = await sizeRepository.createSize(payload)
exports.updateSize = async (id, payload) => data = await sizeRepository.updateSize(id, payload)
exports.deleteSize = async (id) => data = await sizeRepository.deleteSize(id)