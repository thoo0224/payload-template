import { NAVIGATION_SLUG } from "@/payload/slugs"

import { unstable_cache } from "next/cache"

import { getPayloadInstance } from "@/payload"

async function fetchNavigationSettingsUncached() {
  const payload = await getPayloadInstance()
  const navigationSettings = await payload.findGlobal({
    slug: NAVIGATION_SLUG,
  })

  return navigationSettings
}

export const fetchNavigationSettings = unstable_cache(fetchNavigationSettingsUncached, [], {
  tags: [NAVIGATION_SLUG],
})
