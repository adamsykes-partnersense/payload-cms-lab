import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

export const payload = await getPayloadHMR({ config })

export const getPage = async (slug: string) => {
  const page = await payload.find({
    collection: 'pages',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return page.docs[0]
}
