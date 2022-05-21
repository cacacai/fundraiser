import { WagmiConfig, createClient } from 'wagmi'
import Profile from './Profile';

const client = createClient()

function Connect() {
  return (
    <WagmiConfig client={client}>
      <Profile />
    </WagmiConfig>
  )
}
export default Connect;