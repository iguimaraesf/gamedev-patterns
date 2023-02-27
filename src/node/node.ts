import { CanvasLayer } from '@/canvas-layer'
import { Entity, Vector2D } from '@/utils'
import { NodeDrawComponent } from './components'

export class Node extends Entity {
    constructor(
        public readonly Start: Vector2D,
        public readonly End: Vector2D,
        public readonly Index: Vector2D
    ) {
        super()
    }

    public get Center(): Vector2D {
        return new Vector2D(
            this.Start.x + this.Size.x / 2,
            this.Start.y + this.Size.y / 2
        )
    }

      public get Size(): Vector2D {
        return new Vector2D(
          this.End.x - this.Start.x,
          this.End.y - this.Start.y
        )
    }

    /**
     * @todo replace temp property with real functionality
     */
    public IsActive = false

    public Occupies(point: Vector2D): boolean {
        if (point.x < this.Start.x) {
            return false
        }
   
        if (point.x > this.End.x) {
            return false
        }
   
        if (point.y < this.Start.y) {
            return false
        }
   
        if (point.y > this.End.y) {
            return false
        }
   
        return true
    }

    public Awake(): void {
        this.AddComponent(new NodeDrawComponent())

        super.Awake()
    }
}
