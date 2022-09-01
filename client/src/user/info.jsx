import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "../styles/info.css";
export default function Info() {
  return (
    <div className="info_container">
      <div className="info_sidebar">
        <div className="info_sidebar_container">
          <button className="info_user-profile" type="button">
            User Profile
          </button>
          <i className="fa-solid fa-user info_user-icon-profile"></i>
        </div>
        <div className="info_sidebar_container">
          <button className="info_user-info" type="button">
            History
          </button>
          <i className="fa-solid fa-clock-rotate-left info_user-icon-info"></i>
        </div>
      </div>
      <div className="history_content">
        <Row className="profileContainer">
          <Col className="left_side">
            <div className="info_header">Profile Picture</div>
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
              <Row className="mb-3">
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
                    placeholder="Enter Email"
                  ></Form.Control>
                </Form.Group>
              </Row>

              <Row className="mb-3">
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
              <Form.Group controlId="address">
                <Form.Label> Address</Form.Label>
                <Form.Control
                  className="form-control"
                  type="address"
                  placeholder="Enter Address"
                ></Form.Control>
              </Form.Group>

              <Row className="mb-3 mt-3">
                <Form.Group as={Col} controlId="address">
                  <Form.Control
                    className="form-control"
                    type="address"
                    placeholder="Enter Ward"
                  ></Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="address">
                  <Form.Control
                    className="form-control"
                    type="address"
                    placeholder="Enter District"
                  ></Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="address">
                  <Form.Control
                    className="form-control"
                    type="address"
                    placeholder="Enter Province"
                  ></Form.Control>
                </Form.Group>
              </Row>

              <Row className="mb-3 mt-3">
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
                    className="form-control"
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

              <Button className="btn save_btn" type="submit" variant="primary">
                Save
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
