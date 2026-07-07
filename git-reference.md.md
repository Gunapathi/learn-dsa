# Git Reference

## Token setup — token hidden, not saved to history
```bash
read -rsp 'Paste PAT: ' GH_TOKEN; export GH_TOKEN; echo
```

> Verify token is loaded before running any command (empty = bad hostname error):
```bash
echo $GH_TOKEN
```

## Clear stale remote cache (deleted repos/branches on GitHub still cached locally)

```bash
# Remove stale remote-tracking refs for origin
git remote prune origin

# Or fetch and prune in one step
git -c credential.helper= fetch --prune "https://$GH_TOKEN@github.com/<owner>/<repo>.git"

# Check what remote refs are cached locally
git branch -r
```

---

## Clear token from memory and history
```bash
unset GH_TOKEN
history -d $(history 1 | awk '{print $1}')   # delete last history entry
history -c && history -r                     # or: wipe full session history then reload saved
history -c && history -w                     # -w overwrites the file with the now-empty in-memory list.
```

---

## Connect local working app to a new GitHub repo (has only license)

> Use this when GitHub repo was created with just a license file and your local already has code + branches.

```bash
# 1. Inside your local project folder — link to remote
git remote add origin "https://$GH_TOKEN@github.com/<owner>/<repo>.git"

# 2. Set token into the remote URL so fetch authenticates
git remote set-url origin "https://$GH_TOKEN@github.com/<owner>/<repo>.git"

# 3. Fetch via named remote (creates origin/* tracking refs)
git fetch origin

# 4. Check what branch name remote uses (look for origin/main or origin/master)
git branch -r

# 5. Switch to your default branch (use whichever name you see from step 4)
git checkout main        # or: git checkout master

# 6. Merge the license into local (unrelated histories flag is required)
git merge origin/main --allow-unrelated-histories
# OR if remote uses master:
git merge origin/master --allow-unrelated-histories

# 7. Force publish all local branches — local is source of truth here
gpublish-all-force
```

> After step 6 all your branches are live on GitHub with upstream tracking set.

---

## Connect local working app to a completely empty GitHub repo

> Use this when GitHub repo is totally empty — no license, no README, nothing.

```bash
# 1. Inside your local project folder — link to remote
git remote add origin "https://$GH_TOKEN@github.com/<owner>/<repo>.git"

# 2. Publish all local branches directly (no fetch or merge needed)
gpublish-all-force
```

> Done. No merge step needed since there is nothing on remote to conflict with.

---

## Commands

```bash
# Clone repo
git clone "https://$GH_TOKEN@github.com/<owner>/<repo>.git"

# Link an existing local folder to remote (run inside the local folder)
git remote add origin "https://$GH_TOKEN@github.com/<owner>/<repo>.git"

# Update remote URL if origin already exists
git remote set-url origin "https://$GH_TOKEN@github.com/<owner>/<repo>.git"

# Fetch all branches from remote (creates origin/* tracking refs)
git fetch origin
```

---

## Functions — add to ~/.bashrc

```bash
# checkout main, add changes to main from master, commit and ready for push
ginit() {
  local host url
  git checkout -B main
  git add -A
  git diff --cached --quiet || git commit -m "initial commit"
  host=$(git remote get-url origin | sed 's|https://[^@]*@||; s|https://||')
  url="https://$GH_TOKEN@$host"
  git -c credential.helper= push --force "$url" HEAD:main
}


# Push current branch
gpush() {
  local host url
  host=$(git remote get-url origin | sed 's|https://[^@]*@||; s|https://||')
  url="https://$GH_TOKEN@$host"
  git -c credential.helper= push "$url" HEAD "$@"
}

# Pull current branch
gpull() {
  local host url branch
  host=$(git remote get-url origin | sed 's|https://[^@]*@||; s|https://||')
  url="https://$GH_TOKEN@$host"
  branch=$(git symbolic-ref --short HEAD)
  git -c credential.helper= pull "$url" "$branch" "$@"
}

# Publish a new local branch to remote
gpublish() {
  local host url branch
  host=$(git remote get-url origin | sed 's|https://[^@]*@||; s|https://||')
  url="https://$GH_TOKEN@$host"
  branch=$(git symbolic-ref --short HEAD)
  git -c credential.helper= push --set-upstream "$url" "$branch" "$@"
}

# Push ALL local branches
gpush-all() {
  local host url
  host=$(git remote get-url origin | sed 's|https://[^@]*@||; s|https://||')
  url="https://$GH_TOKEN@$host"
  git -c credential.helper= push "$url" --all "$@"
}

# Publish ALL local branches (sets upstream tracking for each)
# Prunes stale remote refs first, skips any branch that fails
gpublish-all() {
  local host url
  host=$(git remote get-url origin | sed 's|https://[^@]*@||; s|https://||')
  url="https://$GH_TOKEN@$host"
  git -c credential.helper= fetch --prune "$url" 2>/dev/null || true
  git branch --format '%(refname:short)' | while read -r branch; do
    git -c credential.helper= push --set-upstream "$url" "$branch" || echo "  skipped: $branch"
  done
}

# Force publish ALL local branches — use when local is source of truth (initial setup)
gpublish-all-force() {
  local host url
  host=$(git remote get-url origin | sed 's|https://[^@]*@||; s|https://||')
  url="https://$GH_TOKEN@$host"
  git remote set-url origin "$url"
  git fetch origin --prune 2>/dev/null || true
  git branch --format '%(refname:short)' | while read -r branch; do
    git push --force --set-upstream origin "$branch" || echo "  skipped: $branch"
  done
}
```