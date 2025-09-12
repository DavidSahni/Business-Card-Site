# Technology Stack

## Current Setup
- **IDE**: Kiro AI Assistant
- **Configuration**: VSCode settings with MCP disabled by default
- **Platform**: Windows (win32) with cmd shell

## Primary Stack
- **Runtime**: Node.js
- **Framework**: React
- **Styling**: Tailwind CSS
- **Build System**: Vite (recommended) or Create React App
- **Code Formatting**: Prettier

## Common Commands

### Project Setup
```bash
# Initialize new React project with Vite
npm create vite@latest . -- --template react

# Or with Create React App
npx create-react-app .

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install Prettier for code formatting
npm install -D prettier

# Install dependencies
npm install
```

### Development Workflow
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new packages
npm install [package-name]

# Run tests
npm test
```

### Tailwind Commands
```bash
# Generate Tailwind config
npx tailwindcss init --full

# Build Tailwind CSS (if using CLI)
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

## MCP Integration
- MCP servers can be configured in `.kiro/settings/mcp.json`
- Use `uvx` command for running MCP servers (requires uv installation)
- Auto-approval settings available for trusted tools