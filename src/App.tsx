import { useState } from 'react'
import { Header } from './components/Header'
import { ProducerGrid } from './components/ProducerGrid'
import { ProducerMap } from './components/ProducerMap'
import producers from './data/producers.json'
import type { Producer } from './types/producer'
import './App.css'

type ViewMode = 'grid' | 'map'

function App() {
  const [view, setView] = useState<ViewMode>('grid')

  return (
    <>
      <Header />
      <div className="view-toggle-bar">
        <div className="view-toggle">
          <button
            className={`view-toggle__btn${view === 'grid' ? ' view-toggle__btn--active' : ''}`}
            onClick={() => setView('grid')}
            aria-pressed={view === 'grid'}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
            </svg>
            Grid
          </button>
          <button
            className={`view-toggle__btn${view === 'map' ? ' view-toggle__btn--active' : ''}`}
            onClick={() => setView('map')}
            aria-pressed={view === 'map'}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
              <line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" />
            </svg>
            Map
          </button>
        </div>
      </div>

      <main>
        {view === 'grid'
          ? <ProducerGrid producers={producers as Producer[]} />
          : <ProducerMap producers={producers as Producer[]} />
        }
      </main>

      <footer className="app-footer">
        <p>Data stored in <code>src/data/producers.json</code> — edit that file to update the list.</p>
      </footer>
    </>
  )
}

export default App
