import Layout from './components/Layout'
import BusinessCard from './components/BusinessCard'
import { sampleProfileData } from './data'

function App() {
  return (
    <Layout variant="professional">
      <BusinessCard data={sampleProfileData} />
    </Layout>
  )
}

export default App