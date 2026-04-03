import type { BackdropProps } from './Backdrop.types';

function Backdrop({ onClose }: BackdropProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-40 bg-dark-950/75"
      aria-hidden="true"
    />
  );
}

export default Backdrop;