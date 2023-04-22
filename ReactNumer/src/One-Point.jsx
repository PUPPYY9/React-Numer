import { log } from 'mathjs';
import React, { useState } from 'react';
import { Button, Container, Form, Table } from 'react-bootstrap';


const OP =()=>{
  const print =()=>{
      console.log(data);
      setValueIter(data.map((x)=>x.Iteration));
      setValueX0(data.map((x)=>x.X0));
      setValueX1(data.map((x)=>x.X1));
      //setEr(data.map((x)=>er))
      return(
          <Container>
            <Table striped bordered hover variant="dark">
              <thead>
                  <tr>
                    <th width="10%">Iteration </th>
                    <th width="30%">X1</th>
                    <th width="30%">error</th>
                  </tr>
              </thead>
              <tbody>
                  {data.map((element,index)=>{
                    return (
                      <tr key={index}>
                        <td>{element.Iteration}</td>
                        <td>{element.X1}</td>
                        <td>{element.error}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </Table>
          </Container>
      );
  }

  //cal error
  const error =(x0,x1)=>{
    return Math.abs((x1-x0)/x1)*100};
  //funtion
  const f=(x)=>{
    return (x/2)+(1/4)}
  //cal
  const CalOP =()=>{
    let X0=0,X1;
    let e = 0.000001,ea;
    let i=0;
    let obj={};
    do{
      console.log("Iteration:",i)
      X1 = f(X0)
      console.log("x1 =",X1);
      // e=Math.abs((X1-X0)/X1)*100
      ea = error(X0,X1)
      console.log("error = ",ea);
      obj={
        Iteration:i,
        X1:X1,
        error:ea
      }
      data.push(obj)
      X0 =X1;
      i++;
      
    }while(ea > e);
    console.log(obj);
    setX(X0)

  }

  const data =[];
  const [valueIter,setValueIter] = useState([]);
  const [valueX0,setValueX0] = useState([])
  const [ValueX1,setValueX1] = useState([])

  const [html,setHtml] = useState(null);
  const [Equation,setEquation] = useState("(x/2)+(1/4)")
  const [X,setX] = useState(0)
  const [X0,setX0]  = useState(0)
  const [X1,setX1] = useState(0)

  const inputEquation = (event) =>{
    console.log(event.target.value);
    setEquation(event.target.value)
  }

  const inputX0 = (event) =>{
    console.log(event.target.value);
    setX0(event.target.value)
  }

  const inputX1 = (event) =>{
    console.log(event.target.value);
    setX1(event.target.value)
  }

  const CalRoot =() =>{
    const x0num = parseFloat(X0)
    const x1num = parseFloat(X1)
    CalOP(x0num,x1num);

    setHtml(print());

    console.log(valueIter);
    console.log(ValueX1);
  }

  return(
        <Container>
          <Form>
              <Form.Group className='mb-3'>
                  <Form.Label>Input f(x)</Form.Label>
                  <Form.Control type='text' id="equation" value={Equation} onChange={inputEquation} style={{width:"20%" , margin:"0"}} className='from-control'></Form.Control>
                  <br></br>
                  <Form.Label>Input X0</Form.Label>
                  <Form.Control type="number" id="X0" onChange={inputX0} style={{width:"20%", margin:"0 "}} className="form-control"></Form.Control>
                  {/*<Form.Label>Input X1</Form.Label>
                  <input type='number' id='X1' onChange={inputX1} style={{width:"20%" , margin:"0 auto"}} className='from-control'></input>
                  */}
              </Form.Group>
              <Button variant='dark' onClick={CalRoot}>
                Calculate
              </Button>
          </Form>
          <br></br>
          {/*<h5>Answer = {X.toPrecision(7)}</h5>*/}
          <h5>Answer = {X }</h5>
          <Container>
            {html}
          </Container>
        </Container>
  ) 
}


export default OP