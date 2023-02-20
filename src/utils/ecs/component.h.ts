import { IUpdate } from '../update.h'
import { Entity } from './entity'

export interface IComponent extends IUpdate {
    Entity: Entity | null
}
