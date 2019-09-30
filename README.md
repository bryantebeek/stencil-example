# Stencil Example for Paul

## Unit Tests

- Integrated unit tests for my-component
  - We've added a second case to valdiate that the `text` property is actually mandatory
    - Using `@Watch` did not work as it only starts watching after the initial load
  - We've added test coverage with `--coverage` in `package.json` at the `test` script
    - It's a flag for Jest, but it uses Istanbul internally (https://istanbul.js.org/)
    - You can run it with `npm run test` and then open the HTML file at `coverage/lcov-report/index.html`
  - We've looked at how to handle async methods in unit tests
    - https://jestjs.io/docs/en/tutorial-async
  - We've shortly discussed mocking of external functions and how / when to us it
    - https://stenciljs.com/docs/mocking
