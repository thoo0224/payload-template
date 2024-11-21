import { GlobalConfig } from "payload"
import { BUSINESS_SETTINGS_SLUG } from "../slugs"

export const BusinessSettings: GlobalConfig = {
  slug: BUSINESS_SETTINGS_SLUG,
  fields: [
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      defaultValue: "contact@example.com",
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      type: "text",
      required: true,
      defaultValue: "+31 6 12345678",
    },
    {
      name: "kvk",
      label: "KvK",
      type: "text",
      required: true,
      defaultValue: "00000000",
    },
    {
      name: "btw",
      label: "BTW",
      type: "text",
      required: true,
      defaultValue: "(NL)000000000B00",
    },
  ],
}
