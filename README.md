# Interactive Grid System

This project is a Cocos Creator-based implementation of a dynamic grid system with interactive cells. The system leverages the observer pattern and a centralized event manager to enable responsive interactions across the grid.

## Features

- **Dynamic Grid Creation**: The grid size and cell configuration are defined programmatically and can be adjusted through a level configuration.
- **Observer Pattern**: Each cell subscribes to centralized events, allowing global commands to dynamically affect the grid.
- **Event-Driven Design**: The project uses a custom `EventManager` to handle centralized events such as color changes or actions triggered on cells.
- **Customizable Cell Types**: Cells change their behavior and appearance based on their type, which is defined in the level configuration.

## How It Works

1. **Grid Generation**:
   - The `GridManager` class generates the grid based on a 2D array (`levelConfig`) and dynamically positions cells within a parent node.

2. **Centralized Event Management**:
   - The `EventManager` class facilitates event broadcasting, enabling global commands to update cells (e.g., changing colors or triggering actions).

3. **Cell Behavior**:
   - Each cell is implemented as an observer that reacts to events such as `ChangeCellColor` and `PerformAction`.

## Getting Started

1. **Install Dependencies**:
   - Ensure you have Cocos Creator installed and set up properly.

2. **Import the Project**:
   - Clone or download the repository and open it in Cocos Creator.

3. **Run the Project**:
   - Open the main scene and run the project to see the grid in action.

## Key Classes

- **GridManager**:
  - Handles grid generation and manages the parent node for cells.
  
- **EventManager**:
  - A centralized manager for broadcasting and handling events across the system.

- **Cell**:
  - Represents an individual grid cell and acts as an observer for events.

## Usage

- Modify the `levelConfig` array in `GridManager.ts` to define the grid layout and cell types.
- Broadcast events using `EventManager.emit` to dynamically update cells.
