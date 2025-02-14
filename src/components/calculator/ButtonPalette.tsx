import React from 'react'
import { nanoid } from 'nanoid'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useCalculatorStore, ButtonType } from '/Projects/All Practice/React Practice/DragCalulator/src/lib/store'
import { Card, CardHeader, CardTitle, CardContent } from '/Projects/All Practice/React Practice/DragCalulator/src/components/ui/card'
import { Button } from './Button'

const AVAILABLE_BUTTONS: Omit<ButtonType, 'id'>[] = [
  { value: '0', type: 'number' },
  { value: '1', type: 'number' },
  { value: '2', type: 'number' },
  { value: '3', type: 'number' },
  { value: '4', type: 'number' },
  { value: '5', type: 'number' },
  { value: '6', type: 'number' },
  { value: '7', type: 'number' },
  { value: '8', type: 'number' },
  { value: '9', type: 'number' },
  { value: '+', type: 'operator' },
  { value: '-', type: 'operator' },
  { value: '*', type: 'operator' },
  { value: '/', type: 'operator' },
  { value: '=', type: 'equals' },
  { value: 'C', type: 'clear' },
]

export function ButtonPalette() {
  const addButton = useCalculatorStore((state) => state.addButton)

  const handleAddButton = (button: Omit<ButtonType, 'id'>) => {
    addButton({
      ...button,
      id: nanoid(),
    })
  }

  // Dummy state for available buttons for drag-and-drop reordering
  const [buttons, setButtons] = React.useState(AVAILABLE_BUTTONS)

  // Handle drag end event
  const handleDragEnd = (result: any) => {
    if (!result.destination) return // If dropped outside the droppable area, do nothing

    const newButtons = Array.from(buttons)
    const [movedButton] = newButtons.splice(result.source.index, 1) // Remove the dragged item
    newButtons.splice(result.destination.index, 0, movedButton) // Insert it at the new location

    setButtons(newButtons) // Update state with reordered buttons
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Card>
        <CardHeader>
          <CardTitle>Button Palette</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-2">
          <Droppable droppableId="button-palette" direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex flex-wrap gap-2"
              >
                {buttons.map((button, index) => (
                  <Draggable key={button.value} draggableId={button.value} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Button
                          {...button}
                          id={button.value}
                          onClick={() => handleAddButton(button)}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </CardContent>
      </Card>
    </DragDropContext>
  )
}
