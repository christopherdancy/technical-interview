import useUserDatas from '../contexts/userData/userData'

const CurrentBalance = ({address}:{address:string}) => {
  const userData = useUserDatas(address);
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