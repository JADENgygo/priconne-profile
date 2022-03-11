import { Form, Accordion } from "react-bootstrap";
import React from "react";

type Props = {
  className?: string;
  state: {
    mode: "myProfileCard" | "clanProfileCard";
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
  onChange: (event: React.ChangeEvent<any>) => void;
  resetClanNameSetting: () => void;
  resetLabelSetting: () => void;
  resetInputSetting: () => void;
  resetPaneSetting: () => void;
};

export const DetailSettings = (props: Props) => {
  return (
    <div className={props.className}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>詳細設定</Accordion.Header>
          <Accordion.Body>
            <Form>
              {props.state.mode === "clanProfileCard" && (
                <>
                  <div>クラン名</div>
                  <Form.Group controlId="clanNameColor" className="mt-3">
                    <Form.Label>文字色</Form.Label>
                    <Form.Control
                      type="color"
                      value={props.state.clanNameColor}
                      onChange={props.onChange}
                      name="clanNameColor"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="clanNameOutlineVisible"
                    className="mt-3"
                  >
                    <Form.Check
                      type="checkbox"
                      label="輪郭の表示"
                      checked={props.state.clanNameOutlineVisible}
                      onChange={props.onChange}
                      name="clanNameOutlineVisible"
                    />
                  </Form.Group>
                  <Form.Group controlId="clanNameOutlineColor" className="mt-3">
                    <Form.Label>輪郭色</Form.Label>
                    <Form.Control
                      type="color"
                      value={props.state.clanNameOutlineColor}
                      onChange={props.onChange}
                      name="clanNameOutlineColor"
                    />
                  </Form.Group>
                  <button
                    type="button"
                    className="btn btn-dark mt-3"
                    onClick={props.resetClanNameSetting}
                  >
                    リセット
                  </button>
                  <hr />
                </>
              )}
              <div>ラベル</div>
              <Form.Group controlId="labelColor" className="mt-3">
                <Form.Label>文字色</Form.Label>
                <Form.Control
                  type="color"
                  value={props.state.labelColor}
                  onChange={props.onChange}
                  name="labelColor"
                />
              </Form.Group>
              <Form.Group controlId="labelBackgroundVisible" className="mt-3">
                <Form.Check
                  type="checkbox"
                  label="背景色の表示"
                  onChange={props.onChange}
                  name="labelBackgroundVisible"
                  checked={props.state.labelBackgroundVisible}
                />
              </Form.Group>
              <Form.Group controlId="labelBackgroundColor" className="mt-3">
                <Form.Label>背景色</Form.Label>
                <Form.Control
                  type="color"
                  value={props.state.labelBackgroundColor}
                  onChange={props.onChange}
                  name="labelBackgroundColor"
                />
              </Form.Group>
              <button
                type="button"
                className="btn btn-dark mt-3"
                onClick={props.resetLabelSetting}
              >
                リセット
              </button>
              <hr />
              {props.state.mode === "myProfileCard" ? (
                <div>入力値</div>
              ) : (
                <div>入力値 (クラン名以外)</div>
              )}
              <Form.Group controlId="inputColor" className="mt-3">
                <Form.Label>文字色</Form.Label>
                <Form.Control
                  type="color"
                  value={props.state.inputColor}
                  onChange={props.onChange}
                  name="inputColor"
                />
              </Form.Group>
              <button
                type="button"
                className="btn btn-dark mt-3"
                onClick={props.resetInputSetting}
              >
                リセット
              </button>
              <hr />
              <div>ペイン</div>
              <Form.Group controlId="paneBackgroundColor" className="mt-3">
                <Form.Label>背景色</Form.Label>
                <Form.Control
                  type="color"
                  value={props.state.paneBackgroundColor}
                  onChange={props.onChange}
                  name="paneBackgroundColor"
                />
              </Form.Group>
              <Form.Group controlId="paneTransparency" className="mt-3">
                <Form.Label>透明度</Form.Label>
                <Form.Select
                  name="paneTransparency"
                  value={props.state.paneTransparency}
                  onChange={props.onChange}
                >
                  {[...Array(11)].map((_, index) => (
                    <option key={index} value={index / 10.0}>
                      {index / 10.0}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <button
                type="button"
                className="btn btn-dark mt-3"
                onClick={props.resetPaneSetting}
              >
                リセット
              </button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
