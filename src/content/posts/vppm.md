---
title: "Frontend Web Develop Note 1"
published: 2024-07-19
description: ""
image: "/images/posts/vppm-18ddbae1.webp"
tags: ["Git"]
category: "Git"
draft: false
---
# Frontend Web Develop Note 1

## Intro

I'm thrilled to share that I'm currently involved in a web development project for a club at my university. To be precise, it's more of an app development project, but our main task is to create a demo. This demo will serve as a showcase for the next round of funding. As students, this is a rare opportunity to experience a real-world working scenario.

Our tech stack for this project is quite exciting. We’re using TypeScript and React for the front end, paired with Tailwind CSS for styling. On the back end, we're relying on Django and a traditional SQL server. The UI/UX design has already been completed by professional designers and reportedly cost a few thousand AUD. Their work is stunning and will greatly enhance our demo's appeal.

Since this is a collaborative project, we're leveraging GitHub for version control and collaboration. I'll be keeping a detailed journal of the technical aspects of our work. These are valuable experiences that are hard to come by in a typical university setting, especially since frontend frameworks aren't usually covered in depth in our courses.

Given the commercial nature of the project, I won’t be disclosing any sensitive details. However, I look forward to sharing the general learnings and insights I gain from this journey.

## Use Git in Real-World scenario

In the realm of software development, Git has become an indispensable tool, particularly for collaborative projects. While many students and budding developers learn the basics of Git in their coursework, the true power and utility of Git become apparent when working on real-world projects. In my recent experience developing a web app demo for my university club, I've had the opportunity to witness firsthand how Git facilitates seamless collaboration, efficient version control, and robust project management. This project has provided a practical understanding of Git’s capabilities, beyond what any classroom could offer. Here’s a closer look at how we leveraged Git in this real-world scenario.

### Git Stash

`git stash` allows developers to save their uncommitted changes temporarily and revert to a clean working directory. This is particularly useful in scenarios where an urgent bug fix is needed on a different branch, or when you want to pull in the latest updates from a remote branch without committing half-done work.

Imagine you’re in the middle of developing a new feature, and suddenly a critical bug is reported that needs immediate attention. With `git stash`, you can stash your current changes, switch to the bug-fix branch, make and commit the necessary fixes, and then return to your feature branch to reapply your stashed changes. This seamless workflow not only helps maintain focus and efficiency but also ensures that the codebase remains clean and stable.

Using `git stash` is straightforward:

- `git stash save "description"`: Stashes your changes with an optional description.
- `git stash list`: Lists all stashed changes.
- `git stash apply`: Applies the most recent stash.
- `git stash pop`: Applies the most recent stash and removes it from the stash list.
- `git stash drop`: Deletes a specified stash.

### Understanding the Difference Between Git Rebase and Git Merge

In Git, both `rebase` and `merge` are powerful commands used to integrate changes from one branch into another. However, they serve different purposes and have distinct effects on the project’s commit history. Understanding the difference between these two commands is crucial for maintaining a clean and efficient codebase.

#### Git Merge

`git merge` is used to combine the changes from one branch into another. When you merge, Git takes the contents of the source branch (often a feature branch) and integrates it with the target branch (often the main branch). The result is a new commit called a "merge commit" that has two parent commits, representing the history of both branches.

**Benefits of Git Merge:**

- **Preserves History:** Maintains a complete history of all commits from both branches, providing a clear and detailed record of how the codebase evolved.
- **Easy Conflict Resolution:** Since merge commits clearly show where the branches diverged, resolving conflicts can be more straightforward.

**Drawbacks of Git Merge:**

- **Commit History Clutter:** The history can become cluttered with many merge commits, especially in projects with numerous feature branches and frequent merges.

#### Git Rebase

`git rebase` is used to move or combine a sequence of commits to a new base commit. Instead of creating a merge commit, rebase rewrites the commit history by applying changes from one branch onto another, effectively creating a linear history.

**Benefits of Git Rebase:**

- **Clean History:** Results in a linear and clean commit history, which can make it easier to understand the project’s evolution and debug issues.
- **Better Bisecting:** Tools like `git bisect` work more efficiently with a linear history, making it easier to pinpoint the introduction of bugs.

**Drawbacks of Git Rebase:**

- **History Rewriting:** Rewriting history can be dangerous if not handled carefully, especially when working with shared branches, as it can lead to conflicts and lost commits.
- **Complex Conflict Resolution:** Conflicts during rebasing can be more complex to resolve since the process replays commits onto a new base.

#### Your project git history should like a thick truck

First of all, the golden rule of `git rebase` is DO NOT use it on the public branch.

Rebasing moves all commits from the master branch to the top of the feature branch. The problem is that this only happens in your own repository. All other developers are still using the original version of master. Since rebasing results in new commits, Git will consider your master branch history to be different from everyone else's.

At this point, the only way to synchronize the two master branches is to merge them together, but this will create an additional merge commit and two sets of commits containing the same changes (the original commits and the branch commits modified by the rebase). Needless to say, this can be a very confusing situation.

Properly using `git merge` for branches should be a good habits for beginners, but if there are too many branches stuck together, it would be a mess. Using `rebase` can keep linear, which means your work tree should like a thick truck, when some little feature changes, using `rebase`, otherwise, try to use branches and `merge` it to main.