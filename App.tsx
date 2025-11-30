import React from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import Game from './pages/Game';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Protected Route Wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
     // You might want a spinner here, but returning null prevents flashing 
     // while checking auth state.
     return <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e5336]"></div>
     </div>;
  }

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

// Public Route (Accessible only if NOT logged in, like Landing Page logic)
const MainRoute: React.FC = () => {
    const { currentUser, loading } = useAuth();

    if (loading) {
       return <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e5336]"></div>
       </div>;
    }

    // If logged in, show Dashboard/Home within Layout
    if (currentUser) {
        return <Layout><Home /></Layout>;
    }

    // If not logged in, show Landing Page (No Layout)
    return <Landing />;
};


const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* Root path handles decision between Landing and Home */}
          <Route path="/" element={<MainRoute />} />
          
          {/* Public Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          
          {/* Protected Internal Pages */}
          <Route path="/sobre" element={<ProtectedRoute><Layout><About /></Layout></ProtectedRoute>} />
          <Route path="/servicos" element={<ProtectedRoute><Layout><Services /></Layout></ProtectedRoute>} />
          <Route path="/contato" element={<ProtectedRoute><Layout><Contact /></Layout></ProtectedRoute>} />
          <Route path="/game" element={<ProtectedRoute><Layout><Game /></Layout></ProtectedRoute>} />
          
          {/* Catch all - Redirect to root */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;