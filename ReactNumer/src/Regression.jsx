import { index } from "mathjs";
import React, { useState } from "react";
import { Container, Form ,Table,Button} from "react-bootstrap";


const Regres =()=>{
    const [N,setN] = useState(0);
    const [Arr,setArr] = useState([]);
    const [Ans,setAns] =useState([]);

    const inputN = (event) =>{
       
        setArr(new Array(parseInt((event.target.value))).fill(0))
    }
    return(
        <Container>
                <Form>
                    <h1>Regression</h1>
                    <Form.Group className="mb-3">
                        <Form.Label>Input N</Form.Label>
                        <Form.Control type="number" id="N" onChange={inputN} style={{width :"20%" ,margin:"0"}} className="form-control"></Form.Control>
                    
                    </Form.Group>
                    <Container classmane="inputArray">
                            <Table striped bordered hover variant="dark">
                            {Arr.map((element,index) =>{
                                return(
                                    <tr className="inN">
                                        <td key={"A" + index}>
                                            <center>
                                                <input type="number" id={"A" + index} placeholder={"X" + index} style={{width:"80%"}}></input>
                                            </center>
                                        </td>
                                        <td key={"B" + index}>
                                            <center>
                                                <input id={"B" + index} placeholder={"F(x)" + index} style={{width:"80%"}}></input>
                                            </center>
                                        </td>
                                    </tr>
                                )
                            }
                            )
                            }
                            </Table>
                        </Container>
                        <Button variant='dark' /*{onClick={CalRoot}}*/>
                            Calculate
                        </Button>   
                </Form>
        </Container>
    )
}

export default Regres