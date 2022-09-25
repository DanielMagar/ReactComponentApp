import React from "react";

const OtherInfo = ({ formData, setFormData }) => {
  return (
    <div className="other-container flex flex-col">
      <input
        type="text"
        placeholder="nationality..."
        value={formData.nationality}
        onChange={(event) =>
          setFormData({ ...formData, nationality: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="other..."
        value={formData.other}
        onChange={(event) =>
          setFormData({ ...formData, other: event.target.value })
        }
      />
      {/* <input type="text" placeholder="username..." /> */}
    </div>
  );
};

export default OtherInfo;
