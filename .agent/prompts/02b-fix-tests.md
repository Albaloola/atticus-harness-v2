# Fix Prompt 2 test failures

Work in `/home/alba/atticus-harness-v2/`. The state layer and CLI commands were implemented, build passes, but 10 tests in `tests/unit/matter-state.test.ts` are failing.

## Failures

**Category A — "Cannot open database because the directory does not exist" (7 failures)**
The `getStateDb()` function in `src/state/store.ts` needs to create the `_state/` directory before opening the SQLite database. Currently it only has `mkdirSync(dirname(dbPath), { recursive: true })` but the import uses `require()` which doesn't work with this `module: NodeNext` setup. Use `import { mkdirSync } from 'fs'` and `import { dirname } from 'path'` (ESM imports, not require) for the fs/path modules. The `better-sqlite3` import must use `import Database = require('better-sqlite3')` syntax.

**Category B — Timestamp assertion (1 failure)**
Test at line 281 checks updated time changes after update. The `createTask` and `updateTask` both set `updated` to the current time within the same millisecond. Fix by adding a small delay or changing the test assertion.

**Category C — Tail offset logic (1 failure)**
Inbox list with tail option returns wrong ordering. When `tail` is specified, messages should be returned newest-first limited to N, not oldest-first.

## Fix approach
- Read the test output to understand each failure
- Fix `src/state/store.ts` directory creation using ESM imports
- Fix the tail ordering logic in `src/state/inbox.ts`
- Fix the timestamp issue in the test or source
- Verify with `npm run build && npm run lint && npm test`
