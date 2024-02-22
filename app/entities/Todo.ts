interface BaseTodo {
  id: string
  name: string
  creationDate?: Date
  modificationDate?: Date
}

export const toTodo = (object: any): Todo => {
  return {
    id: object.id,
    name: object.name,
    creationDate: object.creationDate,
    modificationDate: object.modificationDate
  } as Todo
}

export type Todo = BaseTodo
export type NewTodo = Omit<Todo, 'id' >