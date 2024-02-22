import todos from '@data/todo.data'
import { Todo, NewTodo, toTodo } from '@entities/Todo'
import { v4 as uuidv4 } from 'uuid'

const getEntries = (): Array<Todo> => {
  return todos
}

const addEntry = (entry: NewTodo): Todo => {
  console.log('todoService', 'addEntry', entry)
  const newTodo = {
    ...toTodo(entry),
    id: uuidv4(),
    creationDate: new Date(),
    modificationDate: new Date(),
  } as Todo
  todos.push(newTodo)
  return newTodo
}

const updateEntry = (entry: Todo) => {
  console.log('todoService', 'updateEntry', 'entry', entry)
  try {
    const index = todos.findIndex((t) => t.id === entry.id)
    console.log('todoService', 'updateEntry', 'index', index)
    if (index === -1) {
      throw Error('Not found')
    }
    const updatedEntry = todos[index]
    updatedEntry.modificationDate = new Date()
    // todos[index] = updatedEntry
    return updatedEntry
  } catch (err) {
    throw Error('Unknown error')
  }
}

const deleteEntry = (id: string) => {
  console.log('todoService', 'deleteEntry', id)
  try {
    const index = todos.findIndex((t) => t.id === id)
    console.log('todoService', 'deleteEntry', 'index', index)
    if (index === -1) {
      throw Error('Not found')
    }
    todos.splice(index, 1)
    return todos
  } catch (error) {
    throw Error('Unknown error')
  }
}

export default {
  getEntries,
  addEntry,
  updateEntry,
  deleteEntry,
}
