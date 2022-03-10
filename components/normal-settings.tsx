import { Form } from 'react-bootstrap';
import React from 'react'
import style from "../styles/NormalSettings.module.css"

type Props = {
  className?: string,
  state: {
    clanName: string,
    averageLevel: number,
    memberCount: number,
    policy: string,
    condition: string,
    guideline: string,
    ranking: string,
    position: string,
  },
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

export const NormalSettings = (props: Props) => {
  return (
    <div className={ props.className }>
      <Form>
        <Form.Group controlId="clanName" className="mb-3">
          <Form.Label>クラン名</Form.Label>
          <Form.Control type="text" value={ props.state.clanName } onChange={ props.onChange } name="clanName" />
        </Form.Group>
        <Form.Group controlId="averageLevel" className="mb-3">
          <Form.Label>平均プレイヤーLv</Form.Label>
          <Form.Control type="number" value={ props.state.averageLevel } onChange={ props.onChange } name="averageLevel" />
        </Form.Group>
        <Form.Group controlId="memberCount" className="mb-3">
          <Form.Label>メンバー数</Form.Label>
          <Form.Control type="number" value={ props.state.memberCount } onChange={ props.onChange } name="memberCount" />
        </Form.Group>
        <Form.Group controlId="policy" className="mb-3">
          <Form.Label>活動方針</Form.Label>
          <Form.Control type="text" value={ props.state.policy } onChange={ props.onChange } name="policy" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>加入条件</Form.Label>
          {
            ["誰でも加入", "承認あり", "勧誘のみ"].map((value, index) => 
              <Form.Check key={value} id={"condition" + index} type="radio" label={value} value={value} onChange={ props.onChange } name="condition" checked={props.state.condition === value} />
            )
          }
        </Form.Group>
        <Form.Group controlId="guideline" className="mb-3">
          <Form.Label>募集要項</Form.Label>
          <Form.Control as="textarea" className={style.guideline} value={ props.state.guideline } onChange={ props.onChange } name="guideline" />
        </Form.Group>
        <Form.Group controlId="ranking" className="mb-3">
          <Form.Label>ランキング</Form.Label>
          <Form.Control type="text" value={ props.state.ranking } onChange={ props.onChange } name="ranking" />
        </Form.Group>
        <Form.Group controlId="position" className="mb-3">
          <Form.Label>表示位置</Form.Label>
          {
            ["左", "中央", "右"].map((value, index) =>
              <Form.Check key={"position" + index} id={"position" + index} type="radio" label={value} value={index} onChange={ props.onChange } name="position" checked={props.state.position === index.toString()} />
            )
          }
        </Form.Group>
      </Form>
    </div>
  );
};
