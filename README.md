# DataStructuresLibJs
This repository contains a library of common data structures implemented in JavaScript. Each file located in *./Library/* will be referred to as a **module**.

**NOTE:** *This repository is currently WIP and may not adhere to the requirements set in this readme.*


## The Goal
The goal is to have a comprehensive, modular library of data structures of which can be plugged into other projects. To that end, each module in the library must meet the following requirements:
- Must be dependency-free.
- Must include implementations (native or otherwise) for the following operations:
	- INSERT
	- DELETE
	- GET
	- SEARCH
	- SORT
- Where possible, implementations for the following operations must be included:
	- BALANCE
- All functionality must support all JavaScript data types.


## Test Coverage
In order to ensure stability and confidence in these implementations, extensive unit testing is required.
This project utilises [Jest](https://jestjs.io/).

This is what needs to be included in test coverage:
 - Public methods within modules.
 - Public properties within modules.

Where possible, all of the below data types must be tested and handled elegantly:
- Null
- Undefined
- Number 
- NaN
- Infinite
- BigInt
- String
- Boolean
- Object
- Array
- Function

Any uncovered bugs must have unit tests created for them.


## Documentation
JSDoc notation is used extensively within this project. 
All public methods/properties within modules must be documented this way.
All public methods within Helper files must also be documented.

Additionally, *./Library/README.md* contains further documentation on the algorithms used in each module.


## Benchmarking
Benchmarking is used while developing to compare alternative implementations for algorithms.
Vanilla JS features may also be benchmarked for reference and utility during development.
This project utilises [nanobench](https://www.npmjs.com/package/nanobench).

All INSERT, DELETE, GET, SEARCH, SORT and BALANCE algorithms must be benchmarked with these standards:
	- Data sizes of both 1e1 (10) and 1e4 (10,000) elements.
	- 100,000 iterations minimum.

You can find an archive of benchmark results in *./Library.Bench/archive*