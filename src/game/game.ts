import { Settings } from '@/settings'
import { Entity } from '@/utils'

export class Game extends Entity {
    public Entities: Entity[] = []
    private _lastTimestamp = 0

    public Awake(): void {
        super.Awake()

        for (const entity of this.Entities) {
            entity.Awake()
        }

        window.requestAnimationFrame(() => {
            // set initial timestamp
            this._lastTimestamp = Date.now()

            // start update loop
            this.Update()
        })

        this.DirtyDraw()
    }

    public Update(): void {
        const deltaTime = (Date.now() - this._lastTimestamp) / 1000

        // update all components
        super.Update(deltaTime)

        // update all children
        for (const entity of this.Entities) {
            entity.Update(deltaTime)
        }

        this._lastTimestamp = Date.now()
        window.requestAnimationFrame(() => this.Update())
    }

    private DirtyDraw() : void {
        // Create and attach Canvas to the DOM
        const canvas = document.createElement('canvas')
        const canvasSize = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * Settings.grid.dimension + Settings.grid.nodeOffset

        canvas.setAttribute('width', canvasSize.toString())
        canvas.setAttribute('height', canvasSize.toString())
        document.body.appendChild(canvas)
    
        const size = Settings.grid.nodeSize
        const offset = Settings.grid.nodeOffset
        for (let y = 0; y < Settings.grid.dimension; y++) {
            for (let x = 0; x < Settings.grid.dimension; x++) {
                const ctx = canvas.getContext('2d')!
                ctx.beginPath()
                ctx.fillStyle = Settings.grid.color
                ctx.rect((size + offset) * x, (size + offset) * y, size, size)
                ctx.fill()
            }
        }
      }
}