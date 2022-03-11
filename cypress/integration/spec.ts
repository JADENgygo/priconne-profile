/// <reference types="cypress" />

describe("ui test", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("ui test", () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    const d = date.getFullYear() + "年" + (date.getMonth() + 1) + "月";

    // マイプロフカード
    cy.get("#mode0").check().should("be.checked");
    cy.get("#playerName").clear().type("test").should("have.value", "test");
    cy.get("#playerLevel").clear().type("1").should("have.value", "1");
    cy.get("#strength").clear().type("1").should("have.value", "1");
    cy.get("#playerId").clear().type("1").should("have.value", "1");
    cy.get("#score").clear().type("1").should("have.value", "1");
    cy.get("#scoreDate").select(d).should("have.value", d);
    cy.get("#battleArena").clear().type("1").should("have.value", "1");
    cy.get("#princessArena").clear().type("1").should("have.value", "1");
    cy.get("#runa").clear().type("1").should("have.value", "1");
    cy.get("#runaEx").clear().type("1").should("have.value", "1");
    cy.get("#comment").clear().type("1").should("have.value", "1");

    // クランプロフカード
    cy.get("#mode1").check().should("be.checked");
    cy.get("#clanName").clear().type("test").should("have.value", "test");
    cy.get("#averageLevel").clear().type("1").should("have.value", "1");
    cy.get("#memberCount").clear().type("1").should("have.value", "1");
    cy.get("#policy").clear().type("test").should("have.value", "test");
    cy.get("#condition0").check().should("be.checked");
    cy.get("#guideline").clear().type("test").should("have.value", "test");
    cy.get("#ranking").clear().type("1").should("have.value", "1");
    cy.get("#rankingDate").select(d).should("have.value", d);

    cy.get("#position2").check().should("be.checked");

    // 詳細設定
    cy.get("#detailSettings").click();
    cy.get("#clanNameColor")
      .invoke("val", "#ff0000")
      .trigger("input")
      .should("have.value", "#ff0000");
    cy.get("#clanNameOutlineVisible").uncheck().check().should("be.checked");
    cy.get("#clanNameOutlineColor")
      .invoke("val", "#ff0000")
      .trigger("input")
      .should("have.value", "#ff0000");
    cy.get("#clanNameSettingResetButton").click();
    cy.get("#clanNameColor").should("have.value", "#000000");
    cy.get("#clanNameOutlineVisible").should("be.checked");
    cy.get("#clanNameOutlineColor").should("have.value", "#ffffff");

    cy.get("#labelColor")
      .invoke("val", "#ff0000")
      .trigger("input")
      .should("have.value", "#ff0000");
    cy.get("#labelBackgroundVisible").uncheck().check().should("be.checked");
    cy.get("#labelBackgroundColor")
      .invoke("val", "#ff0000")
      .trigger("input")
      .should("have.value", "#ff0000");
    cy.get("#labelSettingResetButton").click();
    cy.get("#labelColor").should("have.value", "#ffffff");
    cy.get("#labelBackgroundVisible").should("be.checked");
    cy.get("#labelBackgroundColor").should("have.value", "#000000");

    cy.get("#inputColor")
      .invoke("val", "#ff0000")
      .trigger("input")
      .should("have.value", "#ff0000");
    cy.get("#inputSettingResetButton").click();
    cy.get("#inputColor").should("have.value", "#000000");

    cy.get("#paneBackgroundColor")
      .invoke("val", "#ff0000")
      .trigger("input")
      .should("have.value", "#ff0000");
    cy.get("#paneTransparency").select("0").should("have.value", "0");
    cy.get("#paneSettingResetButton").click();
    cy.get("#paneBackgroundColor").should("have.value", "#ffffff");
    cy.get("#paneTransparency").should("have.value", "0.6");
  });
});
