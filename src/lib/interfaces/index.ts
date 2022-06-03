import * as Cesium from "cesium";

export interface ICameraOrientation {
  heading: number;
  pitch: number;
  roll: number;
}

export interface ICesiumProp {
  container: string;
}

export interface IConfig {
  baseURL: string;
  container: string;
  initialMarket: string;
}

export interface IFlyToCoords {
  x: number;
  y: number;
  z: number;
}

export interface ILayer {
  name: string;
  value: string;
}

export interface IMarket {
  atlanta: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  baltimore: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  boston: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  charlotte: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  chicago: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  cincinnati: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  cleveland: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  dallas: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  denver: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  detroit: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  honolulu: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  houston: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  indianapolis: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  kansas_city: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  las_vegas: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  los_angeles: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  miami: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  milwaukee: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  minneapolis: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  new_orleans: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  new_york_city: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  oakland: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  orlando: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  philadelphia: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  phoenix: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  pittsburgh: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  portland: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  salt_lake_city: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  san_antonio: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  san_diego: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  san_francisco: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  san_jose: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  seattle: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  st_louis: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  st_paul: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  tampa: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
  washington_dc: {
    flyToCoords: IFlyToCoords;
    layer: ILayer;
  };
}

export interface IScreenSpaceEventFeature {
  feature: Cesium.Cesium3DTileFeature | undefined;
  highlightColor: Cesium.Color;
  originalColor: Cesium.Color;
}
