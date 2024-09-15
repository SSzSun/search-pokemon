"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";

export default function PokemonModal({
  children,
  onDismiss,
}: {
  children: React.ReactNode;
  onDismiss: () => void;
  pokemon?: any;
}) {
  const overlay = useRef(null);
  const wrapper = useRef(null);

  // Function to close the modal when clicking outside the modal
  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 flex items-center justify-center"
      onClick={onClick}
    >
      {/* Modal content */}
      <div ref={wrapper} className="w-full max-w-3xl mx-auto max-h-full ">
        {children}
      </div>
    </div>
  );
}
