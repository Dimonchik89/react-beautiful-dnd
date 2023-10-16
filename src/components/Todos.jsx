import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const TodoItem = ({ item, index, dragItemStyle = {}, children }) => {
    return (
        <Draggable
            index={index}
            draggableId={item.id}
        >
            {(provided, snapshot) => (
                <div 
                    className='card'
                    ref={provided.innerRef} 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}  
                    style={{
                        padding: '8px 16px',
                        ...provided.draggableProps.style,
                        ...(snapshot.isDragging ? dragItemStyle : {})
                    }} 
                >
                    {item.title}
                </div>
            )}
        </Draggable>
    )
}

const Todos = ({ list, onDragEnd, dragListStyle, ...props }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
            {
                (provided, snapshot) => (
                    <ul 
                        ref={provided.innerRef} 
                        {...provided.droppableProps}
                        style={{
                            ...(snapshot.isDraggingOver ? dragListStyle : {})
                        }}    
                    >
                        {
                            list.map((item, index) => (
                                <TodoItem key={item.id} index={index} item={item} {...props}/>
                                // <Draggable
                                //     key={item.id}
                                //     index={index}
                                //     draggableId={item.id}
                                // >
                                //     {(provided, snapshot) => (
                                //         <div 
                                //             className='card'
                                //             ref={provided.innerRef} 
                                //             {...provided.draggableProps}
                                //             {...provided.dragHandleProps}   
                                //         >
                                //             {item.title}
                                //         </div>
                                //     )}
                                // </Draggable>
                            ))
                        }
                        {provided.placeholder}
                    </ul>
                )
            }
            
        </Droppable>
    </DragDropContext>
  )
}

export default Todos
