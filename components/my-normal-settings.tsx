import { Form, Row, Col } from 'react-bootstrap';
import React from 'react'
import style from "../styles/MyNormalSettings.module.css"

type Props = {
  className?: string,
  state: {
    playerName: string,
    playerLevel: number,
    strength: number,
    playerId: string,
    scoreDate: string,
    score: number,
    battleArena: number,
    princessArena: number,
    runa: number,
    runaEx: number,
    comment: string,
  },
  onChange: (event: React.ChangeEvent<any>) => void,
};

export const MyNormalSettings = (props: Props) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const lastMonth = new Date(year, month - 1);
  const monthBeforeLast = new Date(year, month - 2);
  const dates = [
    now.getFullYear() + "年" + (now.getMonth() + 1) + "月",
    lastMonth.getFullYear() + "年" + (lastMonth.getMonth() + 1) + "月",
    monthBeforeLast.getFullYear() + "年" + (monthBeforeLast.getMonth() + 1) + "月",
  ];
  return (
    <div className={ props.className }>
      <Form>
        <Form.Group controlId="playerName" className="mb-3">
          <Form.Label>プレイヤー名</Form.Label>
          <Form.Control type="text" value={ props.state.playerName } onChange={ props.onChange } name="playerName" />
        </Form.Group>
        <Form.Group controlId="playerLevel" className="mb-3">
          <Form.Label>プレイヤーLv</Form.Label>
          <Form.Control type="number" value={ props.state.playerLevel } onChange={ props.onChange } name="playerLevel" />
        </Form.Group>
        <Form.Group controlId="strength" className="mb-3">
          <Form.Label>全キャラ戦力</Form.Label>
          <Form.Control type="number" value={ props.state.strength } onChange={ props.onChange } name="strength" />
        </Form.Group>
        <Form.Group controlId="playerId" className="mb-3">
          <Form.Label>プレイヤーID</Form.Label>
          <Form.Control type="text" value={ props.state.playerId } onChange={ props.onChange } name="playerId" />
        </Form.Group>
        <Row>
          <Form.Group as={Col} controlId="score" className="mb-3">
            <Form.Label>クラバトスコア</Form.Label>
            <Form.Control type="number" value={ props.state.score } onChange={ props.onChange } name="score" />
          </Form.Group>
          <Form.Group as={Col} controlId="scoreDate" className="mb-3">
            <Form.Label>年月</Form.Label>
            <Form.Select name="scoreDate" value={props.state.scoreDate} onChange={props.onChange}>
              {
                [...Array(3)].map((_, index) => <option key={index} value={ dates[index] }>{ dates[index] }</option>)
              }
            </Form.Select>
          </Form.Group>
        </Row>
        <Form.Group controlId="battleArena" className="mb-3">
          <Form.Label>バトルアリーナ</Form.Label>
          <Form.Control type="number" value={ props.state.battleArena } onChange={ props.onChange } name="battleArena" />
        </Form.Group>
        <Form.Group controlId="princessArena" className="mb-3">
          <Form.Label>プリンセスアリーナ</Form.Label>
          <Form.Control type="number" value={ props.state.princessArena } onChange={ props.onChange } name="princessArena" />
        </Form.Group>
        <Form.Group controlId="runa" className="mb-3">
          <Form.Label>ルナの塔</Form.Label>
          <Form.Control type="number" value={ props.state.runa } onChange={ props.onChange } name="runa" />
        </Form.Group>
        <Form.Group controlId="runaEx" className="mb-3">
          <Form.Label>ルナの塔EX</Form.Label>
          <Form.Control type="number" value={ props.state.runaEx } onChange={ props.onChange } name="runaEx" />
        </Form.Group>
        <Form.Group controlId="comment" className="mb-3">
          <Form.Label>コメント</Form.Label>
          <Form.Control as="textarea" className={style.comment} value={ props.state.comment } onChange={ props.onChange } name="comment" />
        </Form.Group>
      </Form>
    </div>
  );
};
