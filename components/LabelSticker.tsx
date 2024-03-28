import { ReactNode } from 'react';

type LabelStickerProps = {
  children: ReactNode;
  backgroundColor?: string;
};

const colorPalette = [
  '#55355c',
  '#6c3453',
  '#7c3645',
  '#833f34',
  '#804d26',
  '#755c1d',
  '#626b22',
  '#467837',
];

export default function LabelSticker({
  backgroundColor,
  children,
}: LabelStickerProps) {
  backgroundColor = backgroundColor ?? colorPalette[Number(children) % 8];

  return (
    <div
      className="inline-flex rounded-md items-center m-0.5 px-2 py-0.5 text-xs text-white"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      {children}
    </div>
  );
}
