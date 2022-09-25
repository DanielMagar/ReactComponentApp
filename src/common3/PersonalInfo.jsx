import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="firstname..."
        value={formData.firstName}
        onChange={(event) =>
          setFormData({ ...formData, firstName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="lastname..."
        value={formData.lastName}
        onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="username..."
        value={formData.userName}
        onChange={(event) =>
          setFormData({ ...formData, userName: event.target.value })
        }
      />
    </div>
  );
};

export default PersonalInfo;
