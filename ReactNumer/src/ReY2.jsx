import React from "react";
import { useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { det, parse, pow, inv, im, index } from "mathjs";
import "./App.css";
import { Scatter,Line } from "react-chartjs-2"; //กกราฟ
import { CategoryScale, Chart, registerables } from "chart.js"; //กกราฟ

Chart.register(CategoryScale); //กกราฟ
Chart.register(...registerables); //กกราฟ

const RegressionYel2 = () => {
  let numgen = 0;
  let results = [];

  const giventable = [];      //เก็บข้อมูล
  const [table, setTable] = useState();
  const [showtable, setShowtable] = useState();
  const [a, setValuex] = useState([]);
  const [b, setValuey] = useState([]);

  const createtable = (numgen) => {
    let tablex = [];
    let tabley = [];
    for (let i = 0; i < numgen; i++) {
      tablex.push(
        <div>
          <input id={"rowx" + i} placeholder={" x" + (i + 1)} />
        </div>
      );
      tabley.push(
        <div>
          <input id={"rowy" + i} placeholder={" y" + (i + 1)} />
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
        <center>
          <Table>
            {/* <tr>
              <th>x</th>
              <th>fx</th>
              <th>x*fx</th>
            </tr> */}
            {giventable.map((data) => (
              <tr>
                <td>
                  <div>{data.a}</div>
                </td>
                <td>
                  <div>{data.b}</div>
                </td>
              </tr>
            ))}
          </Table>
          <input type="button" value={" Calculate "} onClick={gotoCal} />
          

        </center>
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
      
      dataX.push(a[i])
      console.log("dataX=",dataX);
      dataY.push(b[i])
    }
    console.log(a, b);
    console.log(results);
    return results;
  };

  const gotoCal = () => {
    let ans = cal();
    setShowtable(showanswer(ans));
  };

  // {index + 1} ของก้อนมาจิ้น
  const showanswer = (answer) => {
    console.log(answer);
    return (
      <div>
        {answer.map((data, index) => {
          return (
            <div>
              <input value={data}></input>
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

  //กร้าฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟฟ

  const [dataX, setdataX] = useState([]);
  const [dataY, setdataY] = useState([]);

  const datagraph = {
    labels: dataX,
    datasets: [
      {
        axis: "y",
        label: "b",
        data: dataY,
        borderColor: "#DB7093",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <Container className="mb-4">
      <form>
        <div>
          <h3>Regression</h3>
          <br></br>
          N <input type="number" onChange={inputnum} />
          <Table>
            <div className="rdiv">
              <td>{table}</td>
              <td style={{ margin: ".4em" }}>{showtable}</td>
            </div>
          </Table>
        </div>
      </form>
      <Line data={datagraph} />
    </Container>
  );
};

export default RegressionYel2;