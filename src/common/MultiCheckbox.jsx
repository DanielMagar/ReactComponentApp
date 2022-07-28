import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import MultiCheckAtom from "../recoil/MultiCheckAtom";
import "boxicons";

const MultiCheckbox = () => {
  const [items, setItems] = useRecoilState(MultiCheckAtom);

  const [isChecked, setIsChecked] = useState(false);

  const [checkedState, setCheckedState] = useState(
    new Array(items.length).fill(false)
  );
  const [total, setTotal] = useState(0);

  const [count, setCount] = useState(0);

  const handleOnChange = (position) => {
    // console.log("Index Checked", position);
    console.log("Checked State length", checkedState);

    const updatedCheckedState = checkedState.map((item, index) =>
      index == position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    if (updatedCheckedState.every((element) => element === true)) {
      setIsChecked(!isChecked);
    } else {
      setIsChecked(false);
    }

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + items[index].price;
        }
        return sum;
      },
      0
    );
    // The same code can be recode as the following
    /*
    let sum = 0;
    for (let i in updatedCheckedState) {
      console.log("for loop", updatedCheckedState[i]);
      if (updatedCheckedState[i] == true) {
        sum += items[i].price;
        console.log(sum);
      }
    }
    */

    setTotal(totalPrice);
  };

  const selectAll = () => {
    console.log("Selecting all");
    setIsChecked(!isChecked);
    console.log("isCheck ----------", isChecked);
    checkedState.fill(true);

    console.log("counting--", count);
    if (count <= checkedState.length) {
      setCount(checkedState.length);
    }

    let sum = 0;
    if (isChecked === false) {
      items.map((price, idx) => {
        sum += price.price;
        console.log("Sum of selecting all", sum);
      });
    } else {
      sum = 0;
      checkedState.fill(false);
      setCount(0);
    }

    setTotal(sum);
  };

  const clearAll = () => {
    setIsChecked(false);
    setCount(0);
    setTotal(0);
    checkedState.fill(false);
  };
  useEffect(() => {
    console.log(checkedState);
    if (count < checkedState.filter(Boolean).length) {
      setCount(count + 1);
    } else if (count > checkedState.filter(Boolean).length) {
      setCount(count - 1);
    }

    console.log();
  }, [checkedState, isChecked, count]);
  return (
    <>
      <div className="border rounder p-3">
        <div className="py-2 flex gap-3 items-center text-center">
          <i
            className="bx bxs-pizza"
            style={{ fontSize: "18px", color: "#BF873B" }}
          ></i>
          Select your pizza topping:
          {count > 0 ? (
            <div className="bg-teal-500 w-20  rounded text-white">
              {count} selected
            </div>
          ) : (
            ""
          )}
        </div>
        <hr />

        <div className="flex gap-1 items-center py-2">
          <div className="ml-2">
            <input
              type="checkbox"
              id="topping"
              className="cursor-pointer"
              name="topping"
              value="Paneer"
              checked={isChecked}
              onChange={selectAll}
            />
          </div>
          <div>Select all</div>
        </div>
        <div className="mt-1 align-text-bottom">
          {items.map((data, idx) => (
            <div className="flex p-2 gap-1 items-center text-left">
              <input
                type="checkbox"
                className="cursor-pointer"
                id={idx}
                name={data.name}
                value={data.name}
                checked={checkedState[idx]}
                onClick={() => handleOnChange(idx)}
              />
              <div className="flex justify-between">
                <div className=" w-[328px]"> {data.name}</div>

                <div className="flex  gap-1  ">
                  <div className="">
                    <i className="bx bx-dollar"></i>
                  </div>
                  <div className="text-left"> {data.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className="flex justify-between">
          <div className=" w-[335px]">Total:</div>
          <div>
            <i className="bx bx-dollar"></i>
            {total.toFixed(2)}
          </div>
        </div>
        <div className="flex">
          <a
            href="#"
            className="no-underline px-3 py-2 bg-teal-500 rounded text-white"
            onClick={clearAll}
          >
            Clear All
          </a>
        </div>
      </div>
    </>
  );
};

export default MultiCheckbox;
