import { Checkbox } from "antd";
import React from "react";
import "./TodoListItem.css";

const TodoListItem = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="list_item_card">
      <div class="list-card">
        <div class="list-card-inner">
          <div class="overdue-12122019-1230-p-parent">
            <div class="overdue-12122019">12/01/2023 : 12:30 PM</div>
            <div class="alerts">
              <div class="alerts-child"></div>
              <div class="high">High</div>
            </div>
          </div>
        </div>
        <div class="frame-parent">
          <Checkbox
            style={{ display: "flex", alignItems: "flex-start" }}
            className="list_card_checkbox"
            onChange={onChange}
          >
            Design meeting arrangement for TATA B2B and promote sales drive with
            tata.
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
