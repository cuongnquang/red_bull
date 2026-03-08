import { Routes, Route } from 'react-router-dom';
import ChoosePlayerPage from '../pages/ChoosePlayerPage';
import ConfirmInfoPage from '../pages/ConfirmInfoPage';
import EnterPhonePage from '../pages/EnterPhonePage';
import GamePage from '../pages/GamePage';
import PlayerInfoPage from '../pages/PlayerInfoPage';
import PrizeResultPage from '../pages/LuckySpinResultPage';
import SpinWheelPage from '../pages/SpinWheelPage';
import VerifyOtpPage from '../pages/VerifyOtpPage';
import TotalRewardsPage from '../pages/TotalRewardsPage';
import LoginPage from '../pages/pg/LoginPage';
import PGGamePage from '../pages/pg/PGGamePage';
import ScanQRPage from '../pages/pg/ScanQRPage';
import ResultGamePage from '../pages/pg/ResultGamePage';
import AllGiftPage from '../pages/pg/AllGiftPage';
import GiftPage from '../pages/pg/GiftPage';
import HistoryPage from '../pages/pg/HistoryPage';
import SaveImagePage from '../pages/pg/SaveImage';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ChoosePlayerPage />} />
      <Route path="/enter-phone" element={<EnterPhonePage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
      <Route path="/player-info" element={<PlayerInfoPage />} />
      <Route path="/confirm-info" element={<ConfirmInfoPage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/spin-wheel" element={<SpinWheelPage />} />
      <Route path="/lucky-spin-result" element={<PrizeResultPage />} />
      <Route path='/total-rewards' element={<TotalRewardsPage />} />
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/pg-game' element={<ProtectedRoute><PGGamePage/></ProtectedRoute>}/>
      <Route path='/scan-qr' element={<ProtectedRoute><ScanQRPage/></ProtectedRoute>}/>
      <Route path='/result-game' element={<ProtectedRoute><ResultGamePage/></ProtectedRoute>}/>
      <Route path='/all-gift' element={<ProtectedRoute><AllGiftPage/></ProtectedRoute>}/>
      <Route path='/gift' element={<ProtectedRoute><GiftPage/></ProtectedRoute>}/>
      <Route path='/history' element={<ProtectedRoute><HistoryPage/></ProtectedRoute>}/>
      <Route path='/save-image' element={<ProtectedRoute><SaveImagePage/></ProtectedRoute>}/>
    </Routes>
  );
};

export default AppRouter;