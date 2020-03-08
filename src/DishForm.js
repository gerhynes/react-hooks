import React from "react";
import { useBodyScrollLock } from "./hooks/useBodyScrollLock";

const DishForm = () => {
  useBodyScrollLock();
  return (
    <div className="dish-card">
      <form>
        <div className="form-row">
          <label htmlFor="name">Name of Dish</label>
          <input type="text" id="name" />
        </div>
      </form>
    </div>
  );
};

export default DishForm;
