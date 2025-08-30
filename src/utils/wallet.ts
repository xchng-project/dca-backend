import type {Token} from '@uniswap/sdk-core'
import {ethers} from 'ethers'
import {RPC_URL} from './constants'
import {Erc20__factory} from './typechain'

export const getBalance = async (address: string, token: Token): Promise<bigint> => {
    const provider = new ethers.JsonRpcProvider(RPC_URL)
    const contract = Erc20__factory.connect(token.address, provider)
    return contract.balanceOf(address)
}
