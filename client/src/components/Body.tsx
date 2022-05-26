import { Routes, Route } from 'react-router-dom';
import Treasury from '../pages/Treasury';

function Body() {
  return (
    <Routes>
      <Route index element={<Treasury />} />
    </Routes>
  )
}

export default Body;