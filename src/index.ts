import {USDC} from './utils/constants'
import {getBalance} from './utils/wallet'

console.log(await getBalance('0x8bEAa3bc881aA5CA48b424Af1C22bb2ECDEaCA71', USDC))
