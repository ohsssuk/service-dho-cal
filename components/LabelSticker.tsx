import { ReactNode } from 'react';

type LabelStickerProps = {
  children: ReactNode;
  backgroundColor: string;
};

export default function LabelSticker({
  backgroundColor,
  children,
}: LabelStickerProps) {
  return (
    <div
      className="inline-flex rounded-md items-center m-0.5 px-2 py-0.5 text-xs text-white"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      {children}
    </div>
  );
}
