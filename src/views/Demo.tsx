import { useLocalObservable, Observer } from "mobx-react-lite"

const Todo = () => {
  const todo = useLocalObservable(() => ({
    title: "Test",
    done: true,
    toggle() {
      this.done = !this.done
    },
  }))

  return (
    <Observer>
      {() => (
        <h1 onClick={todo.toggle}>
          {todo.title} {todo.done ? "[DONE]" : "[TODO]"}
        </h1>
      )}
    </Observer>
  )
}

export default Todo
