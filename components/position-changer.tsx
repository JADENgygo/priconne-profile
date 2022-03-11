import { Form } from "react-bootstrap";
import React from "react";

type Props = {
  className?: string;
  state: {
    position: string;
  };
  onChange: (event: React.ChangeEvent<any>) => void;
};

export const PositionChanger = (props: Props) => {
  return (
    <div className={props.className}>
      <Form>
        <Form.Group controlId="position" className="mb-3">
          <Form.Label>表示位置</Form.Label>
          {["左", "中央", "右"].map((value, index) => (
            <Form.Check
              key={value}
              id={"position" + index}
              type="radio"
              label={value}
              value={index}
              onChange={props.onChange}
              name="position"
              checked={props.state.position === index.toString()}
            />
          ))}
        </Form.Group>
      </Form>
    </div>
  );
};
