import React, { useState } from "react";
import { backgroundImageNames } from "../components/background-images";
import type { NextPage } from "next";
import { BackgroundImages } from "../components/background-images";
import { ClanSettings } from "../components/clan-settings";
import { DetailSettings } from "../components/detail-settings";
import { Canvas } from "../components/canvas";
import { ModeChanger } from "../components/mode-changer";
import { MySettings } from "../components/my-settings";
import { PositionChanger } from "../components/position-changer";

const Home: NextPage = () => {
  const now = new Date();
  const [state, setState] = useState({
    mode: "clanProfileCard" as "myProfileCard" | "clanProfileCard",
    backgroundImageName: backgroundImageNames[142],
    // マイプロフカード
    playerName: "ユウキ",
    playerLevel: 200,
    strength: 5000000,
    playerId: "123456789",
    scoreDate: now.getFullYear() + "年" + (now.getMonth() + 1) + "月",
    score: 600000000,
    battleArena: 10,
    princessArena: 20,
    runa: 600,
    runaEx: 40,
    comment: "お金、大切、覚えた！",
    // クランプロフカード
    clanName: "もっと美食殿",
    averageLevel: 200,
    memberCount: 28,
    policy: "わいわいプレイ",
    condition: "勧誘のみ" as "誰でも加入" | "承認あり" | "勧誘のみ",
    guideline:
      "私達の目的は、この世界のありとあらゆる料理や食材を追求・探求し、みんなで楽しく食事をするギルド。その名も、美食殿！",
    ranking: 1000,
    rankingDate: now.getFullYear() + "年" + (now.getMonth() + 1) + "月",
    position: "1" as "0" | "1" | "2",
    // 詳細設定
    clanNameOutlineVisible: true,
    clanNameOutlineColor: "#FFFFFF",
    clanNameColor: "#000000",
    labelColor: "#FFFFFF",
    labelBackgroundVisible: true,
    labelBackgroundColor: "#000000",
    inputColor: "#000000",
    paneBackgroundColor: "#FFFFFF",
    paneTransparency: "0.6",
  });

  const onChange = (event: React.ChangeEvent<any>): void => {
    if (event.target.type === "checkbox") {
      setState((state) => ({
        ...state,
        [event.target.name]: event.target.checked,
      }));
      return;
    }
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const resetClanNameSetting = (): void => {
    setState((state) => ({
      ...state,
      clanNameColor: "#000000",
      clanNameOutlineColor: "#FFFFFF",
      clanNameOutlineVisible: true,
    }));
  };

  const resetLabelSetting = (): void => {
    setState((state) => ({
      ...state,
      labelColor: "#FFFFFF",
      labelBackgroundVisible: true,
      labelBackgroundColor: "#000000",
    }));
  };

  const resetInputSetting = (): void => {
    setState((state) => ({ ...state, inputColor: "#000000" }));
  };

  const resetPaneSetting = (): void => {
    setState((state) => ({
      ...state,
      paneBackgroundColor: "#FFFFFF",
      paneFrameVisible: false,
      paneFrameColor: "#000000",
      paneTransparency: "0.6",
    }));
  };

  return (
    <div className="container">
      <ModeChanger state={state} onChange={onChange} />
      <BackgroundImages className="mt-3" state={state} onChange={onChange} />
      {state.mode === "myProfileCard" && (
        <>
          <MySettings state={state} onChange={onChange} className="mt-3" />
          <PositionChanger state={state} onChange={onChange} />
        </>
      )}
      {state.mode === "clanProfileCard" && (
        <>
          <ClanSettings className="mt-3" state={state} onChange={onChange} />
          <PositionChanger state={state} onChange={onChange} />
        </>
      )}
      <DetailSettings
        className="mt-3"
        state={state}
        onChange={onChange}
        resetClanNameSetting={resetClanNameSetting}
        resetLabelSetting={resetLabelSetting}
        resetInputSetting={resetInputSetting}
        resetPaneSetting={resetPaneSetting}
      />
      <Canvas state={state} className="mt-3" />
    </div>
  );
};

export default Home;
