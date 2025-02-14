import { Draggable } from "react-beautiful-dnd"
import { Button } from "./Button"
import { ButtonType } from "../../lib/store"

interface DraggableButtonProps extends ButtonType {
  index: number
  onClick: () => void
}

export function DraggableButton({ id, index, ...props }: DraggableButtonProps) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="m-1"
        >
          <Button {...props} />
        </div>
      )}
    </Draggable>
  )
}