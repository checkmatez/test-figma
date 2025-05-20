# Test Figma Project

A basic Astro project with TypeScript and Prettier auto-formatting setup.

## Features

- Astro framework with TypeScript support
- Prettier for code formatting
- Husky for Git hooks
- Automatic formatting of staged files before commit
- Playwright testing with screenshot comparison

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Format all files
npm run format

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing

The project includes Playwright tests for visual regression testing:

```bash
# Install Playwright browsers (first time only)
npx playwright install chromium

# Run all tests
npm test

# Run a specific test file
npm test -- tests/homepage.spec.ts

# Run tests with UI mode
npm run test:ui

# View the last test report
npx playwright show-report
```

Test files are located in the `tests` directory:

- `homepage.spec.ts` - Basic functionality test that saves a screenshot
- `visual.spec.ts` - Visual comparison test that compares against reference screenshots

The first time you run a visual test, it will create a reference screenshot. Subsequent runs will compare against this reference.

## Project Structure

```
/
├── .husky/               # Git hooks
├── src/
│   └── pages/            # Page components
│       └── index.astro   # Home page
├── tests/
│   ├── homepage.spec.ts  # Basic tests
│   ├── visual.spec.ts    # Visual comparison tests
│   └── screenshots/      # Screenshot artifacts
├── astro.config.mjs      # Astro configuration
├── playwright.config.ts  # Playwright test configuration
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```
