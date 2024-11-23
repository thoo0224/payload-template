import configPromise from "@payload-config"

import { getPayload as getRealPayload } from "payload"

export async function getPayloadInstance() {
  return getRealPayload({
    config: configPromise,
  })
}
