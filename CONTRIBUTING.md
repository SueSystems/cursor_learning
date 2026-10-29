# Contributing to Learning_Cursor

Thank you for your interest in contributing to Learning_Cursor. Contributions, suggestions, bug reports, and documentation improvements are welcome.

## How to Contribute

Use this workflow for a typical contribution:

1. Fork the repository on GitHub.
2. Clone your fork locally:

   ```bash
   git clone https://github.com/YOUR-USERNAME/cursor_learning.git
   cd cursor_learning
   ```

3. Create a branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Make your changes and test them locally.
5. Commit your changes using the commit convention below.
6. Push your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

7. Open a Pull Request against the `main` branch.

## Branch Naming

Use one of these prefixes:

- `feature/` for new functionality
- `fix/` for bug fixes
- `docs/` for documentation changes
- `style/` for formatting or visual-only changes

Use short, descriptive names, such as `feature/dark-mode-toggle` or `fix/mobile-date-alignment`.

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

```text
feat: add dark mode toggle
fix: correct date alignment on mobile
```

Common prefixes include `feat`, `fix`, `docs`, `style`, `refactor`, `test`, and `chore`.

## Code Rules

- Use Vanilla JavaScript only. Do not add frameworks or libraries unless the change has been discussed first.
- Use semantic HTML and accessible markup, including alt text, labels, and ARIA attributes where needed.
- Use CSS classes instead of inline styles. Follow a mobile-first, responsive approach.
- Use consistent formatting with 2-space indentation, meaningful names, and comments where they clarify intent.
- Test changes in at least two browsers before submitting a Pull Request.

## Pull Requests

- Keep each Pull Request focused on one feature, fix, or related documentation change.
- Include a clear description of what changed and why.
- Include screenshots or screen recordings for UI changes.
- Link the related GitHub Issue when one exists.
- Confirm that the project works locally and that your changes do not introduce unrelated regressions.

## Reporting Bugs and Requesting Features

Use GitHub Issues to report bugs or request features:

- For a bug, use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md).
- For an idea or improvement, use the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md).

Before opening an issue, search existing issues to avoid duplicates. Include enough detail for someone else to reproduce the bug or understand the proposed feature.

## Code of Conduct

All contributors are expected to be respectful and inclusive. Please read the [Code of Conduct](CODE_OF_CONDUCT.md) before participating.
