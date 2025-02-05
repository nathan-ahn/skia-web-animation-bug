import { Canvas, Rect } from '@shopify/react-native-skia'

const SkiaAnimatedRect = () => {
  return (
    <Canvas>
      <Rect x={0} y={0} width={100} height={100} color="blue" />
    </Canvas>
  )
}
export default SkiaAnimatedRect
