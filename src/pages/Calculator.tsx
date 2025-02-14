import { ButtonPalette } from "../../src/components/calculator/ButtonPalette"
import { CalculatorGrid } from "../../src/components/calculator/CalculatorGrid"

export default function Calculator() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Calculator Builder
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Components</h2>
          <ButtonPalette />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Calculator</h2>
          <CalculatorGrid />
        </div>
      </div>
    </div>
  )
}
