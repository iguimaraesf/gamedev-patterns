import { Fleet } from '@/fleet'
import { Grid } from '@/grid'
import { Team } from '@/team'
import { Entity } from '@/utils'
import { GameInputComponent } from './components'

export class Game extends Entity {
    private _entities: Entity[] = []

    public get Entities(): Entity[] {
        return this._entities
    }

    private _lastTimestamp = 0

    public Awake(): void {
        this.AddComponent(new GameInputComponent())
        super.Awake()

        // instantiate and Grid to the list of children
        this._entities.push(new Grid())
        const grid = new Grid()

        this._entities.push(
            grid,
            new Fleet(Team.A, grid),
            new Fleet(Team.B, grid),
        )

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