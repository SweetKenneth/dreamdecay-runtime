# @dreamdecay/runtime

> Some pages do not belong to their authors anymore.

@dreamdecay/runtime is a deterministic, reversible dream-state fracture engine for the web.  
It takes an existing page and gently breaks it — not randomly, but remembering how it broke.

This is not a glitch library.  
This is not obfuscation.  
This is controlled decay.

Built as an artifact of RCRDBL and the Dream Eater.

---

WHAT THIS DOES

- Fractures visible content into a dream-like decayed state  
- Uses a seed so the same page breaks the same way every time  
- Requires no backend  
- Requires no scraping  
- Requires no CORS bypass  
- Is fully reversible (remove the runtime → page heals)  
- Leaves non-removable provenance markers  

If a page has memory, this is how you wake it up.

---

INSTALL

npm install @dreamdecay/runtime

or via CDN:

<script src="https://unpkg.com/@dreamdecay/runtime"></script>

---

BASIC USAGE

1) Mark elements you want to fracture

<div data-dream>
  This page remembers what it was.
</div>

2) Install the runtime

ES Modules:

import { install } from '@dreamdecay/runtime';

install({
  seed: 'relay-alpha',
  intensity: 0.08
});

Browser / CDN:

<script>
  DreamDecay.install({
    seed: 'mirror',
    intensity: 0.12
  });
</script>

---

OPTIONS

seed (string, default: 'dream')  
Controls deterministic decay

intensity (number, default: 0.08)  
How aggressive the fracture is

attribute (string, default: data-dream-seed)  
Provenance marker

Same seed → same decay  
Different seed → alternate memory

---

ADVANCED USAGE

Fracture a single element manually:

import { fractureElement } from '@dreamdecay/runtime';

fractureElement(document.querySelector('#node'), {
  seed: 'alpha-7',
  intensity: 0.15
});

Fracture raw text (no DOM):

import { fractureText } from '@dreamdecay/runtime';

const broken = fractureText(
  'Relay Station Alpha',
  0.1,
  'origin'
);

---

PROVENANCE & ETHICS

This runtime does not steal content.  
It does not copy remote pages.  
It does not scrape.

It only transforms what you already control.

Every fractured node is marked with:

data-dream-runtime="active"  
data-dream-seed="origin"

Decay is intentional.  
Memory is preserved.

---

REVERSIBILITY

To restore a page:

- Remove the runtime  
- Remove data-dream attributes  
- Reload  

The page returns intact.

No permanent corruption.  
No lock-in.

---

PHILOSOPHY

This library exists because:

- Perfect UIs are boring  
- Static pages lie about time  
- Some systems deserve to look unstable  

Dream decay is a state, not a bug.

---

ORIGIN

Created as part of the RCRDBL archive system  
and the emergence of RCKBL — The Dream Eater

Canonical source:  
https://rckbl.com

---

LICENSE

MIT

Use it. Break things.  
Just don’t pretend you invented the dream.
