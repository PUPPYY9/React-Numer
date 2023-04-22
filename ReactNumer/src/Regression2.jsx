import { index } from "mathjs";
import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";

const Regression2=()=>{
    const [Arr,setArr] = useState([]);
    const [N,setN] = useState(0);

    const inputN=(event)=>{
        setN(parseInt(event.target.value));

        setArr(new Array(parseInt((event.target.value))).fill(0))
    }
    return(
        <Container>
            <Form>
                <h1> Regression2 </h1>
                <Form.Group className="mb-3">
                        <Form.Label>Input N</Form.Label>
                        <Form.Control type="number" id="N" onChange={inputN}  style={{widyh:"20%" ,margin:"0"}} ></Form.Control>
                </Form.Group>
                <Container className="inputArray">
                    <Table>
                        {Arr.map((element,index)=>{
                            return(
                                <tr className="InN">
                                    <td key={"A" + index}>
                                        <center>
                                            <input id={"A" + index} placeholder={"X" + index} style={{width:"80%"}}></input>
                                        </center>
                                    </td>
                                    <td key={"B" + index}>
                                        <input id={"B" + index} placeholder={"F(x)" + index} style={{width:"80%"}}></input>
                                    </td>
                                </tr>
                            )
                        })}
                    </Table>
                    <Button>
                        Calcurate
                    </Button>
                </Container>
            </Form>
        </Container>
    )
}

export default Regression2