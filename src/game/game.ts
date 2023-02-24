import { Fleet } from '@/fleet'
import { Grid } from '@/grid'
import { Settings } from '@/settings'
import { Team } from '@/team'
import { Entity } from '@/utils'

export class Game extends Entity {
    private _entities: Entity[] = []

    public get Entities(): Entity[] {
        return this._entities
    }

    private _lastTimestamp = 0

    public Awake(): void {
        super.Awake()

        // instantiate and Grid to the list of children
        this._entities.push(new Grid())

        this._entities.push(
            new Grid(),
            new Fleet(Team.A),
            new Fleet(Team.B),
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