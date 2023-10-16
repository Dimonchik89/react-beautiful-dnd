import { useEffect, useState } from 'react'
import Todos from './components/Todos';


const todoList = [
    {id: '11', title: "Hello", order: 1},
    {id: '12', title: "World", order: 2},
    {id: '13', title: "Petya", order: 3},
    {id: '14', title: "Lorem", order: 3},
    {id: '15', title: "Ipsum", order: 3},
]

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed)
  console.log("startIndex", startIndex);
  console.log("endIndex", endIndex);
  return result;
}

function App() {
  const [list, setList] = useState(todoList)

  const handleDragEnd = ({ destination, source }) => {
    if(!destination) return;

    setList(reorder(list, source.index, destination.index))
  }


  return (
    <div className='app'>
      <Todos 
        list={list} 
        onDragEnd={handleDragEnd}
        dragItemStyle={{
          background: "pink",
          borderRadius: "16px"
        }}
        dragListStyle={{
          background: "lightblue",
          borderRadius: "16px"
        }}
        />
    </div>
  )
}

export default App
