import { CanvasLayer } from '@/canvas-layer'
import { Node } from '@/node'
import { Settings } from '@/settings'
import { IComponent } from '@/utils'

export class NodeDrawComponent implements IComponent {
    public Entity: Node

    public Awake(): void {
        this.Clear()
    }

    public Update(deltaTime: number): void {
        this.Clear()
        this.Draw()
    }

    private Clear(): void {
        CanvasLayer.Background.ClearRect(this.Entity.Start, this.Entity.Size)
    }

    private Draw(): void {
        CanvasLayer.Background.FillRect(
            this.Entity.Start,
            this.Entity.Size,
            this.Entity.IsActive ? Settings.grid.color.active : Settings.grid.color.regular
        )
    }
}