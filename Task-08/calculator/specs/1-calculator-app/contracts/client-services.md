# Client-Side Service Contracts: Calculator App

This document defines the interfaces and contracts for the client-side services that will manage calculation logic and history within the Calculator App.

## ICalculationService Interface

Defines the contract for performing arithmetic operations.

- **Methods**:
    - `add(operand1: number, operand2: number): number`
        - **Description**: Performs addition of two numbers.
        - **Input**: Two numbers (`operand1`, `operand2`).
        - **Output**: The sum of the numbers.
        - **Error Handling**: Throws an error for invalid number inputs.

    - `subtract(operand1: number, operand2: number): number`
        - **Description**: Performs subtraction of two numbers.
        - **Input**: Two numbers (`operand1`, `operand2`).
        - **Output**: The difference of the numbers.
        - **Error Handling**: Throws an error for invalid number inputs.

    - `multiply(operand1: number, operand2: number): number`
        - **Description**: Performs multiplication of two numbers.
        - **Input**: Two numbers (`operand1`, `operand2`).
        - **Output**: The product of the numbers.
        - **Error Handling**: Throws an error for invalid number inputs.

    - `divide(operand1: number, operand2: number): number`
        - **Description**: Performs division of two numbers.
        - **Input**: Two numbers (`operand1`, `operand2`).
        - **Output**: The quotient of the numbers.
        - **Error Handling**: Throws an error for division by zero or invalid number inputs.

    - `percentage(value: number, total?: number): number`
        - **Description**: Calculates the percentage of a value, optionally against a total. If `total` is not provided, calculates 1% of the value.
        - **Input**: `value` (number), `total` (number, optional).
        - **Output**: The calculated percentage.
        - **Error Handling**: Throws an error for invalid number inputs.

    - `clear(): void`
        - **Description**: Resets the current calculation state.
        - **Input**: None.
        - **Output**: None.

## IHistoryService Interface

Defines the contract for managing calculation history.

- **Methods**:
    - `addEntry(expression: string, result: string): void`
        - **Description**: Adds a new calculation entry to the history.
        - **Input**: `expression` (string, the full calculation), `result` (string, the final outcome).
        - **Output**: None.
        - **Error Handling**: Throws an error for invalid input strings.

    - `getHistory(): HistoryEntry[]`
        - **Description**: Retrieves the list of all stored calculation history entries.
        - **Input**: None.
        - **Output**: An array of `HistoryEntry` objects, ordered by most recent first.

    - `clearHistory(): void`
        - **Description**: Clears all entries from the calculation history.
        - **Input**: None.
        - **Output**: None.

### Data Structures (Referenced)

- `HistoryEntry`: As defined in `data-model.md`.
