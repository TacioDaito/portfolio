import { GridContext, useCardControl } from '../../hooks/useCardControl';
import { ReactNode } from 'react';

export const QuadrantGrid = ({ children }: { children: ReactNode }) => {
  const { expandedCard, handleCardExpand, handleCardClose } = useCardControl();

  return (
    <GridContext.Provider value={{
        expandedCard: expandedCard,
        onCardExpand: handleCardExpand,
        onCardClose: handleCardClose,
    }}>
      <div className="
        grid grid-cols-2 grid-rows-2 gap-2 relative items-center bg-surface
        noise-overlay rounded-4xl aspect-[3.23/2] w-[50vw]
      ">
        {children}
      </div>
    </GridContext.Provider>
  );
}