export const MAX_PARTICIPANT_NAME_LEN = 120;

const EXCLUDED_PARTICIPANT_LABELS = new Set([
  'Audio on',
  'Camera off',
  'Camera on',
  'Meeting host',
  'More options',
  'Mute',
  'Muted',
  'Pin',
  'Presentation',
  'Unmute',
  'Unpin',
  'You'
]);

export interface ParticipantNameCandidate {
  ariaLabel?: string | null;
  selfName?: string | null;
  text?: string | null;
}

function cleanText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

export function participantNameFromCandidate(candidate: ParticipantNameCandidate): string | null {
  const selfName = cleanText(candidate.selfName || '');
  const text = cleanText(candidate.text || '');
  const ariaLabel = cleanText(candidate.ariaLabel || '');

  const participantAriaName = ariaLabel.startsWith('Participant:')
    ? ariaLabel.replace(/^Participant:\s*/, '')
    : '';
  const rawName = selfName || participantAriaName || text;
  const name = cleanText(rawName);

  if (!name || name.length >= MAX_PARTICIPANT_NAME_LEN || name.includes('…')) {
    return null;
  }

  if (EXCLUDED_PARTICIPANT_LABELS.has(name)) {
    return null;
  }

  return name;
}

export function collectParticipantNames(candidates: ParticipantNameCandidate[]): string[] {
  const names = new Set<string>();

  for (const candidate of candidates) {
    const name = participantNameFromCandidate(candidate);
    if (name) names.add(name);
  }

  const participantNames = [...names].filter(name => name.length > 0);
  return participantNames.length > 0 ? participantNames : ['You'];
}
