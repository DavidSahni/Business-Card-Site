import Layout from './components/Layout'
import BusinessCard from './components/BusinessCard'
import { davidProfileData } from './data'

function App() {
  return (
    <Layout variant="professional">
      <BusinessCard data={davidProfileData} />
    </Layout>
  )
}

export default App