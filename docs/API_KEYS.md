# API Key Setup

Late Meet uses a Bring Your Own Key model. Users provide their own provider keys, which keeps account ownership and usage control with the user.

## Required Keys

| Provider   | Purpose                                                  |
| ---------- | -------------------------------------------------------- |
| ElevenLabs | Speech-to-text transcription through Scribe              |
| OpenAI     | Meeting summaries, insights, decisions, and action items |

## Configure Keys

1. Load the extension in Chrome.
2. Open the Late Meet popup.
3. Navigate to Options.
4. Paste your ElevenLabs API key.
5. Paste your OpenAI API key.
6. Save settings.

![Late Meet options page](assets/screenshots/options.png)

## ElevenLabs Key Setup

Use your ElevenLabs key for speech-to-text transcription. Confirm the key is active in your ElevenLabs dashboard and has enough quota for meeting audio processing.

## OpenAI Key Setup

Use your OpenAI key for summaries, decisions, topics, action items, and other meeting intelligence. Confirm the key is active in your OpenAI dashboard and has enough quota for the model configured by the extension.

## Security Rules

- Never commit API keys.
- Never share API keys in screenshots.
- Never paste API keys into GitHub issues or PR descriptions.
- Rotate keys if they are exposed.
- Use provider dashboards to monitor usage.

## Local Storage

Late Meet stores configuration through Chrome extension storage. This keeps setup local to the browser profile and avoids a project-managed backend database.

## Provider Usage

When meeting intelligence is active, audio transcription and summarization requests may be sent to the configured providers. Review each provider's privacy and retention settings before using real meeting data.

## Troubleshooting

If API-powered features do not work:

- Confirm both keys are present.
- Confirm keys are valid in their provider dashboards.
- Check quota and billing status.
- Reload the extension after saving settings.
- Review the service worker logs for provider errors.
