import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useUserData } from '../contexts/userData';
import { useWeb3 } from '../contexts/web3Data';
import { useAddresses } from '../contexts/web3Data/chains';
import Home from '../pages/Home';

function Body() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default Body;