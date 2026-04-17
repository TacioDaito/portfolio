import { cards } from '../../data/cards';
import type { QuadrantGridProps } from './QuadrantGrid.types';
import QuadrantCard from '../QuadrantCard';
import ExpandedCardOverlay from '../ExpandedCardOverlay';

function QuadrantGrid({ expandedCard, onCardExpand, onCardClose }: QuadrantGridProps) {
  return (
    <div className="
      grid grid-cols-2 grid-rows-2 gap-2 relative items-center bg-surface
      noise-overlay rounded-4xl aspect-[3.23/2] w-[50vw]
    ">
      {cards.map((card) => (
        <div key={card.id} className="relative">
          <QuadrantCard
            card={card}
            isExpanded={expandedCard === card.id}
            isAnyExpanded={expandedCard !== null}
            onExpand={() => onCardExpand(card.id)}
          />

          {expandedCard === card.id && (
            <ExpandedCardOverlay
              card={card}
              onClose={onCardClose}
            />
          )}
        </div>
      ))}

    </div>
  );
}

export default QuadrantGrid;