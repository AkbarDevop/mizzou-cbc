# Two-Agent Session Coordination (2026-02-27)

Repo: https://github.com/AkbarDevop/mizzou-cbc

## Branches and worktrees
- Codex branch: `session/codex-2026-02-27`
- Codex path: `/Users/akbar/.superset/worktrees/mizzou-cbc/codex`
- Claude branch: `session/claude-2026-02-27`
- Claude path: `/Users/akbar/.superset/worktrees/mizzou-cbc/claude`

## Ownership split for this session
- Codex owns:
  - tests (`landing/tests.py`)
  - deployment hardening (`mizzou_cbc/settings.py`)
  - README/developer docs
- Claude owns:
  - content and links (`landing/views.py`)
  - template wiring (`landing/templates/landing/index.html`)
  - visual content assets/copy

## Conflict rules
- Do not edit files owned by the other agent.
- If a cross-cutting change is needed, coordinate first and then cherry-pick one commit.
- Keep commits small and scoped.

## Integration flow
1. Each agent commits to its own branch.
2. Push branch: `git push -u origin <branch>`
3. Open PR into `main`.
4. Merge one PR, then rebase the second branch on latest `origin/main`.
5. Resolve conflicts only in shared files.
6. Run final smoke test on `main`.

## Quick commands
- Fetch latest: `git fetch origin`
- Rebase current branch: `git rebase origin/main`
- List worktrees: `git worktree list`
