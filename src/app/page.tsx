import NavigateProvider from './context/NavigateContext'
import DashBoard from './pages/dashboard'

export default function Home() {
  return (
    <main className='flex  overflow-y-hidden overflow-x-hidden'>
      <NavigateProvider>
        <DashBoard />
      </NavigateProvider>

    </main>
  )
}
