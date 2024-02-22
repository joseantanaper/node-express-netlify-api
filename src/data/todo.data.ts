import { Todo } from "@/src/entities/Todo"

const data: Todo[] = [
  { id: "1", name: 'Todo 1' },
  { id: "2", name: 'Todo 2' }
]

const todoEntries: Todo[] = data.map(obj => {
  const object = obj as Todo
  return object
})

export default todoEntries