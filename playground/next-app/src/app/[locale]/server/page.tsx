import { Link } from '@koi18n/next/link'
import { getTs } from '@/locale/server'

export default async function Home(props) {
  const ts = await getTs({ chunkId: 'server' })
  const name = 'Hugo'
  const a = ts`Hello, ${name}!`

  return (
    <div>
      <p>{a}</p>
      <p>{ts`This is a server message!`}</p>
      <p>{ts`You haven't checked you email since ${new Date()}`}</p>
      <p>{ts`You got ${10000} messages in your mail inbox`}</p>
      <p>{JSON.stringify(props)}</p>

      <Link href={'/'}>To Home</Link>
    </div>
  )
}
