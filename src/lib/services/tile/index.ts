import * as Cesium from 'cesium'
import { Container, Service } from 'typedi'

import { cesium, markets } from 'lib/config'
import { IConfig, IMarket } from 'lib/interfaces'
import { LogService } from 'lib/services'

@Service()
export default class TileService {
  private _config: IConfig
  private _logService: LogService
  private _markets: IMarket
  private _tileSets: Cesium.Cesium3DTileset[]

  constructor() {
    this._config = cesium
    this._logService = Container.get(LogService)
    this._markets = markets
    this._tileSets = []
  }

  get tileSets(): Cesium.Cesium3DTileset[] {
    return this._tileSets
  }

  createTileSets(): void {
    const { baseURL } = this._config
    this._tileSets = Object.keys(this._markets).map((market: string) => {
      const url = `${baseURL}${market}/tileset.json`
      const tileSet = new Cesium.Cesium3DTileset({ url })
      this._consoleLog(`${market} tileset created`)
      return tileSet
    })
  }

  private _consoleLog(message: string): void {
    this._logService.consoleLog(message)
  }
}
