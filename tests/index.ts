import { expect } from "chai";
import { describe, it } from "mocha";
import { personTitles } from "../src/index";

describe("personTitles", () => {
	it("should return an array of strings", () => {
		const types = [...new Set(personTitles.map(personTitle => typeof personTitle))];

		expect(types).to.be.deep.equal(["string"]);
	});

	it("should not contain duplicates", () => expect([...new Set(personTitles)]).to.be.deep.equal(personTitles));
});
