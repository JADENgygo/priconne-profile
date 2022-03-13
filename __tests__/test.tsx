import { render, screen } from "@testing-library/react";
import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import { ModeChanger } from "../components/mode-changer";
import {
  backgroundImageNames,
  BackgroundImages,
} from "../components/background-images";
import { MySettings } from "../components/my-settings";
import { ClanSettings } from "../components/clan-settings";
import { PositionChanger } from "../components/position-changer";
import { DetailSettings } from "../components/detail-settings";

test("ModeChanger component", () => {
  let state = { mode: "myProfileCard" as "myProfileCard" | "clanProfileCard" };
  const onChange = (event: React.ChangeEvent<any>) =>
    (state = { ...state, [event.target.name]: event.target.value });
  render(<ModeChanger state={state} onChange={onChange} />);
  const element = document.getElementById("mode1") as Element;
  ReactTestUtils.Simulate.change(element);
  expect(state.mode).toBe("clanProfileCard");
});

test("BackgroundImages component", () => {
  let state = { backgroundImageName: backgroundImageNames[1] };
  const onChange = (event: React.ChangeEvent<any>) =>
    (state = { ...state, [event.target.name]: event.target.value });
  render(<BackgroundImages state={state} onChange={onChange} />);
  const element = document.getElementById(backgroundImageNames[0]) as Element;
  ReactTestUtils.Simulate.change(element);
  expect(state.backgroundImageName).toBe(backgroundImageNames[0]);
});

test("MySettings component", () => {
  const now = new Date();
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1);
  let state = {
    playerName: "",
    playerLevel: 0,
    strength: 0,
    playerId: "",
    scoreDate: now.getFullYear() + "年" + (now.getMonth() + 1) + "月",
    score: 0,
    battleArena: 0,
    princessArena: 0,
    runa: 0,
    runaEx: 0,
    comment: "",
  };
  const onChange = (event: React.ChangeEvent<any>) =>
    (state = { ...state, [event.target.name]: event.target.value });
  render(<MySettings state={state} onChange={onChange} />);
  const playerName = document.getElementById("playerName") as HTMLInputElement;
  playerName.value = "test name";
  ReactTestUtils.Simulate.change(playerName as Element);
  const playerLevel = document.getElementById(
    "playerLevel",
  ) as HTMLInputElement;
  playerLevel.value = "1";
  ReactTestUtils.Simulate.change(playerLevel as Element);
  const strength = document.getElementById("strength") as HTMLInputElement;
  strength.value = "2";
  ReactTestUtils.Simulate.change(strength as Element);
  const playerId = document.getElementById("playerId") as HTMLInputElement;
  playerId.value = "3";
  ReactTestUtils.Simulate.change(playerId as Element);
  const scoreDate = document.getElementById("scoreDate") as HTMLSelectElement;
  scoreDate.value =
    lastMonth.getFullYear() + "年" + (lastMonth.getMonth() + 1) + "月";
  ReactTestUtils.Simulate.change(scoreDate as Element);
  const score = document.getElementById("score") as HTMLInputElement;
  score.value = "4";
  ReactTestUtils.Simulate.change(score as Element);
  const battleArena = document.getElementById(
    "battleArena",
  ) as HTMLInputElement;
  battleArena.value = "5";
  ReactTestUtils.Simulate.change(battleArena as Element);
  const princessArena = document.getElementById(
    "princessArena",
  ) as HTMLInputElement;
  princessArena.value = "6";
  ReactTestUtils.Simulate.change(princessArena as Element);
  const runa = document.getElementById("runa") as HTMLInputElement;
  runa.value = "7";
  ReactTestUtils.Simulate.change(runa as Element);
  const runaEx = document.getElementById("runaEx") as HTMLInputElement;
  runaEx.value = "8";
  ReactTestUtils.Simulate.change(runaEx as Element);
  const comment = document.getElementById("comment") as HTMLTextAreaElement;
  comment.value = "test comment";
  ReactTestUtils.Simulate.change(comment as Element);

  expect(state.playerName).toBe("test name");
  expect(state.playerLevel).toBe("1");
  expect(state.strength).toBe("2");
  expect(state.playerId).toBe("3");
  expect(state.scoreDate).toBe(
    lastMonth.getFullYear() + "年" + (lastMonth.getMonth() + 1) + "月",
  );
  expect(state.score).toBe("4");
  expect(state.battleArena).toBe("5");
  expect(state.princessArena).toBe("6");
  expect(state.runa).toBe("7");
  expect(state.runaEx).toBe("8");
  expect(state.comment).toBe("test comment");
});

test("ClanSettings component", () => {
  const now = new Date();
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1);
  let state = {
    clanName: "",
    averageLevel: 0,
    memberCount: 0,
    policy: "",
    condition: "誰でも加入",
    guideline: "",
    ranking: 0,
    rankingDate: now.getFullYear() + "年" + (now.getMonth() + 1) + "月",
  };
  const onChange = (event: React.ChangeEvent<any>) =>
    (state = { ...state, [event.target.name]: event.target.value });
  render(<ClanSettings state={state} onChange={onChange} />);
  const clanName = document.getElementById("clanName") as HTMLInputElement;
  clanName.value = "test name";
  ReactTestUtils.Simulate.change(clanName as Element);
  const averageLevel = document.getElementById(
    "averageLevel",
  ) as HTMLInputElement;
  averageLevel.value = "1";
  ReactTestUtils.Simulate.change(averageLevel as Element);
  const memberCount = document.getElementById(
    "memberCount",
  ) as HTMLInputElement;
  memberCount.value = "2";
  ReactTestUtils.Simulate.change(memberCount as Element);
  const policy = document.getElementById("policy") as HTMLInputElement;
  policy.value = "test policy";
  ReactTestUtils.Simulate.change(policy as Element);
  const condition = document.getElementById("condition1") as HTMLSelectElement;
  condition.value = "承認あり";
  ReactTestUtils.Simulate.change(condition as Element);
  const guideline = document.getElementById("guideline") as HTMLInputElement;
  guideline.value = "test guideline";
  ReactTestUtils.Simulate.change(guideline as Element);
  const ranking = document.getElementById("ranking") as HTMLInputElement;
  ranking.value = "3";
  ReactTestUtils.Simulate.change(ranking as Element);
  const rankingDate = document.getElementById(
    "rankingDate",
  ) as HTMLSelectElement;
  rankingDate.value =
    lastMonth.getFullYear() + "年" + (lastMonth.getMonth() + 1) + "月";
  ReactTestUtils.Simulate.change(rankingDate as Element);

  expect(state.clanName).toBe("test name");
  expect(state.averageLevel).toBe("1");
  expect(state.memberCount).toBe("2");
  expect(state.policy).toBe("test policy");
  expect(state.condition).toBe("承認あり");
  expect(state.guideline).toBe("test guideline");
  expect(state.ranking).toBe("3");
  expect(state.rankingDate).toBe(
    lastMonth.getFullYear() + "年" + (lastMonth.getMonth() + 1) + "月",
  );
});

test("PositionChanger component", () => {
  let state = { position: "左" };
  const onChange = (event: React.ChangeEvent<any>) =>
    (state = { ...state, [event.target.name]: event.target.value });
  render(<PositionChanger state={state} onChange={onChange} />);
  const position = document.getElementById("position2") as HTMLInputElement;
  position.value = "右";
  ReactTestUtils.Simulate.change(position as Element);
  expect(state.position).toBe("右");
});

test("DetailSettings component", () => {
  let state = {
    mode: "clanProfileCard" as "myProfileCard" | "clanProfileCard",
    clanNameOutlineVisible: false,
    clanNameOutlineColor: "#000000",
    clanNameColor: "#000000",
    labelColor: "#000000",
    labelBackgroundVisible: false,
    labelBackgroundColor: "#000000",
    inputColor: "#000000",
    paneBackgroundColor: "#000000",
    paneTransparency: "0.0",
  };
  const onChange = (event: React.ChangeEvent<any>) => {
    if (event.target.type === "checkbox") {
      state = { ...state, [event.target.name]: event.target.checked };
      return;
    }
    state = { ...state, [event.target.name]: event.target.value };
  };
  const resetClanNameSetting = () => {};
  const resetLabelSetting = () => {};
  const resetInputSetting = () => {};
  const resetPaneSetting = () => {};
  render(
    <DetailSettings
      state={state}
      onChange={onChange}
      resetClanNameSetting={resetClanNameSetting}
      resetLabelSetting={resetLabelSetting}
      resetInputSetting={resetInputSetting}
      resetPaneSetting={resetPaneSetting}
    />,
  );
  const clanNameOutlineVisible = document.getElementById(
    "clanNameOutlineVisible",
  ) as HTMLInputElement;
  clanNameOutlineVisible.checked = true;
  ReactTestUtils.Simulate.change(clanNameOutlineVisible as Element);
  const clanNameOutlineColor = document.getElementById(
    "clanNameOutlineColor",
  ) as HTMLInputElement;
  clanNameOutlineColor.value = "#ffffff";
  ReactTestUtils.Simulate.change(clanNameOutlineColor as Element);
  const clanNameColor = document.getElementById(
    "clanNameColor",
  ) as HTMLInputElement;
  clanNameColor.value = "#ffffff";
  ReactTestUtils.Simulate.change(clanNameColor as Element);
  const labelColor = document.getElementById("labelColor") as HTMLInputElement;
  labelColor.value = "#ffffff";
  ReactTestUtils.Simulate.change(labelColor as Element);
  const labelBackgroundVisible = document.getElementById(
    "labelBackgroundVisible",
  ) as HTMLInputElement;
  labelBackgroundVisible.checked = true;
  ReactTestUtils.Simulate.change(labelBackgroundVisible as Element);
  const labelBackgroundColor = document.getElementById(
    "labelBackgroundColor",
  ) as HTMLInputElement;
  labelBackgroundColor.value = "#ffffff";
  ReactTestUtils.Simulate.change(labelBackgroundColor as Element);
  const inputColor = document.getElementById("inputColor") as HTMLInputElement;
  inputColor.value = "#ffffff";
  ReactTestUtils.Simulate.change(inputColor as Element);
  const paneBackgroundColor = document.getElementById(
    "paneBackgroundColor",
  ) as HTMLInputElement;
  paneBackgroundColor.value = "#ffffff";
  ReactTestUtils.Simulate.change(paneBackgroundColor as Element);
  const paneTransparency = document.getElementById(
    "paneTransparency",
  ) as HTMLSelectElement;
  paneTransparency.value = "1";
  ReactTestUtils.Simulate.change(paneTransparency as Element);

  expect(state.clanNameOutlineVisible).toBe(true);
  expect(state.clanNameOutlineColor).toBe("#ffffff");
  expect(state.clanNameColor).toBe("#ffffff");
  expect(state.labelColor).toBe("#ffffff");
  expect(state.labelBackgroundVisible).toBe(true);
  expect(state.labelBackgroundColor).toBe("#ffffff");
  expect(state.inputColor).toBe("#ffffff");
  expect(state.paneBackgroundColor).toBe("#ffffff");
  expect(state.paneTransparency).toBe("1");
});
