import React, { useEffect, useState } from "react";
import { Button, Card, Col, DatePicker, Row } from "antd";
import "./creditxDashboard.css";
import SdWidgetCom from "../widget/SdWidgetCom";
import note from "../../assets/image/note.png";
import size from "../../assets/image/size.png";
import user from "../../assets/image/profile-2user.png";
import questions from "../../assets/image/message-question.png";
import tasksquare from "../../assets/image/task-square.png";
import noteFav from "../../assets/image/note-favorite.png";
import resource from "../../assets/image/task-square.png";
import TodoListItem from "../creditxComponents/TodoListItem/TodoListItem";
import moment from "moment";
import {
  CalendarOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
const CreditxDashboard = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const [startDate, setStartDate] = useState(moment().startOf("week"));

  // Create an array to hold the days of the week
  const daysOfWeek = [];
  // Loop through each day of the week and push it to the array
  for (let i = 0; i < 7; i++) {
    const day = moment(startDate).add(i, "days");
    daysOfWeek.push(day);
  }

  const handleNextWeek = () => {
    setStartDate(moment(startDate).add(7, "days")); // Add 7 days to move to the next week
  };

  const handlePrevWeek = () => {
    setStartDate(moment(startDate).subtract(7, "days")); // Subtract 7 days to move to the previous week
  };

  return (
    <>
      <div className="top_header_dashboard">
        <div className="main_container">
          <div className="wrapper_text">
            <div className="greeting">GOOD MORNING</div>
            <div className="user">RAJAT MISHRA</div>
            <div className="login_details">
              Last Login: 07-20-2021 | 12:00:00 AM
            </div>
          </div>
        </div>
      </div>
      <div className="main_content_dashboard">
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="main_container">
            <Row
              className="widget_row"
              gutter={[16, { xs: 16, sm: 16, md: 16, lg: 16 }]}
              justify={"start"}
            >
              <Col className="col_widget">
                <SdWidgetCom
                  headeColor={"#003399"}
                  backgroundColorToDo={"#fff"}
                  title_header="Loan Application"
                  count={220}
                  headerImgSrc={note}
                  toRoute="/application-listing"
                >
                  <div
                    className="claims_body hScroll "
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "18px",
                    }}
                  >
                    <div className="row w-100 text-center text-primary">
                      <div className="claim_count col border-right">
                        <div className="number_count">350</div>
                        <div>In Progress</div>
                      </div>
                      <div className="claim_count col">
                        <div className="number_count">214</div>
                        <div>Sanctioned</div>
                      </div>
                    </div>
                    <div className="row w-100 text-center text-primary">
                      <div className="claim_count col border-right">
                        <div className="number_count">240</div>
                        <div>Disbursed</div>
                      </div>
                      <div className="claim_count col">
                        <div className="number_count">160</div>
                        <div>Rejected</div>
                      </div>
                    </div>
                  </div>
                </SdWidgetCom>
              </Col>
              <Col className="col_widget">
                <SdWidgetCom
                  backgroundColorToDo={"#fff"}
                  headeColor={"#003399"}
                  title_header="Collection"
                  headerImgSrc={size}
                >
                  <div
                    className="claims_body hScroll"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Row className="row w-100 text-center text-primary">
                      <Col span={8} className="claim_count border-right">
                        <div className="number_count">550</div>
                        <div>All</div>
                      </Col>
                      <Col span={8} className="claim_count border-right">
                        <div className="number_count">350</div>
                        <div>In 3 Days</div>
                      </Col>
                      <Col span={8} className="claim_count">
                        <div className="number_count">200</div>
                        <div>Overdue</div>
                      </Col>
                    </Row>
                  </div>
                </SdWidgetCom>
              </Col>
              <Col className="col_widget">
                <SdWidgetCom
                  backgroundColorToDo={"#fff"}
                  headeColor={"#003399"}
                  title_header={"Customers"}
                  headerImgSrc={user}
                >
                  <div
                    className="claims_body hScroll"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Row className="row w-100 text-center text-primary">
                      <Col span={12} className="claim_count border-right">
                        <div className="number_count">420</div>
                        <div>Active</div>
                      </Col>
                      <Col span={12} className="claim_count">
                        <div className="number_count">158</div>
                        <div>Inactive</div>
                      </Col>
                    </Row>
                  </div>
                </SdWidgetCom>
              </Col>
              <Col className="col_widget">
                <SdWidgetCom
                  backgroundColorToDo={"#fff"}
                  headeColor={"#003399"}
                  title_header={"Queries"}
                  headerImgSrc={questions}
                >
                  <div
                    className="claims_body hScroll query_card"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Row className="row w-100 text-center text-primary">
                      <Col span={12} className="claim_count border-right">
                        <div className="number_count">150</div>
                        <div>Pending</div>
                      </Col>
                      <Col span={12} className="claim_count">
                        <div className="number_count">210</div>
                        <div>Resolved</div>
                      </Col>
                    </Row>
                    <div className="list_item_wrap">
                      <div className="list_item border-bottom">
                        <div className="list_text">
                          Approval request raised by credit for financial
                          covenants
                        </div>
                        <button className="view_button">VIEW</button>
                      </div>
                      <div className="list_item border-bottom">
                        <div className="list_text">
                          Approval request raised by credit for financial
                          covenants
                        </div>
                        <button className="view_button">VIEW</button>
                      </div>
                      <div className="list_item border-bottom">
                        <div className="list_text">
                          Approval request raised by credit for financial
                          covenants
                        </div>
                        <button className="view_button">VIEW</button>
                      </div>
                      <div className="list_item border-bottom">
                        <div className="list_text">
                          Approval request raised by credit for financial
                          covenants
                        </div>
                        <button className="view_button">VIEW</button>
                      </div>
                      <div className="list_item  ">
                        <div className="list_text">
                          Approval request raised by credit for financial
                          covenants
                        </div>
                        <button className="view_button">VIEW</button>
                      </div>
                    </div>
                    <div className="view_all">
                      <button className="view_all_button">VIEW ALL</button>
                    </div>
                  </div>
                </SdWidgetCom>
              </Col>
              <Col className="col_widget">
                <SdWidgetCom
                  backgroundColorToDo={"#fff"}
                  headeColor={"#003399"}
                  title_header={"To Do"}
                  headerImgSrc={tasksquare}
                >
                  <div
                    className="claims_body hScroll to_do_card"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div className="todo_list_item_wrap">
                      <TodoListItem />
                      <TodoListItem />
                      <TodoListItem />
                      <TodoListItem />
                    </div>
                  </div>
                </SdWidgetCom>
              </Col>
              <Col className="col_widget">
                <SdWidgetCom
                  backgroundColorToDo={"#fff"}
                  headeColor={"#003399"}
                  title_header={"Activity Tracker"}
                  headerImgSrc={noteFav}
                >
                  <div
                    className="claims_body hScroll activity_tracker_card"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div className="calendor_wrapper">
                      <div className="week_selector_wrapper d-flex justify-content-between align-items-center">
                        <div
                          onClick={handlePrevWeek}
                          style={{ cursor: "pointer" }}
                        >
                          <LeftOutlined
                            style={{
                              width: 24,
                              height: 24,
                              color: "#003399",
                              fontSize: 24,
                            }}
                          />
                        </div>
                        <div className="weeks">
                          {startDate.format("MMM YY")}
                        </div>
                        <div
                          onClick={handleNextWeek}
                          style={{ cursor: "pointer" }}
                        >
                          <RightOutlined
                            style={{
                              width: 24,
                              height: 24,
                              color: "#003399",
                              fontSize: 24,
                            }}
                          />
                        </div>
                      </div>
                      <div className="weekdays d-flex justify-content-between">
                        {daysOfWeek.map((day) => (
                          <div
                            key={day.format("YYYY-MM-DD")}
                            className={`${
                              currentDate.format("YYYY-MM-DD") ===
                              day.format("YYYY-MM-DD")
                                ? "active_day"
                                : "days"
                            }`}
                          >
                            <div className="day">{day.format("ddd")}</div>
                            <div className="date">{day.format("DD")}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="activity_card_list_items">
                      <div className="appointment_card_item">
                        <div className="appointment_card_header">
                          <div className="title">
                            <CalendarOutlined
                              style={{ color: "#003399", fontSize: 16 }}
                            />
                            <span className="title_text">Appointment</span>
                          </div>
                          <div className="appointment_time">8:30 AM</div>
                        </div>
                        <div className="appointment_description">
                          Meeting with Shantung Kumar for collecting required
                          documents and discussing about the product.
                        </div>
                      </div>

                      <div className="policy_renewal_card">
                        <div className="policy_renewal_card_header">
                          <div className="title">
                            <img
                              src={note}
                              style={{
                                color: "#003399",
                                width: 18,
                                height: 18,
                              }}
                            />
                            <span className="title_text">Policy Renewal</span>
                          </div>
                          <div className="renewal_time">8:30 AM</div>
                        </div>
                        <div className="policy_renewal_details">
                          <div className="policy_number">
                            <div className="p_number details_text">
                              123456689
                            </div>
                            <label className="policy_number_label detail_label">
                              Policy No
                            </label>
                          </div>
                          <div className="customer">
                            <div className="cutomer_name details_text">
                              Sanket Jain
                            </div>
                            <label className="customer_name_label detail_label">
                              Policy Holder
                            </label>
                          </div>
                          <div className="day_of_renewal">
                            <div className="days_renewal">
                              <label className="label_text">15 days</label>
                            </div>
                            <label className="days_renewal_label detail_label">
                              Days for renewal
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="birthday_card_item">
                        <div className="appointment_card_header">
                          <div className="title">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path
                                d="M1.5 16.5H16.5"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M2.33252 16.5V9.75C2.33252 8.505 3.45002 7.5 4.83002 7.5H13.1625C14.5425 7.5 15.66 8.505 15.66 9.75V16.5"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4.16992 7.5V5.3775C4.16992 4.4775 4.97992 3.75 5.98492 3.75H12.0224C13.0199 3.75 13.8299 4.4775 13.8299 5.3775V7.5"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M2.64746 10.4851L2.92496 10.4926C3.47996 10.5001 3.92246 10.9501 3.92246 11.5051V11.7526C3.92246 12.3076 4.37246 12.7651 4.93496 12.7651C5.48996 12.7651 5.94746 12.3151 5.94746 11.7526V11.5201C5.94746 10.9651 6.39746 10.5076 6.95996 10.5076C7.51496 10.5076 7.97246 10.9576 7.97246 11.5201V11.7526C7.97246 12.3076 8.42246 12.7651 8.98496 12.7651C9.53996 12.7651 9.99746 12.3151 9.99746 11.7526V11.5201C9.99746 10.9651 10.4475 10.5076 11.01 10.5076C11.565 10.5076 12.0225 10.9576 12.0225 11.5201V11.7526C12.0225 12.3076 12.4725 12.7651 13.035 12.7651C13.59 12.7651 14.0475 12.3151 14.0475 11.7526V11.5201C14.0475 10.9651 14.4975 10.5076 15.06 10.5076H15.3975"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M6 3.75V2.25"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M12 3.75V2.25"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9 3.75V1.5"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span className="title_text">Birthday</span>
                          </div>
                        </div>
                        <div className="birthday_card_item_details">
                          <div className="user_birthday">
                            <Button
                              className="user_btn_name"
                              type="primary"
                              shape="circle"
                            >
                              SP
                            </Button>
                            <div className="name">Snehal Patil</div>
                          </div>
                          <div className="birthday_date">12/02/24</div>
                        </div>
                      </div>
                      <div className="appointment_card_item">
                        <div className="appointment_card_header">
                          <div className="title">
                            <CalendarOutlined
                              style={{ color: "#003399", fontSize: 16 }}
                            />
                            <span className="title_text">Appointment</span>
                          </div>
                          <div className="appointment_time">8:30 AM</div>
                        </div>
                        <div className="appointment_description">
                          Meeting with Shantung Kumar for collecting required
                          documents and discussing about the product.
                        </div>
                      </div>
                    </div>
                  </div>
                </SdWidgetCom>
              </Col>
              <Col className="col_widget">
                <SdWidgetCom
                  backgroundColorToDo={"#fff"}
                  headeColor={"#003399"}
                  title_header={"Resources"}
                  headerImgSrc={resource}
                >
                  <div
                    className="claims_body hScroll resource_card"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Row className="w-100 text-center text-primary">
                      <Col span={8} className="p-0 border-right">
                        <div className="resource_card_item">
                          <div className="loan_eligibility_icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="30"
                              viewBox="0 0 32 30"
                              fill="none"
                            >
                              <path
                                d="M14.0541 24.8634H7.36213C2.71307 24.8634 1.53442 23.6233 1.53442 18.6769V7.09307C1.53442 2.61173 2.50356 1.17432 6.15733 0.948845C6.52402 0.934753 6.92997 0.920654 7.36213 0.920654H21.9117C26.5608 0.920654 27.7394 2.16077 27.7394 7.10716V13.3219"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M30.4979 23.4553C30.4979 24.5122 30.2021 25.5127 29.6809 26.3583C28.709 27.993 26.9201 29.0922 24.8636 29.0922C22.807 29.0922 21.0182 27.993 20.0462 26.3583C19.5251 25.5127 19.2292 24.5122 19.2292 23.4553C19.2292 20.3409 21.7506 17.8184 24.8636 17.8184C27.9765 17.8184 30.4979 20.3409 30.4979 23.4553Z"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M22.6631 23.8009L24.0039 25.5705L26.8888 22.0491"
                                stroke="#003399"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M15.8483 9.53058H8.68484C8.2924 9.53058 7.99741 9.85894 7.99741 10.2627C7.99741 10.6665 8.2924 10.9948 8.68484 10.9948H15.5766C15.1641 11.8135 14.3718 12.3554 13.4577 12.3554H8.68484C8.2924 12.3554 7.99741 12.6837 7.99741 13.0875C7.99741 13.4912 8.2924 13.8196 8.68484 13.8196H11.6843L16.2573 20.4727L16.2573 20.4727L16.2587 20.4746C16.4052 20.6773 16.6 20.7729 16.817 20.7729C16.9692 20.7729 17.0993 20.7251 17.2241 20.6356L17.2241 20.6357L17.2277 20.6328C17.5482 20.3799 17.5869 19.9254 17.3776 19.6101L17.3776 19.6101L17.3767 19.6088L13.4092 13.8393H13.4393C15.1348 13.8393 16.5485 12.6544 17.0388 11.0343H19.4053C19.7978 11.0343 20.0928 10.706 20.0928 10.3022C20.0928 9.9006 19.7998 9.57009 19.4237 9.57009H17.2244C17.1719 8.67591 16.8546 7.84844 16.3501 7.20212H19.4237C19.8161 7.20212 20.1111 6.87377 20.1111 6.47001C20.1111 6.06624 19.8161 5.73789 19.4237 5.73789H8.68484C8.30085 5.73789 7.99741 6.01805 7.99741 6.4305C7.99741 6.83426 8.2924 7.16261 8.68484 7.16261H13.4577C14.7052 7.16261 15.7471 8.20445 15.8483 9.53058Z"
                                fill="#003399"
                                stroke="#003399"
                                stroke-width="0.2"
                              />
                            </svg>
                          </div>

                          <div className="placeholder">Loan Eligibility</div>
                        </div>
                      </Col>
                      <Col span={8} className="p-0 border-right">
                        <div className="resource_card_item">
                          <div className="product_catelog_icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                            >
                              <path
                                d="M22.6667 17.8666V21.8666C22.6667 27.1999 20.5334 29.3333 15.2001 29.3333H10.1334C4.80008 29.3333 2.66675 27.1999 2.66675 21.8666V16.7999C2.66675 11.4666 4.80008 9.33325 10.1334 9.33325H14.1334"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M22.6666 17.8666H18.4C15.2 17.8666 14.1333 16.7999 14.1333 13.5999V9.33325L22.6666 17.8666Z"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M15.4666 2.66675H20.7999"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.33325 6.66675C9.33325 4.45341 11.1199 2.66675 13.3333 2.66675H16.8266"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M29.3333 10.6667V18.9201C29.3333 20.9867 27.6533 22.6667 25.5867 22.6667"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M29.3333 10.6667H25.3333C22.3333 10.6667 21.3333 9.66675 21.3333 6.66675V2.66675L29.3333 10.6667Z"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="placeholder">Product Catalogue</div>
                        </div>
                      </Col>
                      <Col span={8} className="p-0">
                        <div className="resource_card_item">
                          <div className="emi_calculator_icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="33"
                              height="32"
                              viewBox="0 0 33 32"
                              fill="none"
                            >
                              <rect
                                x="4.08325"
                                y="2.08325"
                                width="25.1667"
                                height="27.8333"
                                rx="4.25"
                                stroke="#003399"
                                stroke-width="1.5"
                              />
                              <path
                                d="M23.6665 9.25V10.75C23.6665 11.98 22.6243 13 21.3332 13H11.9998C10.7243 13 9.6665 11.995 9.6665 10.75V9.25C9.6665 8.02 10.7087 7 11.9998 7H21.3332C22.6243 7 23.6665 8.005 23.6665 9.25Z"
                                stroke="#003399"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <circle
                                cx="11.9165"
                                cy="18.25"
                                r="1.25"
                                fill="#003399"
                              />
                              <circle
                                cx="16.6165"
                                cy="18.25"
                                r="1.25"
                                fill="#003399"
                              />
                              <circle
                                cx="21.4165"
                                cy="18.25"
                                r="1.25"
                                fill="#003399"
                              />
                              <circle
                                cx="11.9165"
                                cy="23.75"
                                r="1.25"
                                fill="#003399"
                              />
                              <circle
                                cx="16.6165"
                                cy="23.75"
                                r="1.25"
                                fill="#003399"
                              />
                              <circle
                                cx="21.4165"
                                cy="23.75"
                                r="1.25"
                                fill="#003399"
                              />
                            </svg>
                          </div>
                          <div className="placeholder">EMI calculator</div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </SdWidgetCom>
              </Col>
            </Row>
          </div>
        </Col>
      </div>
    </>
  );
};

export default CreditxDashboard;
