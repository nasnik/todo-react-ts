import './App.css'
interface TodoItem{
    id: number;
    title: string;
}
function App() {
    const todoList: TodoItem[] = [
        {id: 1, title: 'Learn React'},
        {id: 2, title: 'Learn NodeJS'},
        {id: 3, title: 'Learn JavaScript'}
    ]
  return (
    <>
        <h1>Todo List</h1>
        <ul>
            {todoList.map(item =>
                <li key={item.id}>{item.title}</li>
            )}
        </ul>
    </>
  )
}

export default App
