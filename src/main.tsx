import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/theme.css'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import App from '@/App'
import { AppContextProvider } from '@/Context/AppContext'
import { BrowserRouter } from 'react-router-dom'

import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme='dark'>
      <ModalsProvider>
        <Notifications position="top-right" />
        <BrowserRouter>
            <AppContextProvider>
              <App />
            </AppContextProvider>
        </BrowserRouter>
      </ModalsProvider>
    </MantineProvider>
  </StrictMode>,
)
