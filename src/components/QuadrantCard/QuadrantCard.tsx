import type { QuadrantCardProps } from './QuadrantCard.types';

function QuadrantCard({ card, isExpanded, isAnyExpanded, onExpand }: QuadrantCardProps) {
  const baseClasses = `
    quadrant-card flex items-center justify-center text-primary-50 text-2xl 
    font-medium rounded-4xl cursor-pointer transition-all duration-300 
    ease aspect-[3.23/2] w-[90%] mx-auto
  `;

  const stateClasses = isExpanded
    ? 'opacity-0'
    : isAnyExpanded
    ? 'opacity-30 pointer-events-none'
    : 'hover:scale-[1.02] hover:border-primary-700 hover:shadow-glow';

  return (
    <div
      onClick={onExpand}
      className={`${baseClasses} ${stateClasses}`}
      role="button"
      tabIndex={0}
      aria-label={`Open ${card.label} section`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExpand();
        }
      }}
    >
      <span className="text-center p-4">{card.label}</span>
    </div>
  );
}

export default QuadrantCard;