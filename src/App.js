import Header from './components/Header/Header';
import { AuthProvider } from './assets/contexts/AuthContext';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { AttentionProvider, useAttention } from './assets/contexts/AttentionContext';
import { useEffect } from 'react';
import Cart from './pages/Cart/Cart';
import Orders from './pages/Orders/Orders';
import Profile from './pages/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer/Footer';

const SetAttention = ({att, children}) => {
  const {attention, setAttention} = useAttention();

  useEffect(() => {
    if(attention !== att){
      setAttention(att)
    };
  }, [att, attention, setAttention]);

  return children;
}

function App() {
  return(
    <AuthProvider>
      <AttentionProvider>
        <BrowserRouter>
          <Header />
          <div className='content'>
            <Routes>
              <Route path="/" element={<SetAttention att={false}><Home /></SetAttention>}/>
              <Route path="/login" element={<SetAttention att={true}><Login /></SetAttention>}/>
              <Route path="/register" element={<SetAttention att={false}><Signup /></SetAttention>}/>
              <Route path="/cart" element={<SetAttention att={false}><Cart /></SetAttention>}/>
              
              <Route path="/orders" element={
                <ProtectedRoute>
                  <SetAttention att={false}><Orders /></SetAttention>
                </ProtectedRoute>
              }/>

              <Route path="/profile" element={
                <ProtectedRoute>
                  <SetAttention att={false}><Profile /></SetAttention>
                </ProtectedRoute>
              }/>
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AttentionProvider>
    </AuthProvider>
  );
}

export default App;
