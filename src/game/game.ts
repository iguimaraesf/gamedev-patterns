import { Fleet } from '@/fleet'
import { Grid } from '@/grid'
import { Entity } from '@/utils'
import { GameInputComponent } from './components'

export class Game extends Entity {
    private _entities: Entity[] = []

    public get Entities(): Entity[] {
        return this._entities
    }

    constructor(grid: Grid, fleetA: Fleet, fleetB: Fleet) {
        super()

        this._entities.push(grid, fleetA, fleetB)
    }

    private _lastTimestamp = 0

    public Awake(): void {
        this.AddComponent(new GameInputComponent())
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