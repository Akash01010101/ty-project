import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/Auth/LoginPage';
import SignUpPage from '../pages/Auth/SignUpPage';
import DashboardPage from '../pages/DashboardPage';
import CreateGigPage from '../pages/CreateGigPage';
import GigsPage from '../pages/GigsPage';
import GigDetailPage from '../pages/GigDetailPage';
import TeamPage from '../pages/TeamPage';
import WalletPage from '../pages/WalletPage';
import ManageOffersPage from '../pages/ManageOffersPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-gig" element={<CreateGigPage />} />
        <Route path="/gigs" element={<GigsPage />} />
        <Route path="/gig/:id" element={<GigDetailPage />} />
        <Route path="/team/:id" element={<TeamPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/manage-offers" element={<ManageOffersPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
