import { Canvas } from '@/utils'
import { CanvasLayer } from './canvas-layer'

describe('>>> CanvasLayer', () => {
    it('should create Background canvas only once', () => {
        const spyCanvas = jest.spyOn(Canvas.prototype, 'Awake')
        expect(spyCanvas).not.toBeCalled()

        const canvas1 = CanvasLayer.Background
        const canvas2 = CanvasLayer.Background

        expect(canvas1).toBe(canvas2)
        expect(spyCanvas).toBeCalledTimes(1)
    })

    it('should create Foreground canvas only once', () => {
        const spyCanvas = jest.spyOn(Canvas.prototype, 'Awake')
        expect(spyCanvas).not.toBeCalled()

        const canvas1 = CanvasLayer.Foreground
        const canvas2 = CanvasLayer.Foreground

        expect(canvas1).toBe(canvas2)
        expect(spyCanvas).toBeCalledTimes(1)
    })
 })
