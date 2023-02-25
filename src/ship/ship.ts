import { Fleet } from '@/fleet'
import { Node } from '@/node'
import { Entity, Vector2D } from '@/utils'
import { ShipDrawComponent, ShipLocomotionComponent } from './components'

export class Ship extends Entity {
    private readonly _locomotionComponent: ShipLocomotionComponent

    constructor(public readonly Factory: Fleet, node: Node) {
        super()

        this._locomotionComponent = new ShipLocomotionComponent()
        this._locomotionComponent.Node = node
    }

    public get Position(): Vector2D | null {
        return this._locomotionComponent.Position
    }

    public Awake(): void {
        this.AddComponent(this._locomotionComponent)
        this.AddComponent(new ShipDrawComponent())
        this.AddComponent(new ShipLocomotionComponent())

        super.Awake()
    }
}
