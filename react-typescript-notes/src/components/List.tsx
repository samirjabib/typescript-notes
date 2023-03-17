import { ReactNode } from "react"

type ListProps<T>= { //use generic type
    items:T[],
    render:(item: T) => ReactNode
}

export const List = <T,>({items, render}:ListProps<T>) =>{
    return(
        <ul>
            {items.map( (item, i) => {
                return(
                    <li key={i}>
                        {render(item)}
                    </li>
                )
            })}
        </ul>
    )
}