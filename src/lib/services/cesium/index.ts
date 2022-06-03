import * as Cesium from "cesium";
import { Container, Service } from "typedi";

import { cesium, markets } from "lib/config";
import {
  ICameraOrientation,
  IConfig,
  IMarket,
  IScreenSpaceEventFeature,
} from "lib/interfaces";
import { TileService } from "lib/services";

@Service()
export default class CesiumService {
  private _config: IConfig;
  private _highlightedFeature: IScreenSpaceEventFeature;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  // private _latLonOffsets: any
  private _markets: IMarket;
  private _screenSpaceEventHandler: Cesium.ScreenSpaceEventHandler;
  private _selectedFeature: IScreenSpaceEventFeature;
  private _tileService: TileService;

  constructor(private _viewer: Cesium.Viewer) {
    this._config = cesium;
    this._highlightedFeature = {
      feature: undefined,
      highlightColor: Cesium.Color.BLUE,
      originalColor: new Cesium.Color(),
    };
    // this._latLonOffsets = this._latLonToOffsets(this._config.flyToCoords.det.y, this._config.flyToCoords.det.x)
    this._markets = markets;
    this._screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(
      this._viewer.canvas
    );
    this._selectedFeature = {
      feature: undefined,
      highlightColor: Cesium.Color.BLUE,
      originalColor: new Cesium.Color(),
    };
    this._tileService = Container.get(TileService);
  }

  get viewer(): Cesium.Viewer {
    return this._viewer;
  }

  createCesiumViewer(): void {
    const { container } = this._config;
    this._viewer = new Cesium.Viewer(container);
    this._viewer.scene.debugShowFramesPerSecond = false;
    this._viewer.scene.globe.depthTestAgainstTerrain = true;
    this._viewer.scene.globe.tileCacheSize = 1000;
    (<HTMLElement>(
      document.querySelector(".cesium-navigationHelpButton-wrapper")
    )).style.visibility = "hidden";
    (<HTMLElement>(
      document.querySelector(".cesium-sceneModePicker-wrapper")
    )).style.visibility = "hidden";
    (<HTMLElement>(
      document.querySelector(".cesium-viewer-geocoderContainer")
    )).style.visibility = "hidden";
    (<HTMLElement>(
      document.querySelector(".cesium-viewer-toolbar")
    )).style.visibility = "hidden";
    /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */
    (<any>this._viewer)._cesiumWidget._creditContainer.style.display = "none";
    (<any>this._viewer)._fullscreenButton._element.style.visibility = "hidden";
    (<any>this._viewer)._homeButton._element.style.visibility = "hidden";
    (<any>this._viewer).animation.container.style.visibility = "hidden";
    (<any>this._viewer).timeline.container.style.visibility = "hidden";
    (<any>this._viewer).infoBox.frame.sandbox =
      "allow-same-origin allow-top-navigation allow-pointer-lock allow-popups allow-forms allow-scripts";
    /* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */

    // Color a feature blue on left click
    this._screenSpaceEventHandler.setInputAction(
      ({ position }: { position: Cesium.Cartesian2 }): void => {
        if (this._selectedFeature?.feature) {
          // Cesium.Color.clone(this._selectedFeature.highlightColor, this._selectedFeature.feature.color) // group
          this._selectedFeature.feature.color =
            this._selectedFeature.originalColor; // single
          this._selectedFeature.feature = undefined;
        }
        this._selectedFeature.feature = <
          Cesium.Cesium3DTileFeature | undefined
        >this._viewer.scene.pick(position);
        this._selectedFeature?.feature &&
          this._selectedFeature.feature instanceof Cesium.Cesium3DTileFeature &&
          (this._selectedFeature.feature.color =
            this._selectedFeature.highlightColor);
      },
      Cesium.ScreenSpaceEventType.LEFT_CLICK
    );

    // Color a feature blue on hover
    this._screenSpaceEventHandler.setInputAction(
      ({ endPosition }: { endPosition: Cesium.Cartesian2 }): void => {
        if (
          this._highlightedFeature?.feature &&
          this._highlightedFeature.feature !== this._selectedFeature.feature
        ) {
          this._highlightedFeature.feature.color =
            this._highlightedFeature.originalColor;
          this._highlightedFeature.feature = undefined;
        }
        this._highlightedFeature.feature = <
          Cesium.Cesium3DTileFeature | undefined
        >this._viewer.scene.pick(endPosition);
        this._highlightedFeature?.feature &&
          this._highlightedFeature.feature instanceof
            Cesium.Cesium3DTileFeature &&
          (this._highlightedFeature.feature.color =
            this._highlightedFeature.highlightColor);
      },
      Cesium.ScreenSpaceEventType.MOUSE_MOVE
    );

    // Color a feature red on right-click
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    // this._screenSpaceEventHandler.setInputAction(({ position }: { position: Cesium.Cartesian2 }): void => {
    //   if (this._selectedFeature?.feature) {
    //     // Cesium.Color.clone(this._selectedFeature.highlightColor, this._selectedFeature.feature.color) // group
    //     this._selectedFeature.feature.color = this._selectedFeature.originalColor // single
    //     this._selectedFeature.feature = undefined
    //   }
    //   this._selectedFeature.feature = <Cesium.Cesium3DTileFeature | undefined>(
    //     this._viewer.scene.pick(<Cesium.Cartesian2>this._latLonOffsets)
    //   )
    //   this._selectedFeature?.feature &&
    //     this._selectedFeature.feature instanceof Cesium.Cesium3DTileFeature &&
    //     (this._selectedFeature.feature.color = this._selectedFeature.highlightColor)
    // }, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
  }

  loadTileSets(): void {
    const { initialMarket } = this._config;
    const { tileSets } = this._tileService;
    for (const tileSet of tileSets) {
      this._viewer.scene.primitives.add(tileSet);
    }
    this.flyToMarket(initialMarket);
  }

  flyToMarket(market: string): void {
    /* prettier-ignore */
    const { flyToCoords: { x, y, z } } = this._markets[market as keyof IMarket]
    const orientation: ICameraOrientation = {
      heading: Cesium.Math.toRadians(20),
      pitch: Cesium.Math.toRadians(-35),
      roll: 0,
    };
    this._viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(x, y, z),
      orientation,
    });
    // this._setLayerLabel(market)
  }

  // private _setLayerLabel(market: string): void {
  //   /* prettier-ignore */
  //   const { layer: { name } } = this._markets[market as keyof IMarket]
  //   const el = document.querySelector('span.css-xl71ch')
  //   el && (el.textContent = name)
  // }

  // private _latLonToOffsets(lat: number, lng: number): Record<string, number> {
  //   const FE = 180 // false easting
  //   const radius = window.innerWidth / (2 * Math.PI)
  //   // console.log(window.innerWidth)
  //   const latRad = this._degreesToRadians(lat)
  //   const lngRad = this._degreesToRadians(lng + FE)
  //   const x = Math.round(lngRad * radius)
  //   const yFromEquator = radius * Math.log(Math.tan(Math.PI / 4 + latRad / 2))
  //   const y = Math.round((window.innerHeight - 41) / 2 - yFromEquator)
  //   // console.log(window.innerHeight)
  //   return { x, y }
  // }

  // private _degreesToRadians(degrees: number): number {
  //   return (degrees * Math.PI) / 180
  // }
}
