# gpg-playground

A disposable public repository for testing GPG-signed commit workflows.

## Purpose

Some tooling needs to verify that a human who claims to control a GPG
key can push a signed commit to a specific branch of a real, publicly
readable git repository. Exercising that flow against a production repo
is awkward — you either have to own the repo, or you have to pollute
someone else's history with test commits.

This repo is the third option: an **empty, disposable, publicly readable
repo** that anyone can push signed challenge commits to, then run
through the full verification loop without touching real projects.

## What you can do here

- Push an empty, GPG-signed commit with a deterministic body.
- Target any branch — `main`, feature branches, throwaway branches.
- Test end-to-end flows that need a real HTTPS-reachable git remote.
- Reset, force-push, branch-delete, archive and unarchive without
  disturbing anyone.

## What you cannot do here

- Rely on history lasting. This repo is a **playground**. Branches may
  be deleted, history may be rewritten, the whole thing may be wiped
  without notice when the next test cycle lands.
- Use it for anything other than disposable test automation.

## Housekeeping

Force-push freely. Rebase freely. Delete branches when you're done.
If you push something sensitive by accident, rewrite history and force
push — there's nothing here worth preserving.
