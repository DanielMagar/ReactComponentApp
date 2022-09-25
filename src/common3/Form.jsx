import React, { useState } from "react";
import OtherInfo from "./OtherInfo";
import PersonalInfo from "./PersonalInfo";
import SignupInfo from "./SignupInfo";

const Form = () => {
  const [page, setPage] = useState(0);
  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    userName: "",
    nationality: "",
    other: "",
  });

  //Dynamically changing the body of a form

  const PageDisplay = () => {
    if (page == 0) {
      return <SignupInfo formData={formData} setFormData={setFormData} />;
    } else if (page == 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page == 2) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <SignupInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header border text-center p-5">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body border">{PageDisplay()}</div>
        <div className="footer ">
          <button
            className=""
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            className=""
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("Form submited");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page == FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
