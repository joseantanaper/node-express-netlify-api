import { Todo } from "@/src/entities/Todo"

export const toTodo = (object: any): Todo => {
  return {
    id: object.id,
    name: object.name
  } as Todo
}