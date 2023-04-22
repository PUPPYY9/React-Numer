import React from "react";
import { useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { det, parse, pow, inv, im, index } from "mathjs";

const Regression = () => {
  let numgen = 0;
  let results = [];

  const giventable = [];
  const [table, setTable] = useState();
  const [showtable, setShowtable] = useState();

  const createtable = (numgen) => {
    let tablex = [];
    let tabley = [];
    for (let i = 0; i < numgen; i++) {
      tablex.push(
        <div>
          <input id={"rowx" + i} placeholder={"value x" + (i + 1)} />
        </div>
      );
      tabley.push(
        <div>
          <input id={"rowy" + i} placeholder={"value y" + (i + 1)} />
        </div>
      );
    }
    giventable.push({ a: tablex, b: tabley });
  };

  const result = () => {
    console.log("numgen: ", numgen);
    console.log(giventable);
    return (
      <div>
        {giventable.map((data) => (
          <div style={{ display: "flex" } }>
            <div>{data.a}</div>
            <div>{data.b}</div>
          </div>
        ))}
        <input type="button" value={"cal"} onClick={gotoCal} />
      </div>
    );
  };

  const cal = () => {
    let a = [];
    let b = [];
    for (let i = 0; i < numgen; i++) {
      a[i] = document.getElementById("rowx" + i).value;
      b[i] = document.getElementById("rowy" + i).value;
      results[i] = a[i] * b[i];
    }
    console.log(a, b);
    console.log(results);
    return results;
  };

  const gotoCal = () => {
    let ans = cal();
    setShowtable(showanswer(ans));
  };

  const showanswer = (answer) => {
    console.log(answer);
    return (
      <div>
        {answer.map((data, index) => {
          return (
            <div>
              {/* <span style={{ marginRight: "10px" }}>{index + 1}</span> */}
              {data}
            </div>
          );
        })}
      </div>
    );
  };

  const inputnum = (event) => {
    numgen = event.target.value;
    console.log(numgen);
    createtable(numgen);
    setTable(result());
  };

  return (
    <Container className="mb-4">
    <div>
      Number
      <input type="number" onChange={inputnum} />
      <div style={{ display: "flex" }}>
        {table}
        {showtable}
      </div>
    </div></Container>
  );
};

export default Regression;

