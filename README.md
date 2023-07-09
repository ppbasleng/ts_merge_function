# ts_merge_function
Simple Typescript Project

## Setup

1. Clone the repository
2. Install the dependencies:

## Usage

1. Import the merge function

```
import { merge } from './index';
```
2. Call the merge function with two sorted arrays

```
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const merged = merge(arr1, arr2);
```

you can try to run example.ts by doing

```
npx ts-node example.ts
```

## Running The Test

```
npm test
```