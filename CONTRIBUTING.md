# Contributing to The Only One

Thanks for wanting to contribute. This document explains how to report issues, propose changes, and submit code. The goal is to keep contributions small, clear, and fast to review.

## Table of contents

* Purpose
* How to raise an issue
* How to propose a change
* Development setup
* Branching and commits
* Pull request checklist
* Code style and quality
* Tests and CI
* Documentation and examples
* Licensing and attribution
* Reporting security issues
* Getting help

## Purpose

This project is a personal portfolio template meant to be easy to adapt and extend. Contributions should preserve clarity, performance, and accessibility.

If you want to add a new feature, a design tweak, or fix a bug, please follow the steps below so reviews stay fast and useful.

## How to raise an issue

1. Search existing issues to avoid duplicates.
2. Create a new issue and include:

   * A short, descriptive title.
   * A clear description of the problem or feature.
   * Steps to reproduce the bug if relevant.
   * Expected and actual behavior.
   * Environment details when applicable, for example Node version.
   * A minimal code sample or screenshot if helpful.

Labels will be assigned by the maintainers. If you are unsure, open the issue and we will guide you.

## How to propose a change

1. Open an issue to discuss substantial changes before you start coding. For small fixes you can skip this step and open a pull request directly.
2. Fork the repository and create a branch named like `fix/short-description` or `feat/short-description`.
3. Implement your changes and keep commits focused and atomic.
4. Submit a pull request and reference the issue if one exists.

## Development setup

To run the project locally:

```bash
git clone https://github.com/pratyush0898/the-only-one.git
cd the-only-one
npm install
npm run dev
```

Make sure you use Node 18 or later. If you have trouble, include your Node and npm versions in the issue.

## Branching and commits

* Base your work on the `main` branch.
* Create feature branches with clear names, for example `feat/contact-form-validation`.
* Keep commits small and focused. A single commit should do one thing.
* Use present tense in commit messages and keep them descriptive. Example:

```
Add client side validation to contact form
```

Avoid large monolithic commits that mix formatting, unrelated fixes, or generated files.

## Pull request checklist

Before requesting review, make sure your PR meets these guidelines:

* [ ] The PR has a clear and concise description.
* [ ] Changes are covered by tests where appropriate.
* [ ] Linting passes locally.
* [ ] No unrelated files or secrets are included.
* [ ] Accessibility considerations are addressed for UI changes.
* [ ] Any new dependencies are necessary and lightweight.
* [ ] The PR targets `main` unless a release branch is specified.

Add a short summary of what changed and why in the PR description. If the PR is intended to close an issue, add `Closes #issue-number` to the PR body.

## Code style and quality

* This project uses TypeScript and Tailwind CSS. Keep types strict and components small.
* Follow existing patterns. Be consistent with naming and folder structure.
* Keep UI primitives in `components/ui` and page specific components in the appropriate folder.
* Avoid adding global CSS unless it is justified.
* Write readable code. Prefer clarity over cleverness.

### Formatting and linting

* Run the formatter and linter before committing. If you do not have the project linting tools installed, run:

```bash
npm run lint
```

* If the project does not include automatic formatting yet, keep code style consistent with existing files.

## Tests and CI

* Add tests for logic that could break silently. UI snapshot tests are optional.
* CI runs lint and build checks. If your PR fails CI, update your branch to fix the reported issues.

## Documentation and examples

* Update the README or relevant docs when you add new features or env variables.
* Include a short example or usage notes for any public utility or component you add.

## Licensing and attribution

All contributions are covered by the project license. This repository uses the Apache License 2.0. By submitting a pull request you agree to license your contributions under Apache 2.0.

If your change depends on or includes third party code, make sure the code is compatible with Apache 2.0 and include attribution where required.

## Reporting security issues

Do not open a public issue for security vulnerabilities. Email security reports to the repository owner or use the platform's private security reporting mechanism when available. Keep details confidential until a fix is deployed.

## Getting help

If you need help or want feedback before implementing a change, open an issue describing the idea and the approach you plan to take. The maintainers will respond with guidance.

Thank you for helping make this project better. Small, thoughtful contributions are more valuable than large, rushed ones.
