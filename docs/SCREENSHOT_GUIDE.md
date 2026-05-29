# Screenshot Guide

Screenshots make Late Meet easier to understand, but they must be consistent, useful, and privacy-safe.

## Storage Location

Store documentation screenshots in:

```text
docs/assets/screenshots/
```

Use descriptive kebab-case filenames:

```text
extension-loaded.png
popup.png
options.png
meet-start-copilot.png
dashboard-side-panel.png
```

## Required Standards

- Capture real extension states, not empty mockups.
- Keep browser zoom consistent.
- Prefer clean, readable screenshots.
- Use meaningful alt text in Markdown.
- Redact private data before committing.
- Do not include API keys, meeting codes, private names, emails, or sensitive meeting content.

## Redaction Checklist

Before committing a screenshot, check for:

- Meeting code.
- Meeting title.
- User avatar.
- User name.
- Email address.
- API keys.
- Private chat messages.
- Confidential transcript or summary text.

## README Usage

Use Markdown image syntax with relative paths:

```markdown
![Late Meet extension popup](docs/assets/screenshots/popup.png)
```

For screenshots inside files under `docs/`, use paths relative to the docs file:

```markdown
![Late Meet extension popup](assets/screenshots/popup.png)
```

## Review Checklist

- Image path resolves locally.
- Alt text describes the UI state.
- Screenshot is not blurry.
- Sensitive data is removed.
- Filename matches the documented UI state.
