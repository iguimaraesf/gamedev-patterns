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
}