import { Form, Row, Col } from "react-bootstrap";
import React from "react";

type Props = {
  className?: string;
  state: {
    clanName: string;
    averageLevel: number;
    memberCount: number;
    policy: string;
    condition: string;
    guideline: string;
    ranking: number;
    rankingDate: string;
  };
  onChange: (event: React.ChangeEvent<any>) => void;
};

export const ClanSettings = (props: Props) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const lastMonth = new Date(year, month - 1);
  const monthBeforeLast = new Date(year, month - 2);
  const dates = [
    now.getFullYear() + "年" + (now.getMonth() + 1) + "月",
    lastMonth.getFullYear() + "年" + (lastMonth.getMonth() + 1) + "月",
    monthBeforeLast.getFullYear() +
      "年" +
      (monthBeforeLast.getMonth() + 1) +
      "月",
  ];
  return (
    <div className={props.className}>
      <Form>
        <Form.Group controlId="clanName" className="mb-3">
          <Form.Label>クラン名</Form.Label>
          <Form.Control
            className="text-light bg-secondary"
            type="text"
            value={props.state.clanName}
            onChange={props.onChange}
            name="clanName"
          />
        </Form.Group>
        <Form.Group controlId="averageLevel" className="mb-3">
          <Form.Label>平均プレイヤーLv</Form.Label>
          <Form.Control
            className="text-light bg-secondary"
            type="number"
            value={props.state.averageLevel}
            onChange={props.onChange}
            name="averageLevel"
          />
        </Form.Group>
        <Form.Group controlId="memberCount" className="mb-3">
          <Form.Label>メンバー数</Form.Label>
          <Form.Control
            className="text-light bg-secondary"
            type="number"
            value={props.state.memberCount}
            onChange={props.onChange}
            name="memberCount"
          />
        </Form.Group>
        <Form.Group controlId="policy" className="mb-3">
          <Form.Label>活動方針</Form.Label>
          <Form.Control
            className="text-light bg-secondary"
            type="text"
            value={props.state.policy}
            onChange={props.onChange}
            name="policy"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>加入条件</Form.Label>
          {["誰でも加入", "承認あり", "勧誘のみ"].map((value, index) => (
            <Form.Check
              key={value}
              id={"condition" + index}
              type="radio"
              label={value}
              value={value}
              onChange={props.onChange}
              name="condition"
              checked={props.state.condition === value}
            />
          ))}
        </Form.Group>
        <Form.Group controlId="guideline" className="mb-3">
          <Form.Label>募集要項</Form.Label>
          <Form.Control
            className="text-light bg-secondary"
            as="textarea"
            rows={3}
            value={props.state.guideline}
            onChange={props.onChange}
            name="guideline"
          />
        </Form.Group>
        <Row>
          <Form.Group as={Col} controlId="ranking" className="mb-3">
            <Form.Label>ランキング</Form.Label>
            <Form.Control
              className="text-light bg-secondary"
              type="number"
              value={props.state.ranking}
              onChange={props.onChange}
              name="ranking"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="rankingDate" className="mb-3">
            <Form.Label>年月</Form.Label>
            <Form.Select
              className="text-light bg-secondary"
              name="rankingDate"
              value={props.state.rankingDate}
              onChange={props.onChange}
            >
              {[...Array(3)].map((_, index) => (
                <option key={index} value={dates[index]}>
                  {dates[index]}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
};
