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
      <Route path='/pg-game' element={<PGGamePage/>}/>
      <Route path='/scan-qr' element={<ScanQRPage/>}/>
      <Route path='/result-game' element={<ResultGamePage/>}/>
      <Route path='/all-gift' element={<AllGiftPage/>}/>
      <Route path='/gift' element={<GiftPage/>}/>
      <Route path='/history' element={<HistoryPage/>}/>
      <Route path='/save-image' element={<SaveImagePage/>}/>
    </Routes>
  );
};

export default AppRouter;