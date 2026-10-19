import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { business, businessSchema } from "./business";

const expect = (actual: unknown) => ({
  toBe: (expected: unknown) => assert.equal(actual, expected),
});

describe("official business information", () => {
  test("establishment is 2019, separate from legal registration", () => {
    expect(business.established).toBe(2019);
    expect(businessSchema.foundingDate).toBe("2019");
  });
  test("uses the exact legal entity", () => {
    expect(business.legalName).toBe("K2026684900 (South Africa) (Pty) Ltd");
  });
  test("uses the official registration number", () => {
    expect(business.registrationNumber).toBe("2026/684900/07");
  });
  test("telephone links dial the official business number", () => {
    expect(business.phoneHref).toBe("tel:+27820569656");
    expect(business.phone.replace(/\s/g, "")).toBe(business.phoneHref.slice(4));
  });
  test("uses the primary public email", () => {
    expect(business.email).toBe("hello@megayieldfarms.co.za");
  });
  test("retains the additional contact email", () => {
    expect(business.additionalEmail).toBe("karabomolamu3@gmail.com");
  });
  test("uses the official operating area", () => {
    expect(business.operatingArea).toBe("Winterveldt, Pretoria, Gauteng, South Africa");
  });
  test("uses the official business website", () => {
    expect(business.website).toBe("https://www.megayieldfarms.co.za");
  });
});