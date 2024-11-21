import { getPayloadInstance } from "@/payload"
import { SITE_SETTINGS_SLUG } from "@/payload/slugs"

export async function fetchSiteSettings() {
  const payload = await getPayloadInstance()
  const siteSettings = await payload.findGlobal({
    slug: SITE_SETTINGS_SLUG,
  })

  return siteSettings
}
