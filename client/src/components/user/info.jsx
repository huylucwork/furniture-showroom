import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";

import "../../styles/info.css";

export default function Info({accountInfo}) {
  const [saveButton, setSaveButton] = useState(false);
  const [editButton, setEditButton] = useState(false);

  const [fullname, setFullname] = useState(accountInfo.name);
  const [username, setUsername] = useState(accountInfo.user_name);
  const [userMail, setUserMail] = useState(accountInfo.user_mail);
  const [phone, setPhone] = useState(accountInfo.phone);
  const [street, setStreet] = useState(accountInfo.street);
  const [wardSelect, setWardSelect] = useState(accountInfo.ward);
  const [districtSelect, setDistrictSelect] = useState(accountInfo.district !== null? accountInfo.ward : 3537);
  const [provinceSelect, setProvinceSelect] = useState(accountInfo.province!== null? accountInfo.district : 1313);

  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);

    useEffect(()=>{
        Axios.get("https://hifurdez.vercel.app/province")
        .then((response)=>{
            setProvince(response.data);
        })
    },[])

    useEffect(()=>{
        Axios.post("https://hifurdez.vercel.app/province/district",{
          id: provinceSelect,
        })
        .then((response)=>{
            setDistrict(response.data);
        })
  },[provinceSelect])

  useEffect(()=>{
    Axios.post("https://hifurdez.vercel.app/province/district/ward", {
      id: districtSelect
    })
      .then((response)=>{
        setWard(response.data);
      })
  },[districtSelect])

  return (
    <div className="">
      <div className="info_content">
        <Row className="profile_container">
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
                    placeholder={accountInfo.user_name}
                    onChange={e=>setUsername(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="email" className="second_col">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="email"
                    placeholder={accountInfo.user_mail}
                    onChange={e=>setUserMail(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Row>

              <Row className="row_margin mt-5 ">
                <Form.Group as={Col} controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    placeholder={accountInfo.name}
                    onChange={e=>setFullname(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="phone" className="second_col">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="Phone"
                    placeholder={accountInfo.phone}
                    onChange={e=>setPhone(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Row>

              <Row className="mb-3 mt-4 ">
                <Form.Group as={Col} controlId="address">
                  <Form.Label> Address</Form.Label>
                  <Form.Control
                    className="form-control address_size"
                    type="address"
                    placeholder={accountInfo.street}
                    onChange={e=>setStreet(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Row>
              <Row className="row_box ">
                <Form.Group as={Col} controlId="address_ward">
                  <Form.Select className="form-control row_box_size " onChange={e=>setWardSelect(e.target.value)}>
                    {ward.length ?
                    ward.map((value)=> {
                      return (
                        <option key={value.code} value={value.id}>{value.name}</option>
                      )
                    }) :
                      <option>Choose ward</option>
                    }
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="address_district">
                  <Form.Select className="form-control row_box_size second_box" onChange={e=>setDistrictSelect(e.target.value)}>
                    {district.length ?
                    district.map((value)=> {
                      return (
                        <option key={value.code} value={value.id}>{value.name}</option>
                      )
                    }) :
                      <option>Choose district</option>
                    }
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="address_province">
                  <Form.Select className="form-control row_box_size third_box" onChange={e=>setProvinceSelect(e.target.value)}>
                    {province.map((value)=> {
                      return (
                        <option key={value.code} value={value.id}>{value.name}</option>
                      )
                    })}
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
                    <Form.Group
                      as={Col}
                      controlId=""
                      className="second_col"
                    ></Form.Group>
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
                    <Form.Group
                      as={Col}
                      controlId="confirmPassword_confirm"
                      className="second_col"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        className="form-control "
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
