import { taylorApprox } from "../src";

describe("Taylor Series Approximation", () => {
  it("Should approximate e^0.5 using Taylor Series expansion", () => {
    const func = (x: number) => Math.exp(x);
    const expandPoint = 0;
    const numTerms = 5;

    const expectedApprox = Math.exp(0.5);
    const computedApprox = taylorApprox(0.5, numTerms, func, expandPoint);

    expect(computedApprox).toBeCloseTo(expectedApprox);
  });
});