# Project Structure

## Current Organization
```
.
├── .kiro/                 # Kiro AI assistant configuration
│   └── steering/          # AI guidance documents
│       ├── product.md     # Product overview and purpose
│       ├── tech.md        # Technology stack and commands
│       └── structure.md   # This file - project organization
└── .vscode/               # VSCode configuration
    └── settings.json      # Editor settings (MCP disabled)
```

## Recommended Structure
Standard React project organization:

```
.
├── .kiro/                 # Kiro configuration (keep as-is)
├── .vscode/               # Editor configuration
├── public/                # Static assets
│   └── index.html         # HTML template
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── ui/            # Reusable UI components
│   │   └── layout/        # Layout components
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── styles/            # CSS/Tailwind styles
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Entry point
├── tests/                 # Test files
├── docs/                  # Documentation
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Naming Conventions
- **Components**: PascalCase for React components: `MyComponent.jsx`
- **Files**: camelCase for JavaScript files: `utilityFunction.js`
- **Directories**: lowercase with hyphens: `my-component/`
- **CSS Classes**: Tailwind utility classes and custom classes in kebab-case
- **Hooks**: camelCase starting with "use": `useCustomHook.js`
- Keep steering documents in `.kiro/steering/` for AI guidance

## File Organization Principles
- Group related functionality together
- Separate concerns (business logic, UI, tests)
- Keep configuration files at project root
- Use consistent naming patterns within each directory