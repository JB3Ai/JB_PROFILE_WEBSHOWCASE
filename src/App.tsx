import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OS from './pages/OS';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/os" element={<OS />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
