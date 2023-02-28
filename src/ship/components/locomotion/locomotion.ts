import { IComponent, Vector2D } from '@/utils'
import { Ship } from '@/ship'
import { Node } from '@/node'

export class ShipLocomotionComponent implements IComponent {
    public Entity: Ship
    private _node: Node

    constructor(node: Node) {
        this.Node = node
    }

    public get Node(): Node {
        return this._node
    }

    public set Node(v: Node) {
        this._node = v
    }

    public get Position(): Vector2D {
        return this.Node.Center
    }

    public Awake(): void {
        this._node.Ship = this.Entity
    }

    public Update(deltaTime: number): void {
        /* @todo */
    }
}
