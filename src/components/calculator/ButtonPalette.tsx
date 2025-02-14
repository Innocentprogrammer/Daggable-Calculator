import { nanoid } from 'nanoid'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Button Palette</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-4 gap-2">
        {AVAILABLE_BUTTONS.map((button) => (
          <Button
            key={button.value}
            {...button}
            id={button.value}
            onClick={() => handleAddButton(button)}
          />
        ))}
      </CardContent>
    </Card>
  )
}