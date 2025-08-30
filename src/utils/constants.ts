import {Token} from '@uniswap/sdk-core'

if (!process.env.PRIVATE_KEY || !process.env.RECIPIENT) {
    console.error('Env variables not found')
    process.exit(1)
}

export const PRIVATE_KEY = process.env.PRIVATE_KEY
export const RECIPIENT = process.env.RECIPIENT
export const RPC_URL = 'https://mainnet.base.org'

// Контракты Uniswap V3

// Uniswap V3 SwapRouter
export const SWAP_ROUTER = ''

// Адреса токенов (Base)

export const USDC = new Token(8453, '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', 6, 'USDC', 'USD Coin')
export const WBTC = new Token(8453, '0xA88594D404727625A9437C3f886C7643872296AE', 8, 'WBTC', 'Wrapped BTC')

