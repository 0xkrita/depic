import BlackPaintPalette from './icons/colors/BlackPaint';
import BluePaintPalette from './icons/colors/BluePaint';
import GreenPaintPalette from './icons/colors/GreenPaint';
import OrangePaintPalette from './icons/colors/OrangePaint';
import PurplePaintPalette from './icons/colors/PurplePaint';
import RedPaintPalette from './icons/colors/RedPaint';
import WhitePaintPalette from './icons/colors/WhitePaint';
import YellowPaintPalette from './icons/colors/YellowPaint';

export default function PaintPalette() {
  return (
    <div>
      <BlackPaintPalette />
      <WhitePaintPalette></WhitePaintPalette>
      <RedPaintPalette></RedPaintPalette>
      <OrangePaintPalette></OrangePaintPalette>
      <YellowPaintPalette></YellowPaintPalette>
      <GreenPaintPalette></GreenPaintPalette>
      <BluePaintPalette></BluePaintPalette>
      <PurplePaintPalette></PurplePaintPalette>
    </div>
  );
}
