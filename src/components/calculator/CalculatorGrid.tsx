import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useCalculatorStore } from '/Projects/All Practice/React Practice/DragCalulator/src/lib/store'
import { Display } from './Display'
import { DraggableButton } from './DraggableButton'
import { Card, CardContent } from '/Projects/All Practice/React Practice/DragCalulator/src/components/ui/card'

export function CalculatorGrid() {
  const { display, buttons, pressButton, updateButtonPosition, removeButton } = useCalculatorStore()

  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      removeButton(result.draggableId)
      return
    }

    const gridArea = `${result.destination.droppableId}`
    updateButtonPosition(result.draggableId, gridArea)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Card className="w-full max-w-md">
        <CardContent className="p-4">
          <Display value={display} />
          
          <div className="grid grid-cols-4 gap-2 relative min-h-[400px]">
            {buttons.map((button, index) => (
              <Droppable key={button.id} droppableId={`grid-${index}`}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="min-h-[60px]"
                  >
                    <DraggableButton
                      {...button}
                      index={index}
                      onClick={() => pressButton(button.value, button.type)}
                    />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </CardContent>
      </Card>
    </DragDropContext>
  )
}