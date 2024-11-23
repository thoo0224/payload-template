import "server-only"

import path from "path"
import sharp from "sharp"
import { fileURLToPath } from "url"

import { postgresAdapter } from "@payloadcms/db-postgres"
import { payloadCloudPlugin } from "@payloadcms/payload-cloud"
import { lexicalEditor } from "@payloadcms/richtext-lexical"

import { buildConfig } from "payload"

import { Media } from "./payload/collections/Media"
import { Users } from "./payload/collections/Users"
import { BusinessSettings } from "./payload/globals/BusinessSettings"
import { Navigation } from "./payload/globals/Navigation"
import { SiteSettings } from "./payload/globals/SiteSettings"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  globals: [SiteSettings, BusinessSettings, Navigation],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
