# Copilot Instructions for p5.js Scene Setup (Beginner Friendly)

## Goal
Create and modify code in a way that is easy for new students to read and understand.

## Core principles
- Keep it simple and explicit.
- Prefer readability over clever abstractions.
- Use a small number of files and straightforward naming.
- Do not introduce advanced patterns unless explicitly requested.

## Required function style
- Do **not** use arrow functions.
- Use normal function declarations or function expressions only.
- For scene methods, use explicit assignments like:
  - `scene1.enter = function() { ... }`
  - `scene1.update = function() { ... }`
  - `scene1.render = function() { ... }`
  - `scene1.keyPressed = function() { ... }`
  - `scene1.exit = function() { ... }`

## Required scene architecture
When asked for a scene setup (especially "setup with 3 scenes"), generate this structure:

1. `index.html`
   - Load p5.js first.
  - Load `scenes.js`, then scene files, then `main.js`.

2. `main.js`
   - `setup()` creates canvas and starts with `switchScene(scene1)`.
   - `draw()` calls `currentScene.update()` first (if it exists), then `currentScene.render()` (if it exists).
   - Global `keyPressed()` forwards input to `currentScene.keyPressed()` if it exists.

3. `scenes.js`
   - Define `let currentScene;`.
   - Define `switchScene(newScene)` that:
     - calls `currentScene.exit()` if present,
     - sets `currentScene = newScene`,
     - calls `currentScene.enter()` if present.
  - Keep `scenes.js` focused on scene switching and shared scene-system logic only.

4. Scene files (required for scene setups)
  - Create separate files for scenes (for example: `scene1.js`, `scene2.js`, `scene3.js`).
  - Define one scene object per file.
  - Each scene should have `enter`, `update`, `render`, `keyPressed`, and `exit` methods.
  - Use the same explicit method style (`scene1.enter = function() { ... }`).

Example script order in `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.11.3/lib/p5.min.js" defer></script>
<script src="scenes.js" defer></script>
<script src="scene1.js" defer></script>
<script src="scene2.js" defer></script>
<script src="scene3.js" defer></script>
<script src="main.js" defer></script>
```

## Update vs Render
- `update()`: Handle game logic, state changes, input responses. Do NOT draw here.
  - Example: check if player moved left, update `scene1.playerX`, check collisions.
- `render()`: Draw everything. Do NOT change game state here.
  - Example: draw background, draw player at `scene1.playerX`, draw UI text, scores.
- This separation keeps visual bugs separate from logic bugs and makes code easier to debug.

## Input handling rule
- Keep one global p5 input handler in `main.js`.
- Put scene-specific key behavior (or input checks) inside each scene's `keyPressed` method or `update()` method.
- Never reassign global `keyPressed` inside scene `enter` functions.

## State data rules
- Default to direct scene properties (for example: `scene3.player1Score`) instead of nested `scene.state` objects.
- Scene data should persist by default across scene switches.
- Do not automatically clear or destroy scene variables in `exit()`.
- In `enter()`, only initialize a scene variable if it is `undefined`.
- Cross-scene reads are allowed when useful (for example, game over scene reading score from play scene).
- Only reset scene data when explicitly requested (for example: a dedicated new-game reset step).

## Simplicity constraints
- No classes unless explicitly requested.
- No factories/builders unless explicitly requested.
- For scene setups, prefer one file per scene to keep each file short and beginner-friendly.
- No extra features, UI systems, or abstractions not asked for.

## Default 3-scene behavior
For a basic 3-scene starter (optional quickstart template only):
- Start in `scene1`.
- **Only if helpful for quick testing:** In each scene's `keyPressed`:
  - key `'1'` switches to `scene1`
  - key `'2'` switches to `scene2`
  - key `'3'` switches to `scene3`
- **Only for prototyping:** In each `render`, clearly draw scene name text (e.g., "Scene 1").

For actual games, replace this with relevant key behavior for that specific scene (for example: arrow keys to move, space to jump, P to pause).

## Teaching style
- Add short, clear comments that help beginners.
- Use simple variable names.
- Avoid compressed or highly abstract code.
