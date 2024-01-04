import NavigateProvider from './context/NavigateContext'
import TicketProvider from './context/TicketContext'
import DashBoard from './pages/dashboard'
import { version } from './utils/api/api'

export default function Home() {
  return (
    <main className='flex h-full w-full flex-col'>
      <NavigateProvider>
        <TicketProvider>
          <DashBoard />
        </TicketProvider>

        <div className='flex text-white fixed bottom-2 left-24'>Versão :  <a href="https://iterface-my-ticket-next14-y6it.vercel.app/" target="_blank" rel="noopener noreferrer">{version}</a></div>
      </NavigateProvider>

    </main>
  )
}
