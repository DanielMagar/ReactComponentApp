import React from "react";

const SignupInfo = ({ formData, setFormData }) => {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({
            ...formData,
            email: event.target.value,
          })
        }
      />
      <input type="text" placeholder="password..."  value={formData.password}
        onChange={(event) =>
          setFormData({
            ...formData,
            password: event.target.value,
          })
        }/>
      <input type="text" placeholder="confirm password..."  value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({
            ...formData,
            confirmPassword: event.target.value,
          })
        } />
    </div>
  );
};

export default SignupInfo;
