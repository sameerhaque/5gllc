import { Container } from 'typedi'

import { LogService } from 'lib/services'

describe('LogService test suite', () => {
  test('consoleLog method should be called', () => {
    const message = 'NYC tileset created:'
    const logService = Container.get(LogService)
    const spy = vi.spyOn(logService, 'consoleLog')
    logService.consoleLog(message)
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
