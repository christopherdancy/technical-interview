import React from 'react'
import useUserDatas from '../contexts/userData/userData'

const CurrentBalance = () => {
  const userData = useUserDatas();
  // console.log(userData[0].userBalance?.toString())
  return (
    <div className="flex text-white">
        <div>
            Current Balance: {userData[0].userBalance?.toString()}
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default CurrentBalance