import { Container } from "typedi";

import { TileService } from "lib/services";

describe("TileService test suite", () => {
  test("createTileSets method should be called", () => {
    const tileService = Container.get(TileService);
    const spy = vi.spyOn(tileService, "createTileSets");
    tileService.createTileSets();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
