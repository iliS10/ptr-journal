import dynamic from 'next/dynamic'

const TradeJournal = dynamic(() => import('@/components/TradeJournal'), {
  ssr: false
})

export default function Home() {
  return <TradeJournal />
}