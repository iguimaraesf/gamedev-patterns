import { Fleet } from '@/fleet'
import { Node } from '@/node'
import { Settings } from '@/settings'
import { Entity, Vector2D } from '@/utils'
import { ShipDrawComponent, ShipLocomotionComponent } from './components'

export class Ship extends Entity {
    private readonly _locomotionComponent: ShipLocomotionComponent

    constructor(public readonly Factory: Fleet, node: Node) {
        super()

        this._locomotionComponent = new ShipLocomotionComponent(node)
    }

    public get Node(): Node {
        return this._locomotionComponent.Node
    }

    public get Position(): Vector2D | null {
        return this._locomotionComponent.Position
    }

    public Awake(): void {
        this.AddComponent(this._locomotionComponent)
        this.AddComponent(new ShipDrawComponent())
        // this.AddComponent(new ShipLocomotionComponent())

        super.Awake()
    }

    private _isActive = false
    
    public get IsActive(): boolean {
        return this._isActive
    }

    public set IsActive(v: boolean) {
        this._isActive = v
    
        if (v) {
            this._locomotionComponent.Node.FindAndSetInLocomotionRange(Settings.ships.locomotion.range)
        }
    }
}
