import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OS from './pages/OS';
import Wishlist from './pages/Wishlist';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/os" element={<OS />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
