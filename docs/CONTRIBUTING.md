# Contributing

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. You'll also find information
on making a pull request.

## Overview

[Prerequisites](#prerequisites)  
[Installing](#installing)  
[Coding Guidelines](#coding-guidelines)  
[Making Changes](#making-changes)  
[Testing](#testing)  
[Documentation](#documentation)  
[Create Your Development Branch](#create-your-development-branch)  
[Making a Pull Request](#making-a-pull-request)  

## Prerequisites

You'll need to have Node set up on your local machine.

- [Install Node](https://nodejs.org/en/download/)

## Installing

Follow the steps below to get your development environment set up.

1. Open the terminal and and run the following:

    `git clone https://github.com/The-Diamondback-Lab/dbktvcms.git`

2. Run `npm install` to install the project dependencies.

## Coding Guidelines

### JavaScript Style

- **2 spaces** – for indentation
- **No unused variables** – this one catches tons of bugs!
- **No semicolons** – It's fine. Really!
- Never start a line with `(` , `[` , or `````
  - This is the only gotcha with omitting semicolons – automatically checked for you!
- **Space after keywords** `if (condition) { ... }`
- Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.

For a detailed overview of our JavaScript style, visit [**StandardJS**][1].
You'll find not only an overview of Standard Style, but a list of editor plugins
as well.

To configure the linting options for this project, make changes to
`.eslintrc.json` and `.eslintignore` in the project root.

Reference: [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)

### Babel

To configure the Babel options for this project, make changes to
`babel.config.js` in the project root.

Reference: [Configure Babel - babel.config.js](https://babeljs.io/docs/en/configuration#babelconfigjs)

## Create Your Development Branch

**Branch Naming Convention**
**`<your_initials>/`**, followed by: **`feature-`**, **`bug-`**, **`hotfix-`**, or **`release-`**.

For example:

```bash
  git checkout -b ld/feature-docs
  git commit -am "added documentation"
  git push
```

## Making Changes

This project uses [Netlify][2], as well as [Netlify CMS][3].

### Netlify

[Netlify][2] is an all-in-one cloud platform for static sites. With it, we can
deploy not only static sites, but serverless functions as well.

For instructions on configuring Netlify, please visit the [Netlify docs][4].

### Netlify CMS

DBKTV uses [Netlify CMS][3] for content management. Netlify CMS is a content
management platform for Git workflows. All TV data is stored in this repository,
as well as the source code for our serverless functions.

For instructions on updating CMS templates, and making other changes to the CMS,
please visit the following pages:

- [Configuration Options][5]
- [Collection Types][6]
- [Widgets][7]

### Directories and Files

**Attention: This section is under construction**

## Testing

**Running Tests**
When you're ready to test your changes, you have two options:

1. Run `npm test` in your project directory. This run your tests, as well as all
   the tests in the tests in the `tests` directory.
2. Run `jest <test_pattern> --detectOpenHandles`. This will run all tests with a
   name matching `test_pattern`. Example: `jest foo --detectOpenHandles`

**Local Testing**
Run `npm run serve` in the project directory. This will start the project in
mock production environment.

## Documentation

Following [JSDoc][8] standards, be sure to document any
functions, classes, and other code you write. It will be reviewed by a reviewer
during your code review, and your pull request will be denied if any code is
improperly documented.

## Creating a Pull Request

**Note: Before creating a pull request for your changes, make sure your build
passes all unit tests. If you need help, please create a test file and leave a
comment in the test body, making note of any issues in their respective files.
Make sure to label your pull request "help wanted."**

If you're ready to have your changes reviewed, make sure your code is well
documented and run `npm run lint` to check your code for syntax + styling errors.

### Submit for Review

- Use [**this template**][9]
- Label your pull request as `pull request` and `needs review`
- Prefix your pull request title with `PR  -`
- Assign the task to yourself and the appropriate reviewer

[1]: https://standardjs.com
[2]: https://docs.netlify.com
[3]: https://www.netlifycms.org/docs/intro/
[4]: https://docs.netlify.com
[5]: https://www.netlifycms.org/docs/configuration-options/
[6]: https://www.netlifycms.org/docs/collection-types/
[7]: https://www.netlifycms.org/docs/widgets/
[8]: https://jsdoc.app/
[9]: ./pull_request_template.md
