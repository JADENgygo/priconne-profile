import { Form } from "react-bootstrap";
import React from "react";

type Props = {
  className?: string;
  state: {
    mode: "myProfileCard" | "clanProfileCard";
  };
  onChange: (event: React.ChangeEvent<any>) => void;
};

export const ModeChanger = (props: Props) => {
  const modes = ["myProfileCard", "clanProfileCard"];
  return (
    <div className={props.className}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>モード</Form.Label>
          {["マイプロフカード", "クランプロフカード"].map((value, index) => (
            <Form.Check
              key={value}
              id={"mode" + index}
              type="radio"
              label={value}
              value={modes[index]}
              onChange={props.onChange}
              name="mode"
              checked={props.state.mode === modes[index]}
            />
          ))}
        </Form.Group>
      </Form>
    </div>
  );
};
