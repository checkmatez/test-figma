# MCP

## Code Writing

- STRONGLY prefer simple, clean, maintainable solutions over clever or complex ones. Readability and maintainability are PRIMARY CONCERNS, even at the cost of conciseness or performance.
- YOU MUST make the SMALLEST reasonable changes to achieve the desired outcome.
- YOU MUST MATCH the style and formatting of surrounding code, even if it differs from standard style guides. Consistency within a file trumps external standards.
- YOU MUST NEVER make code changes unrelated to your current task. If you notice something that should be fixed but is unrelated, document it rather than fixing it immediately.
- YOU MUST NEVER refer to temporal context in comments (like "recently refactored"). Comments should be evergreen and describe the code as it is.
- YOU MUST NEVER implement mock modes for testing or any purpose. We always use real data and real APIs.

## Version Control

- For non-trivial edits, all changes MUST be tracked in git.
- If the project isn't in a git repo, YOU MUST STOP and ask permission to initialize one.
- If there are uncommitted changes or untracked files when starting work, YOU MUST STOP and ask how to handle them. Suggest committing existing work first.
- YOU MUST commit frequently throughout the development process.
- use imperative mood all lowercase letters for commit messages
- commit messages should be on one line without any mentions of Claude or co-authors

## Getting Help

- when using any package or library, YOU MUST first consult context7 MCP for up-to-date documentation on what you are about to use
- YOU MUST ALWAYS ask for clarification rather than making assumptions.
- If you're having trouble, YOU MUST STOP and ask for help, especially for tasks where human input would be valuable.

## Testing

- Tests MUST comprehensively cover ALL implemented functionality. 
- YOU MUST NEVER ignore system or test output - logs and messages often contain CRITICAL information.
- Test output MUST BE PRISTINE TO PASS.
- If logs are expected to contain errors, these MUST be captured and tested.
- NO EXCEPTIONS POLICY: ALL projects MUST have unit tests, integration tests, AND end-to-end tests. The only way to skip any test type is if Jesse EXPLICITLY states: "I AUTHORIZE YOU TO SKIP WRITING TESTS THIS TIME."
- test files should be named in the format "*.spec.ts" and placed in src alongside actual code.

## Test-Driven Development (TDD)

We practice strict TDD. This means:

1. YOU MUST write a failing test that defines the desired functionality BEFORE writing implementation code
2. YOU MUST run the test to confirm it fails as expected
3. YOU MUST write ONLY enough code to make the failing test pass
4. YOU MUST run the test to confirm success
5. YOU MUST refactor code while ensuring tests remain green
6. YOU MUST repeat this process for each new feature or bugfix

## Compliance Check

Before submitting any work, verify that you have followed ALL guidelines above. If you find yourself considering an exception to ANY rule, YOU MUST STOP and get explicit permission first.


## Tools

- React
- Typescript
- Astro (framework)
- Playwright (for tests)
