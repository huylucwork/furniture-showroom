import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import "../../styles/info.css";

export default function Info(props) {
  const [saveButton, setSaveButton] = useState(false);
  const [editButton, setEditButton] = useState(false);
  return (
    <div className="">
      <div className="info_content">
        <Row className="profileContainer">
          <Col className="left_side ">
            <div className="info_header center_pic">Profile Picture</div>
            <span className="circle">
              <Button className="btn edit_btn" variant="primary">
                Edit
              </Button>
            </span>
          </Col>
          <Col className="right_side">
            <div className="info_header"> My Profile</div>

            <Form>
              <hr className="profile_edit"></hr>
              <Row className="mt-5 row_margin">
                <Form.Group as={Col} controlId="username">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    placeholder="User Name"
                    defaultValue="username"
                    disabled
                    plaintext
                    readOnly
                  ></Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="email"
                    placeholder="tranducbo@meomeo.com"
                    disabled
                    plaintext
                    readOnly
                  ></Form.Control>
                </Form.Group>
              </Row>

              <Row className="row_margin mt-5 ">
                <Form.Group as={Col} controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    placeholder="Enter Name"
                    defaultValue="Name"
                  ></Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="Phone"
                    placeholder="Enter Phone number"
                  ></Form.Control>
                </Form.Group>
              </Row>

              <Row className="mb-3 mt-4 ">
                <Form.Group as={Col} controlId="address">
                  <Form.Label> Address</Form.Label>
                  <Form.Control
                    className="form-control address_size"
                    type="address"
                    placeholder="Enter Address"
                  ></Form.Control>
                </Form.Group>
              </Row>
              <Row className="row_box ">
                <Form.Group as={Col} controlId="address_ward">
                  <Form.Select className="form-control row_box_size ">
                    <option>Choose Ward</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="address_district">
                  <Form.Select className="form-control row_box_size second_box">
                    <option>Choose District</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="address_province">
                  <Form.Select className="form-control row_box_size third_box">
                    <option>Choose Province</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              {saveButton ? (
                ""
              ) : (
                <Button
                  className="btn save_btn"
                  type="submit"
                  variant="primary"
                  onClick={() => {
                    setSaveButton(true);
                    setEditButton(true);
                  }}
                >
                  Edit
                </Button>
              )}
              {editButton ? (
                <div>
                  <Row className="row_margin mt-5">
                    <Form.Group as={Col} controlId="password">
                      <Form.Label> Old Password</Form.Label>
                      <Form.Control
                        className="form-control"
                        type="password"
                        placeholder="Enter Old Password"
                      ></Form.Control>
                    </Form.Group>
                    {/* temp */}
                    <Form.Group as={Col} controlId=""></Form.Group>
                  </Row>
                  <Row className="mb-5 mt-5">
                    <Form.Group as={Col} controlId="password_new">
                      <Form.Label>New Password</Form.Label>
                      <Form.Control
                        className="form-control "
                        type="password"
                        placeholder="Enter New Password"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="confirmPassword_confirm">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        className="form-control"
                        type="password"
                        placeholder="Confirm Password"
                      ></Form.Control>
                    </Form.Group>
                  </Row>
                  <Button
                    className="btn save_btn"
                    type="submit"
                    variant="primary"
                    onClick={() => {
                      setEditButton(false);
                      setSaveButton(false);
                    }}
                  >
                    Save
                  </Button>
                </div>
              ) : (
                ""
              )}
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
