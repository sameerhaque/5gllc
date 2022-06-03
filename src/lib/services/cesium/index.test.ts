import { Container } from "typedi";

import { CesiumService } from "lib/services";
import { mockCesiumImplementation, testData } from "lib/test";

describe("CesiumService test suite", () => {
  let cesiumService: CesiumService;

  beforeEach(() => {
    cesiumService = Container.get(CesiumService);
  });

  test("createCesiumViewer method should be called", () => {
    const spy = vi
      .spyOn(cesiumService, "createCesiumViewer")
      .mockImplementation(mockCesiumImplementation);
    cesiumService.createCesiumViewer();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test("loadTileSets method should be called", () => {
    const spy = vi
      .spyOn(cesiumService, "loadTileSets")
      .mockImplementation(mockCesiumImplementation);
    cesiumService.loadTileSets();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test("flyToMarket method should be called", () => {
    const { initialMarket } = testData;
    const spy = vi
      .spyOn(cesiumService, "flyToMarket")
      .mockImplementation(mockCesiumImplementation);
    cesiumService.flyToMarket(initialMarket);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
