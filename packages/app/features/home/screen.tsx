import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web'
import { Text, useSx, View } from 'dripsy'

export function HomeScreen() {
  const sx = useSx()

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <WithSkiaWeb
        opts={{
          locateFile: (file) =>
            `https://cdn.jsdelivr.net/npm/canvaskit-wasm@0.39.1/bin/full/${file}`,
        }}
        getComponent={() => import('./components/SkiaAnimatedRect')}
        fallback={<Text style={{ textAlign: 'center' }}>Loading Skia...</Text>}
      />
    </View>
  )
}
