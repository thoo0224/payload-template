import { env } from "@/env"
import { stringify } from "qs-esm"

import {
  CollectionSlug,
  PaginatedDocs,
  TransformCollectionWithSelect,
  TypedCollectionSelect,
} from "payload"

type SelectFromCollectionSlug<TSlug extends CollectionSlug> = TypedCollectionSelect[TSlug]

type FetchResult<
  TSlug extends CollectionSlug,
  TSelect extends SelectFromCollectionSlug<TSlug>,
  // @ts-ignore
> = PaginatedDocs<TransformCollectionWithSelect<TSlug, TSelect>>

function createSelectQuery(select: any) {
  return stringify(
    {
      select,
    },
    { addQueryPrefix: true },
  )
}

export default async function fetchCollection<
  TSlug extends CollectionSlug,
  TSelect extends SelectFromCollectionSlug<TSlug>,
>(args: {
  collection: TSlug
  depth?: number
  fallbackLocale?: string
  locale?: string
  select?: TSelect
}) {
  const selectQuery = createSelectQuery(args.select)
  const url = `${env.NEXT_PUBLIC_URL}/api/${args.collection}${selectQuery}&depth=${args.depth}&locale=${args.locale}&fallbackLocale=${args.fallbackLocale}`

  const response = await fetch(url)
  const collection: FetchResult<TSlug, TSelect> = await response.json()

  console.log(JSON.stringify(collection, null, 2))

  return collection
}
