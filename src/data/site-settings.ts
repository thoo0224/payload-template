import { SITE_SETTINGS_SLUG } from "@/payload/slugs"

import { unstable_cache } from "next/cache"

import { getPayloadInstance } from "@/payload"

async function fetchSiteSettingsUncached() {
  const payload = await getPayloadInstance()
  const siteSettings = await payload.findGlobal({
    slug: SITE_SETTINGS_SLUG,
  })

  return siteSettings
}

export const fetchSiteSettings = unstable_cache(fetchSiteSettingsUncached, [], {
  tags: [SITE_SETTINGS_SLUG],
})
