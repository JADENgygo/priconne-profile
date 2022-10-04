import { useEffect } from "react";
import React from "react";
import style from "../styles/Canvas.module.css";

type Props = {
  className?: string;
  state: {
    mode: "myProfileCard" | "clanProfileCard";
    backgroundImageName: string;
    // マイプロフカード
    playerName: string;
    playerLevel: number;
    strength: number;
    playerId: string;
    scoreDate: string;
    score: number;
    battleArena: number;
    princessArena: number;
    runa: number;
    runaEx: number;
    comment: string;
    // クランプロフカード
    clanName: string;
    averageLevel: number;
    memberCount: number;
    policy: string;
    condition: "誰でも加入" | "承認あり" | "勧誘のみ";
    guideline: string;
    ranking: number;
    rankingDate: string;
    position: string;
    // 詳細設定
    clanNameOutlineVisible: boolean;
    clanNameOutlineColor: string;
    clanNameColor: string;
    labelColor: string;
    labelBackgroundVisible: boolean;
    labelBackgroundColor: string;
    inputColor: string;
    paneBackgroundColor: string;
    paneTransparency: string;
  };
};

export const Canvas = (props: Props) => {
  const convertHexToRgb = (hex: string) => {
    const rgbs = [
      hex.substring(1, 3),
      hex.substring(3, 5),
      hex.substring(5, 7),
    ].map((value) => parseInt(value, 16));
    return { r: rgbs[0], g: rgbs[1], b: rgbs[2] };
  };

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    const backgroundImage = document.createElement("img");
    backgroundImage.src = "/img/background/" + props.state.backgroundImageName;
    backgroundImage.addEventListener("load", () => {
      context.drawImage(backgroundImage, 0, 0);

      const drawClanName = (
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D,
      ) => {
        const xs = [
          40.0 + (canvas.width * 3.0) / 5.0 / 2.0,
          canvas.width / 2.0,
          canvas.width -
            (canvas.width * 3.0) / 5.0 +
            (canvas.width * 3.0) / 5.0 / 2.0 -
            40.0,
        ];
        const y = (canvas.height * 2.0) / 15.0;
        const position = parseInt(props.state.position);

        context.font = "bold 100px sans-serif";
        context.textAlign = "center";
        context.lineWidth = 10;

        if (props.state.clanNameOutlineVisible) {
          context.strokeStyle = props.state.clanNameOutlineColor;
          context.strokeText(props.state.clanName, xs[position], y);
        }

        context.fillStyle = props.state.clanNameColor;
        context.fillText(props.state.clanName, xs[position], y);
      };
      if (props.state.mode === "clanProfileCard") {
        drawClanName(canvas, context);
      }

      const drawPane = (
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D,
      ) => {
        const width = (canvas.width * 3.0) / 5.0;
        const height = (canvas.height * 3.0) / 4.0;
        const xs = [
          40.0,
          (canvas.width * 1.0) / 5.0,
          canvas.width - (canvas.width * 3.0) / 5.0 - 40.0,
        ];
        const y =
          props.state.mode === "myProfileCard"
            ? (canvas.height - height) / 2.0
            : (canvas.height * 3) / 15.0;
        const position = parseInt(props.state.position);

        const fillColor = convertHexToRgb(props.state.paneBackgroundColor);
        context.fillStyle = `rgba(${fillColor.r}, ${fillColor.g}, ${fillColor.b}, ${props.state.paneTransparency})`;
        context.fillRect(xs[position], y, width, height);
      };
      drawPane(canvas, context);

      const drawLabelAndInput = (
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D,
      ) => {
        const xs = [
          70.0,
          (canvas.width * 1.0) / 5.0 + 30,
          canvas.width - (canvas.width * 3.0) / 5.0 - 10.0,
        ];
        const y =
          props.state.mode === "myProfileCard"
            ? canvas.height / 6.5
            : canvas.height / 4.5;
        const offset = props.state.mode === "myProfileCard" ? 550 : 650;
        const fontSize = 40;
        const position = parseInt(props.state.position);
        context.font = `bold ${fontSize}px sans-serif`;
        context.textAlign = "start";
        context.fillStyle = props.state.labelBackgroundColor;

        if (props.state.mode === "myProfileCard") {
          if (props.state.labelBackgroundVisible) {
            context.fillRect(
              xs[position],
              y,
              context.measureText("プレイヤー名").width + 20,
              fontSize * 1.2,
            );
            context.fillRect(
              xs[position] + offset,
              y,
              context.measureText("プレイヤーLv").width + 20,
              fontSize * 1.2,
            );
            context.fillRect(
              xs[position],
              y + fontSize * 1.5,
              context.measureText("全キャラ戦力").width + 20,
              fontSize * 1.2,
            );
            context.fillRect(
              xs[position] + offset,
              y + fontSize * 1.5,
              context.measureText("プレイヤーID").width + 20,
              fontSize * 1.2,
            );
            context.fillRect(
              xs[position],
              y + fontSize * 3.0,
              context.measureText("クランバトルスコア").width + 20,
              fontSize * 1.2,
            );
            context.fillRect(
              xs[position],
              y + fontSize * 4.5,
              context.measureText("バトルアリーナ").width + 20,
              fontSize * 1.2,
            );
            context.fillRect(
              xs[position] + offset,
              y + fontSize * 4.5,
              context.measureText("プリンセスアリーナ").width + 20,
              fontSize * 1.2,
            );
            context.fillRect(
              xs[position],
              y + fontSize * 6.0,
              context.measureText("ルナの塔").width + 20,
              fontSize * 1.2,
            );
            context.fillRect(
              xs[position],
              y + fontSize * 7.5,
              context.measureText("コメント").width + 20,
              fontSize * 1.2,
            );
          }

          context.fillStyle = props.state.labelColor;
          context.fillText("プレイヤー名", xs[position] + 10, y + fontSize);
          context.fillText(
            "プレイヤーLv",
            xs[position] + 10 + offset,
            y + fontSize,
          );
          context.fillText(
            "全キャラ戦力",
            xs[position] + 10,
            y + fontSize * 2.5,
          );
          context.fillText(
            "プレイヤーID",
            xs[position] + 10 + offset,
            y + fontSize * 2.5,
          );
          context.fillText(
            "クランバトルスコア",
            xs[position] + 10,
            y + fontSize * 4.0,
          );
          context.fillText(
            "バトルアリーナ",
            xs[position] + 10,
            y + fontSize * 5.5,
          );
          context.fillText(
            "プリンセスアリーナ",
            xs[position] + 10 + offset,
            y + fontSize * 5.5,
          );
          context.fillText("ルナの塔", xs[position] + 10, y + fontSize * 7.0);
          context.fillText("コメント", xs[position] + 10, y + fontSize * 8.5);

          context.fillStyle = props.state.inputColor;
          context.fillText(
            props.state.playerName,
            xs[position] + context.measureText("プレイヤー名   ").width,
            y + fontSize,
          );
          context.fillText(
            props.state.playerLevel.toString(),
            xs[position] +
              offset +
              context.measureText("プレイヤーLv   ").width,
            y + fontSize,
          );
          context.fillText(
            props.state.strength.toLocaleString(),
            xs[position] + context.measureText("全キャラ戦力   ").width,
            y + fontSize * 2.5,
          );
          const playerId =
            props.state.playerId.substring(0, 3) +
            " " +
            props.state.playerId.substring(3, 6) +
            " " +
            props.state.playerId.substring(6);
          context.fillText(
            playerId,
            xs[position] +
              offset +
              context.measureText("プレイヤーID   ").width,
            y + fontSize * 2.5,
          );
          context.fillText(
            props.state.score.toLocaleString() +
              " (" +
              props.state.scoreDate +
              ")",
            xs[position] + context.measureText("クランバトルスコア   ").width,
            y + fontSize * 4.0,
          );
          context.fillText(
            props.state.battleArena.toString() + "位",
            xs[position] + context.measureText("バトルアリーナ   ").width,
            y + fontSize * 5.5,
          );
          context.fillText(
            props.state.princessArena.toString() + "位",
            xs[position] +
              offset +
              context.measureText("プリンセスアリーナ   ").width,
            y + fontSize * 5.5,
          );
          context.fillText(
            "到達階: " +
              props.state.runa.toString() +
              "階, EXクエスト: " +
              props.state.runaEx.toString() +
              "/42",
            xs[position] + context.measureText("ルナの塔   ").width,
            y + fontSize * 7.0,
          );
          return;
        }

        if (props.state.labelBackgroundVisible) {
          context.fillRect(
            xs[position],
            y,
            context.measureText("平均プレイヤーLv").width + 20,
            fontSize * 1.2,
          );
          context.fillRect(
            xs[position] + offset,
            y,
            context.measureText("メンバー数").width + 20,
            fontSize * 1.2,
          );
          context.fillRect(
            xs[position],
            y + fontSize * 1.5,
            context.measureText("活動方針").width + 20,
            fontSize * 1.2,
          );
          context.fillRect(
            xs[position] + offset,
            y + fontSize * 1.5,
            context.measureText("加入条件").width + 20,
            fontSize * 1.2,
          );
          context.fillRect(
            xs[position],
            y + fontSize * 3.0,
            context.measureText("ランキング").width + 20,
            fontSize * 1.2,
          );
          context.fillRect(
            xs[position],
            y + fontSize * 4.5,
            context.measureText("募集要項").width + 20,
            fontSize * 1.2,
          );
        }

        context.fillStyle = props.state.labelColor;
        context.fillText("平均プレイヤーLv", xs[position] + 10, y + fontSize);
        context.fillText(
          "メンバー数",
          xs[position] + 10 + offset,
          y + fontSize,
        );
        context.fillText("活動方針", xs[position] + 10, y + fontSize * 2.5);
        context.fillText(
          "加入条件",
          xs[position] + 10 + offset,
          y + fontSize * 2.5,
        );
        context.fillText("ランキング", xs[position] + 10, y + fontSize * 4.0);
        context.fillText("募集要項", xs[position] + 10, y + fontSize * 5.5);

        context.fillStyle = props.state.inputColor;
        context.fillText(
          props.state.averageLevel.toString(),
          xs[position] + context.measureText("平均プレイヤーLv   ").width,
          y + fontSize,
        );
        context.fillText(
          props.state.memberCount.toString(),
          xs[position] + offset + context.measureText("メンバー数   ").width,
          y + fontSize,
        );
        context.fillText(
          props.state.policy,
          xs[position] + context.measureText("活動方針   ").width,
          y + fontSize * 2.5,
        );
        context.fillText(
          props.state.condition,
          xs[position] + offset + context.measureText("加入条件   ").width,
          y + fontSize * 2.5,
        );
        context.fillText(
          props.state.ranking.toString() +
            "位 (" +
            props.state.rankingDate +
            ")",
          xs[position] + context.measureText("ランキング   ").width,
          y + fontSize * 4.0,
        );
      };
      drawLabelAndInput(canvas, context);

      const drawSentence = (
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D,
      ) => {
        const text =
          props.state.mode === "myProfileCard"
            ? props.state.comment
            : props.state.guideline;
        const xs = [
          70.0,
          (canvas.width * 1.0) / 5.0 + 30,
          canvas.width - (canvas.width * 3.0) / 5.0 - 10.0,
        ];
        const y = props.state.mode === "myProfileCard" ? 560 : 515;
        const drawPosition = parseInt(props.state.position);
        let row = 1;
        let splitPosition = 0;
        for (let i = 0; i <= text.length; ++i) {
          const w = context.measureText(
            text.substring(splitPosition, i + 1),
          ).width;
          if (((canvas.width * 3.0) / 5.0) * 0.92 <= w || text[i] === "\n") {
            const y_ = y + (row - 1) * 50.0;
            const s = text.substring(splitPosition, i + 1);
            context.fillText(s, xs[drawPosition], y_);
            row++;
            splitPosition = i + 1;
          }
          if (i === text.length) {
            const y_ = y + (row - 1) * 50.0;
            const s = text.substring(splitPosition, i + 1);
            context.fillText(s, xs[drawPosition], y_);
          }
        }
      };
      drawSentence(canvas, context);
    });
  }, [props.state]);

  const saveImage = (): void => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "クランプロフカード.png";
    a.click();
  };

  return (
    <div className={props.className}>
      <hr />
      <button className="btn btn-secondary" onClick={saveImage}>
        カードを保存
      </button>
      <div className="alert alert-info mt-3">
        ボタンが動作しない時はプレビューを保存するか別ブラウザを使用してください
      </div>
      <div>プレビュー</div>
      <canvas id="canvas" width="1920" height="1080" className={style.canvas} />
    </div>
  );
};
