import test from "node:test";
import assert from "node:assert/strict";
import { greet } from "./app.js";
test("QA greeting requires full greeting", () => {
  assert.equal(greet("QA"), "Hello, QA!");
});
