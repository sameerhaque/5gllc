import { useEffect } from "react";
import { Container } from "typedi";

import { cesium } from "lib/config";
import { CesiumService, TileService } from "lib/services";

import { markets } from "lib/config";
import { Select } from "@chakra-ui/react";

interface IItem {
  name: string;
  value: string;
}

const SiteSearch = () => {
  const { container } = cesium;
  const createTileSets = (): void => {
    const tileService = Container.get(TileService);
    tileService.createTileSets();
  };
  const createCesiumViewer = (): void => {
    const cesiumService = Container.get(CesiumService);
    cesiumService.createCesiumViewer();
  };
  const loadTileSets = (): void => {
    const cesiumService = Container.get(CesiumService);
    cesiumService.loadTileSets();
  };
  useEffect((): void => {
    createTileSets();
    createCesiumViewer();
    loadTileSets();
  }, []);

  const onClickController = (market: string): void => {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment */
    const cesiumService = Container.get(CesiumService);
    cesiumService.flyToMarket(String(market));
  };

  return (
    <>
      <div
        id={container}
        style={{
          position: "absolute",
          top: "60px",
          height: "100%",
          width: "100%",
          overflow: "unset",
        }}
        role="presentation"
      ></div>
      <Select
        placeholder="Market Layers"
        background="white"
        size="md"
        w="sm"
        float="right"
        onChange={(e) => onClickController(e.target.value)}
      >
        {Object.values(markets)
          .map(({ layer }): IItem => layer)
          .map((market) => (
            <option key={market.value} value={market.value}>
              {market.name}
            </option>
          ))}
      </Select>
    </>
  );
};

export default SiteSearch;
