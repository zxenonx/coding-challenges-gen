import { useState } from 'react'
import {ClerkProviderWithRoutes} from './auth/ClerkProviderWithRoutes.jsx'
import { Routes, Route } from 'react-router-dom'

import {Layout} from './layout/Layout.jsx'
import {ChallengeGen} from './challenge/ChallengeGen.jsx'
import {MCQChallenge} from './challenge/MCQChallenge.jsx'
import {HistoryPanel} from './history/HistoryPanel.jsx'
import {AuthenticationPage} from './auth/AuthenticationPage.jsx'

import './App.css'

function App() {
  return (
    <ClerkProviderWithRoutes>
      <Routes>
        <Route path="/sign-in" element={<AuthenticationPage />} />
        <Route path="/sign-up" element={<AuthenticationPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<ChallengeGen />} />
          <Route path="mcq-challenge" element={<MCQChallenge />} />
          <Route path="history" element={<HistoryPanel />} />
        </Route>
      </Routes>
    </ClerkProviderWithRoutes>
  )
}

export default App
