# palette-figma

A Figma plugin for working with the Palette design system.

## Local development

### 1. Clone this repo

### 2. Start webpack locally

```
yarn start
```

### 3. Add this plugin to Figma

- In a Figma document, choose `Plugins|New Plugin` from the menu.
- Under "Link existing plugin," choose "Click to choose a manifest.json file"
- Choose the manifest.json in the root of this project

### 4. Choose "Plugins|Run Last Plugin" to re-run the plugin after making changes

The code itself is transpiled by webpack, but you'll still need to re-start the plugin within Figma to see your changes.

## Things to watch out for

### You can run a plugin on a file that you have edit access to

So if you're looking at a design shared by someone, and you only have view access, you won't be able to run this or any other plugins. This seems likely a result of the fact that plugins have access to edit the current file.

To work around this limitation:

- Acquire write access to the file, or
- "Copy this file to your drafts" and inspect your own editable version

## Production build

```
yarn run build
```

## Resources

- [The Figma plugin docs](https://www.figma.com/plugin-docs)

## About Artsy

<a href="https://www.artsy.net/">
  <img align="left" src="https://avatars2.githubusercontent.com/u/546231?s=200&v=4"/>
</a>

This project is the work of engineers at [Artsy][footer_website], the world's
leading and largest online art marketplace and platform for discovering art.
One of our core [Engineering Principles][footer_principles] is being [Open
Source by Default][footer_open] which means we strive to share as many details
of our work as possible.

You can learn more about this work from [our blog][footer_blog] and by following
[@ArtsyOpenSource][footer_twitter] or explore our public data by checking out
[our API][footer_api]. If you're interested in a career at Artsy, read through
our [job postings][footer_jobs]!

[footer_website]: https://www.artsy.net/
[footer_principles]: culture/engineering-principles.md
[footer_open]: culture/engineering-principles.md#open-source-by-default
[footer_blog]: https://artsy.github.io/
[footer_twitter]: https://twitter.com/ArtsyOpenSource
[footer_api]: https://developers.artsy.net/
[footer_jobs]: https://www.artsy.net/jobs
