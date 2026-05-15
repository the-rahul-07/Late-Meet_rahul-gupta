import test from 'node:test';
import assert from 'node:assert/strict';

import { collectParticipantNames, participantNameFromCandidate } from './participantDetection.ts';

test('participant aria labels are converted into participant names', () => {
  assert.equal(
    participantNameFromCandidate({ ariaLabel: 'Participant: Ada Lovelace' }),
    'Ada Lovelace'
  );
  assert.equal(
    participantNameFromCandidate({
      ariaLabel: 'Participant: Ada Lovelace',
      text: 'Mute More options Pin'
    }),
    'Ada Lovelace'
  );
});

test('tile control aria labels are not treated as participant names', () => {
  assert.equal(participantNameFromCandidate({ ariaLabel: 'Mute' }), null);
  assert.equal(participantNameFromCandidate({ ariaLabel: 'More options' }), null);
  assert.equal(participantNameFromCandidate({ ariaLabel: 'Camera off' }), null);
  assert.equal(participantNameFromCandidate({ ariaLabel: 'Pin' }), null);
});

test('participant collection ignores duplicate and control candidates', () => {
  assert.deepEqual(
    collectParticipantNames([
      { ariaLabel: 'Participant: You' },
      { text: 'Grace Hopper' },
      { ariaLabel: 'Mute' },
      { ariaLabel: 'More options' },
      { ariaLabel: 'Participant: Grace Hopper' },
      { selfName: 'Katherine Johnson' }
    ]),
    ['Grace Hopper', 'Katherine Johnson']
  );
});

test('participant collection uses You only as a fallback', () => {
  assert.deepEqual(
    collectParticipantNames([{ selfName: 'Ada Lovelace' }]),
    ['Ada Lovelace']
  );
  assert.deepEqual(collectParticipantNames([]), ['You']);
});
