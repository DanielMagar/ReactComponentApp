import React, { useState, useEffect } from "react";

const userData = [
  { name: "Jivan", email: "jivs@gmail.com" },
  { name: "Amit", email: "amit@abc.com" },
  { name: "Danzee", email: "danz@abc.com" },
  { name: "Alina", email: "Alina@gmail.com" },
  { name: "Abdul", email: "abul@abc.com" },
  { name: "Rocky ", email: "rocky@rediffmail.com" },
  { name: "Tomtom", email: "tom@abc.com" },
];
const CheckBoxes = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "selectall") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      console.log(tempUser);
      setUsers(tempUser);
    }
  };
  const clearAll = () => {
    let tempUser = users.map((user) => {
      return { ...user, isChecked: false };
    });
    setUsers(tempUser);
  };
  return (
    <>
      <div>
        <form action="">
          <h3>Select Users</h3>
          <div>
            <label className="mx-2 cursor-pointer text-[16px] font-semibold color: text-purple-500">
              <input
                type="checkbox"
                id="all"
                name="selectall"
                onChange={handleChange}
                checked={
                  users.filter((user) => user?.isChecked != true).length < 1
                }
                className="mx-4 cursor-pointer"
              />
              Select All
            </label>
          </div>
          {users.map((data, index) => (
            <div
              className="flex items-center justify-start p-1 gap-[8rem]"
              key={index}
            >
              <div className="  border border-black">
                <label className="mx-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name={data.name}
                    onChange={handleChange}
                    checked={data.isChecked || false}
                    className="mx-4 cursor-pointer"
                  />
                  {data.name}
                </label>
              </div>
              {data.isChecked === true ? (
                <div className="border border-green-500 ">{data.email}</div>
              ) : (
                ""
              )}
            </div>
          ))}
          <div className="border-t p-3 flex justify-start text-left">
            <button
              className=" p-2 px-10 bg-teal-500 text-[white] cursor-pointer"
              onClick={clearAll}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-start items-center ">
        <div className="border border-black">lkdsnflknlkfn</div>
        <div className="border border-red-500">sfdsfdsfsfds</div>
      </div>
      <div className="flex justify-start items-center ">
        <div className="border border-black">lkdsnflknlkfnfdsfdsfdsfdsfd</div>
        <div className="border border-red-500">sfdsfdsfsfds</div>
      </div>
    </>
  );
};

export default CheckBoxes;
