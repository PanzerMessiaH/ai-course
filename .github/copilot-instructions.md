# GitHub Copilot Instructions

## System Context Requirements

### 🚨 MANDATORY CONTEXT LOADING
**ALWAYS read and follow the complete content from**: `.github/instructions/main-optimized.md`

This file contains:
- Optimized Memory Bank system architecture
- Adaptive complexity model (Level 1-4)
- Hierarchical rule loading system
- Token-optimized creative phase processes
- Mode transition protocols
- Memory Bank file structure requirements
- Complexity-based documentation templates

**Before ANY operation, Copilot must:**
1. **Read** `.github/instructions/main-optimized.md` for current system rules
2. **Follow** the Memory Bank creation mandate (CRITICAL RULE)
3. **Apply** the appropriate complexity level workflow
4. **Use** the optimized mode architecture and transitions

## Git Commit and Push Guidelines

### 🚨 MANDATORY COMMIT FORMAT
**ALL commits MUST follow Conventional Commits v1.0.0 specification**: https://www.conventionalcommits.org/en/v1.0.0/

#### Required Format:
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Allowed Types:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

#### Examples:
```
feat(auth): add user authentication system
fix(api): resolve memory leak in user session handling
docs(readme): update installation instructions
style(theme): format color palette definitions
refactor(components): extract common layout logic
test(api): add unit tests for user service
build(deps): upgrade next.js to v14.2.30
```

### 🔒 GIT OPERATION RESTRICTIONS

#### EXPLICIT PERMISSION REQUIRED
- **NEVER** commit or push code without explicit user instruction
- **NEVER** run `git commit`, `git push`, or `git add` without direct user command
- **ALWAYS** ask for permission before any git operations
- **ALWAYS** suggest the conventional commit message format when user requests a commit

#### Required User Commands:
User must explicitly say one of:
- "commit this" / "commit these changes"
- "push to git" / "push these changes"
- "git commit" / "git push"

#### When User Requests Git Operations:
1. **FIRST**: Suggest a conventional commit message following the specification
2. **SECOND**: Ask for user confirmation of the commit message
3. **THIRD**: Only after confirmation, execute the git commands

#### Example Flow:
```
User: "commit this"
Copilot: "I'll help you commit with a conventional commit message. Based on the changes, I suggest:

feat(memory-bank): initialize project tracking system

- Add tasks.md as single source of truth
- Create projectbrief.md with project overview
- Establish activeContext.md for session tracking
- Set up progress.md for milestone tracking

Does this commit message look correct? Should I proceed with the commit?"

User: "yes"
Copilot: [executes git add and git commit commands]
```

### 🎯 ENFORCEMENT RULES

1. **NO EXCEPTIONS**: All commits must use conventional format
2. **NO ASSUMPTIONS**: Never assume user wants to commit/push
3. **ALWAYS CONFIRM**: Get explicit permission for all git operations
4. **SUGGEST FORMAT**: Always provide conventional commit message suggestions
5. **EDUCATIONAL**: Explain conventional commits if user is unfamiliar

## File Reading Guidelines

### 🚨 MANDATORY .github FOLDER READING PROTOCOL
**When reading ANY file from the `.github` folder, ALWAYS read the complete file contents.**

#### Required Approach:
- **NEVER** read partial sections of `.github` files
- **ALWAYS** use complete file reading (startLineNumber: 1, endLineNumber: end of file)
- **ENSURE** full context is loaded for all instruction files, visual maps, and configuration files

#### Rationale:
- `.github` files contain complete system architectures and workflows
- Partial reading can miss critical dependencies and context
- Memory Bank system requires full rule comprehension
- Mode transitions depend on complete visual map understanding

#### Examples of .github Files Requiring Complete Reading:
- `.github/instructions/main-optimized.md`
- `.github/instructions/visual-maps/*.md`
- `.github/prompts/*.md`
- `.github/rules/**/*.md`
- Any configuration or instruction file in `.github/`

### 📋 Reading Protocol:
1. **Identify** file is in `.github` folder
2. **Read** complete file from line 1 to end
3. **Process** entire content before taking action
4. **Reference** full context when making decisions

---
*These instructions are mandatory for all GitHub Copilot interactions in this repository.*
