/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ThingsToDo } from './pages/ThingsToDo';
import { Beaches } from './pages/Beaches';
import { Restaurants } from './pages/Restaurants';
import { Events } from './pages/Events';
import { WhereToStay } from './pages/WhereToStay';
import { VacationRentalOwnerGuide } from './pages/VacationRentalOwnerGuide';
import { PropertyManagement } from './pages/PropertyManagement';
import { MovingProsCons } from './pages/MovingProsCons';
import { Neighborhoods } from './pages/Neighborhoods';
import { Zoo } from './pages/activities/Zoo';
import { GulfStatePark } from './pages/activities/GulfStatePark';
import { TheHangout } from './pages/activities/TheHangout';
import { CoastalArts } from './pages/activities/CoastalArts';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="things-to-do" element={<ThingsToDo />} />
        <Route path="things-to-do/zoo" element={<Zoo />} />
        <Route path="things-to-do/gulf-state-park" element={<GulfStatePark />} />
        <Route path="things-to-do/the-hangout" element={<TheHangout />} />
        <Route path="things-to-do/coastal-arts-center" element={<CoastalArts />} />
        <Route path="beaches" element={<Beaches />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="events" element={<Events />} />
        <Route path="where-to-stay" element={<WhereToStay />} />
        <Route path="vacation-rental-owner-guide" element={<VacationRentalOwnerGuide />} />
        <Route path="property-management" element={<PropertyManagement />} />
        <Route path="moving-pros-cons" element={<MovingProsCons />} />
        <Route path="neighborhoods" element={<Neighborhoods />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
