# Contributing

## Choose the right repository first

Submit bugs, features, and documentation changes to the repository that owns the capability. Change this Pages site only for cross-project catalogs, navigation, or organization-level guidance.

## Suggested workflow

1. Read the target README, CONTRIBUTING, AGENTS.md, and license.
2. Add a test or reproducible case before changing behavior.
3. Create a focused branch and keep the change to one concern.
4. Run the repository’s own formatting, static analysis, tests, and build gates.
5. Describe motivation, boundaries, verification, and compatibility impact in the PR.

```bash
git clone https://github.com/full-stack-skills/<repository>.git
cd <repository>
git switch -c feat/<short-topic>
```

## Common gates

This organization spans multiple stacks; run the commands documented by the target repository README and CI.

## Update this site

```bash
cd full-stack-skills.github.io
npm install
npm run docs:build
```

Do not copy versions or counts into the site unless they are supported by source, manifests, releases, or the current repository state.
