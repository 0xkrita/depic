import BlackPaintPalette from './icons/colors/BlackPaint';
import OrangePaintPalette from './icons/colors/OrangePaint';
import RedPaintPalette from './icons/colors/RedPaint';
import WhitePaintPalette from './icons/colors/WhitePaint';

export default function PaintPalette() {
  return (
    <div>
      <BlackPaintPalette />
      <WhitePaintPalette></WhitePaintPalette>
      <RedPaintPalette></RedPaintPalette>
      <OrangePaintPalette></OrangePaintPalette>
    </div>
  );
}
