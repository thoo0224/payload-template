import { revalidateTag } from "next/cache"
import { GlobalConfig } from "payload"

import { NAVIGATION_SLUG } from "../slugs"

export const Navigation: GlobalConfig = {
  slug: NAVIGATION_SLUG,
  fields: [
    {
      name: "headerLinks",
      label: "Header Links",
      type: "array",
      fields: [
        {
          name: "text",
          label: "Text",
          type: "text",
          required: true,
        },
        {
          name: "href",
          label: "Href",
          type: "text",
          required: true,
        },
      ],
      hooks: {
        afterChange: [() => revalidateTag(NAVIGATION_SLUG)],
      },
    },
  ],
}
