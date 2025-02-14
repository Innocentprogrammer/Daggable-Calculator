import { Card } from "../../components/ui/card"

interface DisplayProps {
  value: string
}

export function Display({ value }: DisplayProps) {
  return (
    <Card className="w-full p-4 mb-4 bg-muted">
      <div className="text-right text-3xl font-mono truncate">
        {value}
      </div>
    </Card>
  )
}