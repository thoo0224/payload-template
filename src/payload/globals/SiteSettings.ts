import { GlobalConfig } from "payload"
import { SITE_SETTINGS_SLUG } from "../slugs"

export const SiteSettings: GlobalConfig = {
  slug: SITE_SETTINGS_SLUG,
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      defaultValue: "Default Title",
    },
  ],
}
