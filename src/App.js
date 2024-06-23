import Header from './components/Header/Header';
import { AuthProvider } from './assets/contexts/AuthContext';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import { AttentionProvider, useAttention } from './assets/contexts/AttentionContext';
import { useEffect, useState } from 'react';
import Cart from './pages/Cart/Cart';
import Orders from './pages/Orders/Orders';
import Profile from './pages/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer/Footer';
import Address from './pages/Address/Address';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import AccessibilityButton from './components/Accessibility/AccessibilityButton';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

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
  const [viewImage, setViewImage] = useState(true);

  function handleImageView() {
    setViewImage(!viewImage);
  }

  return(
    <AuthProvider>
      <AttentionProvider>
        <BrowserRouter>
          <AccessibilityButton func={handleImageView}/>
          <Header view={viewImage}/>
            <Routes>
              <Route path="/" element={<SetAttention att={false}><Home /></SetAttention>}/>
              <Route path="/login" element={<SetAttention att={true}><Login /></SetAttention>}/>
              <Route path="/register" element={<SetAttention att={true}><Register /></SetAttention>}/>
              <Route path="/cart" element={<SetAttention att={false}><Cart /></SetAttention>}/>
              
              <Route path="/orders" element={
                <ProtectedRoute>
                  <SetAttention att={false}><Orders /></SetAttention>
                </ProtectedRoute>
              }/>
              
              <Route path="/orders/:id" element={
                <ProtectedRoute>
                  <SetAttention att={false}><OrderDetails /></SetAttention>
                </ProtectedRoute>
              }/>

              <Route path="/profile" element={
                <ProtectedRoute>
                  <SetAttention att={false}><Profile /></SetAttention>
                </ProtectedRoute>
              }/>

              <Route path="/profile/address" element={
                <ProtectedRoute>
                  <SetAttention att={false}><Address /></SetAttention>
                </ProtectedRoute>
              }/>

              <Route path="/products/:id" element={
                <ProtectedRoute>
                  <SetAttention att={false}><ProductDetails /></SetAttention>
                </ProtectedRoute>
              }/>
              
            </Routes>
          <Footer view={viewImage} />
        </BrowserRouter>
      </AttentionProvider>
    </AuthProvider>
  );
}

export default App;
