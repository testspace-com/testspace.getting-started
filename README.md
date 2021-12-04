# Getting Started
This tutorial **repo** focuses on GitHub users that are first-time **Testspace users**. It provides a reference project to walk-through to get new users up to speed on how Testspace works.

Refer to the [Help Tutorial](https://help.testspace.com/tutorial/setup) for instructions.

## Tutorial
This repo includes (i) a *CI workflow file* used to `publish automated test results` and (ii) a set of *Test Specs* used for `manual execution`.

**IMPORTANT.** If you `fork` this repo, you are required to enable both `Actions` and `Issues` in the new repo.

## Outline
The Tutorial is organized into **three sections**:

- Publishing automated test results
- Manual basics such as *running*, *implementing*, *issues*, and *sessions*
- Advanced topics such as *Exploratory*, *Automated Fixturing*, *Variables and Includes*, etc.


## Content
The required repo files, used by the *Publishing* and *Manual basics* sections are:

```bash
root
  └─ .github/workflows
              └─ ci.yml
              └─ testspace.yml
  └─ specs
      └─ hello.md
      └─ syntax.examples.md
      └─ use.setup.fixture.md
      └─ vars.and.include.md
  ├─ .testspace.yml
  └── results.xml
```

Other repo files content (i.e. `Gemfile`, `handler.js`, etc.) are used for the advanced topics such as:
- [Automated Fixturing](https://help.testspace.com/tutorial/fixture)
- [Variables and Includes](http://help.testspace.com/tutorial/var-inc)
- [Using Jekyll](http://help.testspace.com/manual/desktop-preview) for local spec development and review
