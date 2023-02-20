import { ComponentInterface } from './component.h'

type constr<T> = { new(...args: unknown[]): T }

export abstract class Entity {
    protected _components: ComponentInterface[] = []

    public get Components(): ComponentInterface[] {
        return this._components
    }

    public AddComponent(component: ComponentInterface): void {
        this._components.push(component)
        component.Entity = this
    }

    public GetComponent<C extends ComponentInterface>(constr: constr<C>): C {
        for (const component of this._components) {
            if (component instanceof constr) {
                return component as C
            }
        }
        throw new Error(`Componente ${constr.name} não encontrado na Entidade ${this.constructor.name}.`)
    }

    public RemoveComponent<C extends ComponentInterface>(constr: constr<C>): void {
        let toRemove: ComponentInterface | undefined
        let index: number | undefined

        for (let i = 0; i < this._components.length; i++) {
            const component = this._components[i]
            if (component instanceof constr) {
                toRemove = component
                index = i
                break
            }
        }

        if (toRemove && index) {
            toRemove.Entity = null
            this._components.splice(index, 1)
        }
    }

    public HasComponent<C extends ComponentInterface>(constr: constr<C>): boolean {
        for (const component of this._components) {
            if (component instanceof constr) {
                return true
            }
        }
        return false
    }
}