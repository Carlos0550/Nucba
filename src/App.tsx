import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Landing from './pages/Landing'
import Home from './pages/Home'


export default function App() {
  return (
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
  )
}