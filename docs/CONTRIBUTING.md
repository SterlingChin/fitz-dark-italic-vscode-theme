# Contributing

## Contributing Issues

### Before Submitting an Issue

First, please do a search in [open issues](https://github.com/sheafitzek/fitz-dark-italic-vscode-theme/issues) to see if the issue or feature request has already been filed.

Also do a search in [closed issues](https://github.com/sheafitzek/fitz-dark-italic-vscode-theme/issues?q=is%3Aissue+is%3Aclosed) to see if the issue or feature request has already been implemented.

In case of related issue, make a link to the related issue to help add more information on the issue itself.

If you find your issue already exists, make relevant comments and add your [reaction](https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments). Use a reaction in place of a "+1" comment.

👍 - upvote

👎 - downvote

If you cannot find an existing issue that describes your bug or feature, submit an issue using the guidelines below.

### Writing Good Bug Reports and Feature Requests

File a single issue per problem and feature request.

- Do not enumerate multiple bugs or feature requests in the same issue.
- Do not add your issue as a comment to an existing issue unless it's for the identical input. Many issues look similar, but have different causes.

The more information you can provide, the more likely someone will be successful reproducing the issue and finding a fix.

Please use the template in [ISSUE_TEMPLATE.md](./ISSUE_TEMPLATE.md) to create an issue

Don't feel bad if we can't reproduce the issue and ask for more information!

## Contributing Pull Requests

After you have filed an issue and an agreement about how to proceed has been established, you may be asked to submit a pull request.

### Set Up Your Local Environment

Clone the repo to your machine:

```sh
git clone https://github.com/sheafitzek/fitz-dark-italic-vscode-theme.git
```

Install dependencies (if applicable):

```sh
npm install
```

### Make Fixes

Create a feature branch:

```sh
git checkout -b <type>/<description>
```

An example of `<type>/<description>` would be `bugfix/add-variable-token-color`.

Make edits to the branch.

Stage the changes:

```sh
git add .
```

Commit your changes with a short, descriptive message (keep it present tense...'add' instead of 'added')

```sh
git commit -m "add color to variable token"
```

### Push Changes to Origin

Push the feature branch up to the origin repo:

```sh
git push -u origin bugfix/add-variable-token-color
```

### Create a Pull Request

Go to https://github.com/sheafitzek/fitz-dark-italic-vscode-theme in your web browser. Push the 'new pull request' button, follow the instructions on screen and use the template in [PULL_REQUEST_TEMPLATE.md](./PULL_REQUEST_TEMPLATE.md) to create a pull request on the feature branch you just pushed up.

Either I or another contributer will have to review the changes. If there are concerns or changes that need to be made, the pull request section can be used as a 'mini slack' to have a conversation about the proposed changes & fixes. Once all concerns are aired & fixed, the branch can be merged into master.

### Reset Your Local Environment

#### Delete the Feature Branch

Once your pull request has been merged, you can delete the feature branch:

```shell
git checkout master
git branch -d bugfix/add-variable-token-color
```

#### Sync Local Master Branch with Remote Master Branch

```shell
git checkout master
git fetch origin
git reset --hard origin/master
```

### Repeat

Now start the process over with a new feature or fix

## Attribution

As we don't have an automated way to do this yet, if you would like attribution for your contribution, please add your relevant information to [CONTRIBUTORS.md](./CONTRIBUTORS.md) and submit it as part of your pull request.
