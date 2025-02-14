import { create } from "zustand";
import { persist } from "zustand/middleware";
import { evaluate } from "mathjs";

export type ButtonType = {
  id: string;
  value: string;
  type: "number" | "operator" | "equals" | "clear";
  gridArea?: string;
};

interface CalculatorState {
  display: string;
  buttons: ButtonType[];
  expression: string;
  addButton: (button: ButtonType) => void;
  removeButton: (id: string) => void;
  updateButtonPosition: (id: string, gridArea: string) => void;
  pressButton: (value: string, type: ButtonType["type"]) => void;
  clearDisplay: () => void;
}

export const useCalculatorStore = create<CalculatorState>()(
  persist(
    (set) => ({
      display: "0",
      expression: "",
      buttons: [],
      addButton: (button) =>
        set((state) => ({
          buttons: [...state.buttons, button],
        })),
      removeButton: (id) =>
        set((state) => ({
          buttons: state.buttons.filter((b) => b.id !== id),
        })),
      updateButtonPosition: (id, gridArea) =>
        set((state) => ({
          buttons: state.buttons.map((b) =>
            b.id === id ? { ...b, gridArea } : b
          ),
        })),
      pressButton: (value, type) =>
        set((state) => {
          if (type === "clear") {
            return { display: "0", expression: "" };
          }

          if (type === "equals") {
            try {
              const result = evaluate(state.expression || "0");
              return {
                display: result.toString(),
                expression: result.toString(),
              };
            } catch {
              return {
                display: "Error",
                expression: "",
              };
            }
          }

          let newExpression = state.expression;

          // Handle numbers
          if (type === "number") {
            if (state.display === "0" || state.display === "Error") {
              newExpression = value; // Reset display if starting fresh
            } else {
              newExpression += value;
            }
          }

          // Handle operators
          if (type === "operator") {
            if (newExpression === "" && value === "-") {
              newExpression = "-"; // Allow leading negative sign
            } else if (
              newExpression &&
              !["+", "-", "*", "/"].includes(newExpression.slice(-1))
            ) {
              newExpression += value; // Add operator if last char isn't an operator
            }
          }

          return {
            display: newExpression,
            expression: newExpression,
          };
        }),
      clearDisplay: () => set({ display: "0", expression: "" }),
    }),
    {
      name: "calculator-storage",
    }
  )
);
