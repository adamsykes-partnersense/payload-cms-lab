import { getPage, payload } from '@/lib/payload'
import { Media } from '@/payload-types'
import Image from 'next/image'

export default async function Homepage() {
  const data = await getPage('/')

  const hero = data.hero
  const image = hero.image as Media

  if (hero.image)
    return (
      <main>
        <h1>Homepage</h1>

        <section>
          <h2>{hero.title}</h2>
          <div
            style={{
              border: '1px solid black',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '2rem',
            }}
          >
            {image.url && (
              <div
                style={{
                  background: 'black',
                  color: 'white',
                }}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={image.width || 400}
                  height={image.height || 400}
                  style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto' }}
                />
              </div>
            )}
            {hero.caption_html && <div dangerouslySetInnerHTML={{ __html: hero.caption_html }} />}
          </div>
        </section>
      </main>
    )
}
