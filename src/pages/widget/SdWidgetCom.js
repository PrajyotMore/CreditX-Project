import React from "react";
import { ExportOutlined } from "@ant-design/icons";
import "./sdwidgetcom.css";
import { Link, Route } from "react-router-dom";
// import Hscroll from "./Hscroll";
import exportoutlined from "../../assets/image/Group 427318820.png"

const SdWidgetCom = ({
  backgroundColorToDo,
  title_header,
  toRoute,
  children,
  headerIcon,
  headeColor,
  count,
  headerImgSrc,
}) => {
  return (
    <>
      <div
        className="activityTrackerWidget3"
        style={{
          backgroundColor: backgroundColorToDo ? backgroundColorToDo : "#000",
        }}
      >
        <Link
          to="/Application-Listing"
          className="text-muted w-100"
          style={{ padding: "0 16px" }}
        >
          <div className="header2" style={{ background: "#DEE9FF" }}>
            {headerIcon ? (
              headerIcon
            ) : (
              <img
                className="activity1Icon2"
                alt=""
                src={headerImgSrc ? headerImgSrc : "/activity-11.svg"}
              />
            )}
            <div
              className="widgetInfo"
              style={{
                // backgroundColor: backgroundColorToDo,
                color: headeColor,
              }}
            >
              <div className="title">
                {title_header ? title_header : "To Do"}
              </div>
              {count && (
                <div
                  className="counter"
                  style={{ color: "#039", background: "#fff" }}
                >
                  <b className="rajatMishra">{count ? count : 10}</b>
                </div>
              )}
              <img className="launch1Icon2" alt="" src="/launch-1.svg" />
            </div>
            <div>
              <img src={exportoutlined} />
            </div>
          </div>
        </Link>
        <div className="body">
          {/* <div
            // horizontal scroll using ref
            // ref={scrollRef}
            className="hScroll"
          >
            <div className="mainColumn11">
              <div className="toDoList6">
                <div className="toDoListInner">
                  <div className="overdue121220191230PParent">
                    <div className="overdue121220196">
                      12/01/2023 : 12:30 PM
                    </div>
                    <div className="alerts">
                      <div className="alertsChild" />
                      <div className="high">High</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent2">
                  <div className="frameWrapper">
                    <div className="groupWrapper">
                      <img
                        className="frameChild11"
                        alt=""
                        src="/rectangle-1719.svg"
                      />
                    </div>
                  </div>
                  <div className="itIsA6">
                    Design meeting arrangement for TaTa B2B and promote sales
                    drive with tata.
                  </div>
                </div>
              </div>
              <div className="toDoList6">
                <div className="toDoListInner">
                  <div className="overdue121220191230PParent">
                    <div className="overdue121220196">
                      12/01/2023 : 12:30 PM
                    </div>
                    <div className="alerts">
                      <div className="alertsChild" />
                      <div className="high">High</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent2">
                  <div className="frameWrapper">
                    <div className="groupWrapper">
                      <img
                        className="frameChild11"
                        alt=""
                        src="/rectangle-1719.svg"
                      />
                    </div>
                  </div>
                  <div className="itIsA6">
                    Design meeting arrangement for TaTa B2B and promote sales
                    drive with tata.
                  </div>
                </div>
              </div>
              <div className="toDoList6">
                <div className="toDoListInner">
                  <div className="overdue121220191230PParent">
                    <div className="overdue121220196">
                      12/01/2023 : 12:30 PM
                    </div>
                    <div className="alerts">
                      <div className="alertsChild" />
                      <div className="high">High</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent2">
                  <div className="frameWrapper">
                    <div className="groupWrapper">
                      <img
                        className="frameChild11"
                        alt=""
                        src="/rectangle-1719.svg"
                      />
                    </div>
                  </div>
                  <div className="itIsA6">
                    Design meeting arrangement for TaTa B2B and promote sales
                    drive with tata.
                  </div>
                </div>
              </div>
            </div>
            <div className="mainColumn11">
              <div className="toDoList6">
                <div className="toDoListInner">
                  <div className="overdue121220191230PParent">
                    <div className="overdue121220196">
                      12/01/2023 : 12:30 PM
                    </div>
                    <div className="alerts">
                      <div className="alertsChild" />
                      <div className="high">High</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent2">
                  <div className="frameWrapper">
                    <div className="groupWrapper">
                      <img
                        className="frameChild14"
                        alt=""
                        src="/launch-1.svg"
                      />
                    </div>
                  </div>
                  <div className="itIsA6">
                    Design meeting arrangement for TaTa B2B and promote sales
                    drive with tata.
                  </div>
                </div>
              </div>
              <div className="toDoList6">
                <div className="toDoListInner">
                  <div className="overdue121220191230PParent">
                    <div className="overdue121220196">
                      12/01/2023 : 12:30 PM
                    </div>
                    <div className="alerts">
                      <div className="alertsChild" />
                      <div className="high">High</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent2">
                  <div className="frameWrapper">
                    <div className="groupWrapper">
                      <img
                        className="frameChild14"
                        alt=""
                        src="/launch-1.svg"
                      />
                    </div>
                  </div>
                  <div className="itIsA6">
                    Design meeting arrangement for TaTa B2B and promote sales
                    drive with tata.
                  </div>
                </div>
              </div>
              <div className="toDoList6">
                <div className="toDoListInner">
                  <div className="overdue121220191230PParent">
                    <div className="overdue121220196">
                      12/01/2023 : 12:30 PM
                    </div>
                    <div className="alerts">
                      <div className="alertsChild" />
                      <div className="high">High</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent2">
                  <div className="frameWrapper">
                    <div className="groupWrapper">
                      <img
                        className="frameChild14"
                        alt=""
                        src="/launch-1.svg"
                      />
                    </div>
                  </div>
                  <div className="itIsA6">
                    Design meeting arrangement for TaTa B2B and promote sales
                    drive with tata.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <Hscroll /> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default SdWidgetCom;
