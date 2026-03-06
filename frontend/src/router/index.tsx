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
    </Routes>
  );
};

export default AppRouter;