# Data Model: Calculator App

This document describes the key data entities and their relationships for the Calculator App, derived from the feature specification.

## Entities

### Calculation

Represents a single arithmetic operation performed by the calculator.

- **Fields**:
    - `operand1`: (Number) The first number in the operation. Max 16 digits.
    - `operator`: (String) The arithmetic operator (e.g., "+", "-", "*", "/", "%").
    - `operand2`: (Number, optional) The second number in the operation. Required for binary operations. Max 16 digits.
    - `result`: (Number) The outcome of the operation. Dynamic decimal places, up to 8.
    - `timestamp`: (DateTime) The time when the calculation was performed.

- **Relationships**:
    - One-to-one with `History Entry` (a `Calculation` is part of a `History Entry`).

- **Validation Rules**:
    - `operand1` and `operand2` must be valid numbers (not NaN, not infinite).
    - `operator` must be one of the defined arithmetic operations.
    - Division by zero is not allowed (results in an error state).
    - Input numbers and results must adhere to specified digit/decimal place limits.

### History Entry

Represents a record of a completed calculation, stored for user reference.

- **Fields**:
    - `id`: (String) Unique identifier for the history entry.
    - `expression`: (String) The full mathematical expression as displayed to the user (e.g., "5 + 3").
    - `result`: (String) The final result of the expression.
    - `timestamp`: (DateTime) The time when this entry was recorded (same as `Calculation.timestamp`).

- **Relationships**:
    - Many `History Entry` items form the overall calculation history.
    - Contains one `Calculation` (or the details representing it).

- **Validation Rules**:
    - `expression` should be a valid string representation of a calculation.
    - `result` should be a valid string representation of the calculation's outcome.
    - History entries are immutable once recorded.