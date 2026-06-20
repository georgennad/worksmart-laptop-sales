import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load route components to dramatically reduce bundle size
const Home = lazy(() => import('./pages/Home'));
const ThankYou = lazy(() => import('./components/ThankYou'));

// A simple fallback spinner while the route chunk downloads
const PageLoader = () => (
  <div className="flex-1 w-full min-h-screen flex items-center justify-center bg-brand-bg">
    <div className="w-10 h-10 border-4 border-brand-purple/30 border-t-brand-purple rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="flex min-h-screen selection:bg-brand-purple/30">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
