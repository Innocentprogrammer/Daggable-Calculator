import { cn } from "../../lib/utils"
import { ButtonType } from "../../lib/store"
import { Button as ShadcnButton } from "../../components/ui/button"

interface CalculatorButtonProps extends ButtonType {
  onClick: () => void
  className?: string
}

export function Button({ value, type, onClick, className }: CalculatorButtonProps) {
  return (
    <ShadcnButton
      variant={type === 'operator' ? 'secondary' : 'default'}
      className={cn(
        'w-full h-full text-xl font-medium',
        type === 'equals' && 'bg-primary hover:bg-primary/90',
        type === 'clear' && 'bg-destructive hover:bg-destructive/90',
        className
      )}
      onClick={onClick}
    >
      {value}
    </ShadcnButton>
  )
}
