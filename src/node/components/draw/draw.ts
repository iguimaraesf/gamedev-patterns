import { Node } from '@/node'
import { Settings } from '@/settings'
import { IComponent } from '@/utils'

export class NodeDrawComponent implements IComponent {
    public Entity: Node

    public Awake(): void {
        const canvas = document.createElement('canvas')
        const canvasSize = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * Settings.grid.dimension + Settings.grid.nodeOffset
        canvas.setAttribute('width', canvasSize.toString())
        canvas.setAttribute('height', canvasSize.toString())
        document.body.appendChild(canvas)
        
        //const size = Settings.grid.nodeSize
        //const offset = Settings.grid.nodeOffset
        const ctx = canvas.getContext('2d')!
        ctx.beginPath()
        ctx.fillStyle = Settings.grid.color
        ctx.rect(this.Entity.Start.x, this.Entity.Start.y, this.Entity.Size.x, this.Entity.Size.y)
        ctx.fill()
    }

    public Update(deltaTime: number): void {
        
    }
}