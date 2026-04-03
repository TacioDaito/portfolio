import { useState, useEffect, useCallback } from 'react';
import type { CardId } from './types/card';
import QuadrantGrid from './components/QuadrantGrid';

function App() {
  const [expandedCard, setExpandedCard] = useState<CardId | null>(null);

  const handleCardExpand = useCallback((id: CardId) => {
    setExpandedCard(id);
  }, []);

  const handleCardClose = useCallback(() => {
    setExpandedCard(null);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && expandedCard !== null) {
      setExpandedCard(null);
    }
  }, [expandedCard]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="bg-dark-950 noise-overlay h-screen w-screen flex items-center justify-center p-4 md:p-12">
      <div className="bg-surface noise-overlay rounded-4xl p-2 md:p-4 w-full max-w-6xl h-full max-h-[80vh]">
        <QuadrantGrid
          expandedCard={expandedCard}
          onCardExpand={handleCardExpand}
          onCardClose={handleCardClose}
        />
      </div>
    </div>
  );
}

export default App;