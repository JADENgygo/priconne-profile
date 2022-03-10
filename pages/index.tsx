import React, { useState, useEffect, ChangeEvent } from 'react'
import { backgroundImageNames } from '../components/background-images'
import type { NextPage } from 'next'
import { BackgroundImages } from '../components/background-images'
import { NormalSettings } from '../components/normal-settings'
import { DetailSettings } from '../components/detail-settings'
import { Canvas } from "../components/canvas"

const Home: NextPage = () => {
  const [state, setState] = useState({
    // 通常設定
    backgroundImageName: backgroundImageNames[62],
    clanName: 'もっと美食殿',
    averageLevel: 200,
    memberCount: 28,
    policy: 'わいわいプレイ',
    condition: '承認あり' as '誰でも加入' | '承認あり' | '勧誘のみ',
    guideline: 'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
    ranking: "1000",
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
    if (event.target.type === 'checkbox') {
      setState(state => ({ ...state, [event.target.name]: event.target.checked }))
      console.log('here0', state, event.target.name, event.target.checked)
      return;
    }
    setState(state => ({ ...state, [event.target.name]: event.target.value }))
    console.log('here1', state, event.target.name, event.target.value)
  };

  const resetClanNameSetting = (): void => {
    setState(state => ({ ...state, clanNameColor: "#000000", clanNameOutlineColor: "#FFFFFF", clanNameOutlineVisible: true }))
  };

  const resetLabelSetting = (): void => {
    setState(state => ({ ...state, labelColor: "#FFFFFF", labelBackgroundVisible: true, labelBackgroundColor: "#000000" }))
  };

  const resetInputSetting = (): void => {
    setState(state => ({ ...state, inputColor: "#000000" }))
  };

  const resetPaneSetting = (): void => {
    setState(state => ({ ...state, paneBackgroundColor: "#FFFFFF", paneFrameVisible: false, paneFrameColor: "#000000", paneTransparency: "0.6" }))
  };

  return (
    <div className="container">
      <BackgroundImages className="mt-3" state={ state } onChange={onChange} />
      <NormalSettings
        className="mt-3"
        state={ state }
        onChange={onChange}
      />
      <DetailSettings
        className="mt-3"
        state={ state }
        onChange={onChange}
        resetClanNameSetting={resetClanNameSetting}
        resetLabelSetting={ resetLabelSetting}
        resetInputSetting={ resetInputSetting}
        resetPaneSetting={ resetPaneSetting}
      />
      <Canvas state={state} className="mt-5" />
    </div>
  )
}

export default Home
