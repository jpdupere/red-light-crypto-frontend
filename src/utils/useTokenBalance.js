import { useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'
import BigNumber from 'bignumber.js'
import testRLCAbi from './testRLCabi.json'

const useTokenBalance = (tokenAddress = '0x9B0d8B7114231518B885EAd7826e639F86ca135F') => {
    const [balance, setBalance] = useState(BigNumber(0))
    const { user, web3 } = useMoralis()
  
    useEffect(() => {
      const fetchBalance = async (contract) => {
        const res = await contract.methods.balanceOf(user.get('ethAddress')).call()
        setBalance(new BigNumber(res))
      }
  
      if (user && web3) {
        const contract = new web3.eth.Contract(testRLCAbi, tokenAddress)
        const setBalanceSub = contract.events.SetBalance({filter: {receiver: user.get('ethAddress')}}, (error, result) => {
          fetchBalance(contract)
          console.log(result)
        })
        
        fetchBalance(contract)
        return () => {
          setBalanceSub.unsubscribe()
        }
      }
    }, [user, web3, tokenAddress])
  
    return balance
  }

  export default useTokenBalance