# @faykah/person-titles-en

An English dataset of person titles.

## Summary

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Examples](#examples)

## About

[Faykah](https://github.com/faykah/core) is a Node.js library that help create generators for various data.

This library contains a data set of English person titles (like Mr, Mrs, ...) suited for mocking and testing emails.

## Features

- Provides a list of 5 person titles
- Provides a browser version
- Provides its own Typescript type definition

## Installation

Using NPM:

```bash
npm install --save-dev @faykah/person-titles-en
```

Using Yarn:

```bash
yarn add --dev @faykah/person-titles-en
```

## Examples

- [1. Create an array generator](#1-create-an-array-generator)
- [2. Standalone usage](#2-standalone-usage)

### 1. Create an array generator

In this example, we will create a person title generator.

ES6

```ts
import { createGenerator } from "@faykah/core";
import { personTitles } from "@faykah/person-titles-en";

const generatePersonTitle = createGenerator(personTitles);

generatePersonTitle(); // "Mrs"
generatePersonTitle(); // "Dr"
generatePersonTitle(); // "Mr"
```

CJS

```ts
const { createGenerator } = require("@faykah/core");
const { personTitles } = require("@faykah/person-titles-en");

const generatePersonTitle = createGenerator(personTitles);

generatePersonTitle(); // "Mrs"
generatePersonTitle(); // "Dr"
generatePersonTitle(); // "Mr"
```

Browser

```html
<body>
	<script type="text/javascript" src="https://unpkg.com/@faykah/core@0.1.0/lib/index.browser.min.js" defer></script>
	<script type="text/javascript" src="https://unpkg.com/@faykah/person-titles-en@0.1.0/lib/index.browser.min.js" defer></script>

	<script type="text/javascript" defer>
		const generateLastName = Faykah.createGenerator(Faykah.personTitles);

		generatePersonTitle(); // "Mrs"
		generatePersonTitle(); // "Dr"
		generatePersonTitle(); // "Mr"
	</script>
</body>
```

### 2. Standalone usage

In this example, we will loop through all the person titles.

ES6

```ts
import { personTitles } from "@faykah/person-titles-en";

for (const personTitle of personTitles) {
	console.log(personTitle);
}
```

CJS

```ts
const { personTitles } = require("@faykah/person-titles-en");

for (const personTitle of personTitles) {
	console.log(personTitle);
}
```

Browser

```html
<body>
	<script type="text/javascript" src="https://unpkg.com/@faykah/core@0.1.0/lib/index.browser.min.js" defer></script>
	<script type="text/javascript" src="https://unpkg.com/@faykah/person-titles-en@0.1.0/lib/index.browser.min.js" defer></script>

	<script type="text/javascript" defer>
		for (const personTitle of Faykah.personTitles) {
			console.log(personTitle);
		}
	</script>
</body>
```
