interface BaseTodo {
  id: string
  name: string
  creationDate?: Date
}

export type Todo = BaseTodo
export type NewTodo = Omit<Todo, 'id' >