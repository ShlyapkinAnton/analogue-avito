import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/protected-route/protected-route'
import { MainPage } from './pages/main-page/main'
import { ProfilePage } from './pages/profile-page/profile'
import { AdvPage } from './pages/adv-page/adv'
import { MyAdvPage } from './pages/my-adv-page/my-adv'
import { SellerProfilePage } from './pages/seller-profile-page/seller-profile'
import { AuthPage } from './pages/auth-page/auth'
import { AddNewAdv } from './components/add-new-adv/add-new-adv'
import { Reviews } from './components/reviews/reviews'
// import { Layout } from './components/Layout'

export function AppRoutes({ user, setUser }) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<AuthPage setUser={setUser} />} />
      <Route path="/adv/:id" element={<AdvPage />} />
      <Route path="/seller-profile/:id" element={<SellerProfilePage />} />
      <Route path="/reviews/:id" element={<Reviews />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my-adv" element={<MyAdvPage />} />
        <Route path="/add-new-adv/:id" element={<AddNewAdv />} />
      </Route>
    </Routes>
  )
}
