### Commands

##### [How to simplify the graph produced by git log --graph](https://gist.github.com/datagrok/4221767)

```bash
The graph (git log --graph [--oneline] [--all])
```

##### [How to search a Git repository by commit message?](http://stackoverflow.com/questions/7124914/how-to-search-a-git-repository-by-commit-message)

```bash
git log --all --grep='Build 0051'
```

##### [How to delete a Git branch both locally and remotely?](http://stackoverflow.com/questions/2003505/how-to-delete-a-git-branch-both-locally-and-remotely)

```bash
git branch -d <branch_name>
git push <remote_name> --delete <branch_name>
```

##### Review / edit the last commit

```bash
git commit --amend
```

##### [Set up git to pull and push all branches](http://stackoverflow.com/questions/1914579/set-up-git-to-pull-and-push-all-branches)

```bash
git push --all <remote>
```

##### [What's the simplest way to get a list of conflicted files?](http://stackoverflow.com/questions/3065650/whats-the-simplest-way-to-get-a-list-of-conflicted-files)

```bash
git diff --name-only --diff-filter=U
```

##### [How to undo last commit(s) in Git?](http://stackoverflow.com/questions/927358/how-to-undo-last-commits-in-git)

```bash
git reset --hard HEAD~1
```

##### [How can I undo git reset --hard HEAD~1?](http://stackoverflow.com/questions/5473/how-can-i-undo-git-reset-hard-head1)

```bash
git reset --hard <sha1 of desired commit>
```

##### [How can I merge two commits into one?](http://stackoverflow.com/questions/2563632/how-can-i-merge-two-commits-into-one)

```bash
git reset --soft "HEAD^"
git commit --amend
```

##### [How to checkout master to all submodules (sub repositories) of project ?](http://stackoverflow.com/questions/1030169/easy-way-pull-latest-of-all-submodules)

```bash
# For git 1.8.2 or above the option --remote was added to support updating to latest tips of remote branches:
git submodule update --recursive --remote 

# For older, git 1.6.1 or above you can use something similar to (modified to suit):
git submodule foreach git pull origin master
```

##### [Is it possible to completely empty a remote Git repository?](https://stackoverflow.com/questions/4922104/is-it-possible-to-completely-empty-a-remote-git-repository)

```bash
touch README.md
git init
git  commit -m "I am removing all previous commits"
git push <remote_name> <branch_name> -f
```

### Resources

##### First steps:

- [Introduction to Git with Scott Chacon of GitHub](https://www.youtube.com/watch?v=ZDR433b0HJY&t=2922s)
- [http://learngitbranching.js.org/](http://learngitbranching.js.org/)
- [Mastering Git](https://www.youtube.com/playlist?list=PL4KQBOUw6E7uJFgKP3gBAKooqY0a9a6Np)
- [Got 15 minutes and want to learn Git?](https://try.github.io/levels/1/challenges/1)
- [Git Cheatsheet](http://ndpsoftware.com/git-cheatsheet/previous/git-cheatsheet.html)
- [Escape the git mess](http://justinhileman.info/article/git-pretty/git-pretty.png)
- [Are git forks actually git clones?](http://stackoverflow.com/questions/6286571/are-git-forks-actually-git-clones)
- [Git Tips & Tricks](https://about.gitlab.com/2016/12/08/git-tips-and-tricks)

##### Committing Rules and Responsibilities
- [Processing JIRA Software issues with Smart Commit messages](https://confluence.atlassian.com/bitbucket/processing-jira-software-issues-with-smart-commit-messages-298979931.html#id-_smart_commits_commands1-transition)
- [Mozilla: Committing rules and responsibilities](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Committing_Rules_and_Responsibilities)

##### Trunk Development

- [Trunk base development](https://trunkbaseddevelopment.com/)
- [GOTO 2017 • Feature Branches and Toggles in a Post-GitHub World • Sam Newman](https://youtu.be/lqRQYEHAtpk)