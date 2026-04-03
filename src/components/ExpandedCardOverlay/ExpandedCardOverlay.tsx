import type { ExpandedCardOverlayProps } from './ExpandedCardOverlay.types';

function ExpandedCardOverlay({ card, onClose }: ExpandedCardOverlayProps) {
  return (
    <div
      onClick={onClose}
      className="
        fixed inset-8 z-50
        rounded-4xl shadow-glow-lg
        flex items-center justify-center
        text-primary-50 text-2xl font-medium
        cursor-pointer
        bg-surface
        animate-expand
      "
      role="dialog"
      aria-modal="true"
      aria-label={`${card.label} section expanded`}
    >
      <span className="text-center p-4">{card.label}</span>
    </div>
  );
}

export default ExpandedCardOverlay;