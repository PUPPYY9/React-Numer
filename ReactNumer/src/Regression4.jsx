import { create, index, log } from "mathjs";
import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { Line } from "react-chartjs-2";

const Regression4=()=>{
    
    const [N,setN] = useState(0);
    const [Arr,setArr] = useState([]);
    const [Num1,setNum1] = useState(0);
    const [Num2,setNum2] = useState(0);
    const [Ans,setAns] = useState(0);
    const [Arr1,setArr1] = useState([]);
    const [Arr2,setArr2] = useState([]);
    
    //let n=0;
    const input =(event)=>{
        setN(parseInt(event.target.value))
        //n=event.target.value
        setArr(new Array(parseInt(event.target.value)).fill(0))
        console.log("N= "+N);
    }

    const inputNum1 =(event,N)=>{
        const Arr1=[N];
        setNum1(parseFloat(event.target.value))
        //setArr1(parseInt(event.target.value) )
        console.log(event.target.value);

        Arr1.push(event.target.value)
        // for(let i =0 ; i<N ;i++){
        //     Arr1.push(event.target.value)
        // }
        console.log(Arr1);
    }
    const inputNum2=(event)=>{
        setNum2(parseFloat(event.target.value))
        setArr2(new Array(parseInt(event.target.value)))
        console.log(event.target.value);
    }

    const CalPlus=()=>{
        let Ans = Num1 + Num2
        console.log(Ans);

        setAns(Ans)
    }

    return(
        <Container>
            <Form>
                <h2>Regression 4</h2>
                <Form.Label> Input N </Form.Label>
                <input type="number" id="N" onChange={input} style={{width:"20%"}}></input>
                <Table>
                    {Arr.map((index)=>{
                        return(
                            <thead>
                                <tr>
                                    
                                    <th key={"A" + index}>
                                        <input type="number"  id={"A" + index} onChange={inputNum1}></input>
                                    </th>
                                    <th key={"B" + index}>
                                        <input type="number" id={"B" + index}onChange={inputNum2}></input>
                                    </th>
                                    <th>{Ans}
                                    </th>
                                </tr>
                            </thead>
                        )
                    })}
                </Table>
                <Button onClick={CalPlus}>
                    Calcurate
                </Button>
            </Form>
        </Container>
    )
}

const TestCreateTable = () => {
    let numgen = 0;
    const [table, setTable] = useState();
    const giventable = [];
    const createtable = (numgen) => {
      let tablex = [];
      let tabley = [];
      for (let i = 0; i < numgen; i++) {
        tablex.push(
          <div>
            <input placeholder={"value x" + (i + 1)} />
          </div>
        );
        tabley.push(
          <div>
            <input placeholder={"value y" + (i + 1)} />
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
            <div style={{ display: "flex" }}>
              <div>{data.a}</div>
              <div>{data.b}</div>
            </div>
          ))}
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
      <div>
        Number
        <input onChange={inputnum} />
        {table}
      </div>
    );
  };

const Re4=()=>{

    const [N,setN] = useState(0);
    const [table,settable] = useState();
    let numgen
    const giventable = [];
    //let tablex = [];
    //let tabley = [];
    let [tablex,settablex] = useState()
    let [tabley,settabley] = useState([])
    let [tablez,settablez] = useState([]);
    const [showtable, setShowtable] = useState();
    let [matrixZ,setmatrixZ] = useState([]);
    
     
    function initialX(e,i){
        //let copy = [...matrixX]
        tablex[i]= +e.target.value
        //matrixX = copy
        console.log("X = "+tablex)
        settablex(tablex)
    }

    const initialY=(e,i)=>{
        //let copy = [...matrixY]
        tabley[i] =+ e.target.value
        //matrixY= copy
        console.log("Y ="+tabley)
        settabley(tabley)
        
    }


    const createTable = (numgen) => {
        tablex=[];
        tabley=[];
        for (let i = 0; i < numgen; i++) {
          tablex.push(
            <div>
              <input  placeholder={"value x" + (i + 1)}  onChange={(e) => initialX(e,i)}/>
            </div>
          );
          tabley.push(
            <div>
              <input  placeholder={"value y" + (i + 1)}  onChange={(e) => initialY(e,i)}/>
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
              //style={{ display: "flex" }} ทำให้ input x,y อยู่ติดกัน
              <div style={{ display: "flex" }}>
                <div>{data.a}</div>
                <div>{data.b}</div>
              </div>
            ))}

          </div>
        );
      };

      const cal = ()=>{
        let i;
        console.log(N);
        for(i = 0;i < N ; i++ ){
            console.log("tablex =",tablex[i]);
            console.log("tabley=",tabley[i]);
            matrixZ[i]= tablex[i]+tabley[i]
            console.log("Z",i,"=",matrixZ[i]);
        }
        setShowtable(showanswer(matrixZ))
      }

      const getAns =(matrixZ)=>{
        console.log(matrixZ);
        return(
            <div>
                {matrixZ.map((data)=>{
                    return(
                        <div>
                            <input  value={data}></input> 
                            {/* {data} */}
                        </div>
                    );
                })}
            </div>
        );
      };

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

      const config = {
        labels: tablex,
        datasets: [
          {
            axis: "y",
            label: "b",
            data: tabley,
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
            tension: 0.1,
          },
        ],
      };
      

    const inputN=(event)=>{
        numgen = event.target.value   
        setN(numgen)
        //console.log("N = " + N);
        console.log("n = " + numgen);
        createTable(numgen); //
        //console.log();
        console.log("x"+tablex);
        console.log("y"+tabley);
        settable(result())
        
    }

    return(
        <Container >
            <Form>
                <h1>X + Y = Z</h1>
                <Form.Label>Input N</Form.Label>
                <input type="number" id="N" onChange={inputN}></input>
                <Table>
                  <div>
                    {/* show Table of N*/ }
                    <td>{table}</td>
                    {/* show Table of Calcucate*/ }    
                    <td style={{ margin: ".4em" }}>{showtable}</td>
                  </div>
                </Table>
                
            </Form>
            {/* <button onClick={()=>{cal()}}> Calculate </button>  */}
            <button onClick={cal}> Calculate </button> 
            <Line data={config}/>            
        </Container>
    )
}

//export default Regression4
export default Re4