import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import '@/styles/main.scss'
import {App} from '@/components/app/App'
import { store } from '@/store'
import annotationPlugin from 'chartjs-plugin-annotation'
import { BrowserRouter } from "react-router";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'


ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  annotationPlugin
)

ChartJS.register(ArcElement, Tooltip, Legend)

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
