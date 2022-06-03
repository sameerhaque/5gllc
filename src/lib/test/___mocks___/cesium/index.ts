import { Container } from 'typedi'

import { CesiumService } from 'lib/services'

export default function mockCesiumImplementation(): void {
  const { viewer } = Container.get(CesiumService)
  new CesiumService(viewer)
}
