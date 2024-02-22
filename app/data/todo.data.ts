import { Todo, toTodo } from "@entities/Todo"

const data: Todo[] = [
  { id: "111", name: 'Todo 111', creationDate: new Date(), modificationDate: new Date() },
  { id: "222", name: 'Todo 222', creationDate: new Date(), modificationDate: new Date() }
]

const todoEntries: Todo[] = data.map(obj => {
  return toTodo(obj)
})

export default todoEntries