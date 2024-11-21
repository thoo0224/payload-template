import { getPayload as getRealPayload } from "payload"
import configPromise from "@payload-config"

export async function getPayloadInstance() {
  return getRealPayload({
    config: configPromise,
  })
}
