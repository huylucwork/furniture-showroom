import React, { useState} from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import "../../styles/info.css";

export default function Info(props) {
  const [saveButton, setSaveButton] = useState(false);
  const [editButton, setEditButton] = useState(false);
  return (
    <div className="info_container">
      <div className="info_content">
        <Row className="profileContainer">
          <Col className="left_side">
            <div className="info_header center_pic">Profile Picture</div>
            <span class="circle">
              <Button className="edit_btn btn" variant="primary">
                Edit
              </Button>
            </span>
          </Col>
          <Col className="right_side">
            <div className="info_header"> My Profile</div>

            <Form>
              <hr className="profile_edit"></hr>
              <Row className="mb-3 mt-3">
                <Form.Group as={Col} controlId="username" className="">
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

              <Row className="mb-3 mt-4 ">
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
              <Row className="row_box">
                <Form.Group as={Col} controlId="address">
                  <Form.Select className="form-control row_box_size ">
                    <option>Choose Ward</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="address">
                  <Form.Select className="form-control row_box_size">
                    <option>Choose District</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="address">
                  <Form.Select className="form-control row_box_size">
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
                  <Row className="mb-4 mt-4">
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
                  <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="password">
                      <Form.Label>New Password</Form.Label>
                      <Form.Control
                        className="form-control "
                        type="password"
                        placeholder="Enter New Password"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="confirmPassword">
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