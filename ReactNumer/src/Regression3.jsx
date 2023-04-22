import { index } from "mathjs";
import { useState } from "react"
import { Container, Form, Table } from "react-bootstrap";

const Regression3=()=>{

    const [N,setN] = useState(0);
    const [Arr,setArr] = useState([]);

    const inputN =(event)=>{
        setN(parseInt(event.target.value))
        setArr(new Array(parseInt(event.target.value)).fill(0));
    }

    return(
        <Container>
            <Form>
                
                    <Form.Label> Input N</Form.Label>
                    <input type="number" id="N" onChange={inputN} ></input>

                    <Table>
                        {Arr.map((Element,index)=>{
                            return(
                                <thead>
                                    <tr>
                                        <th key={"A" +index}>
                                            <input type="number" id={"A" + index} style={{width:"80%"}}></input>
                                        </th> 
                                        <th key={"B" +index}>
                                            <input type="number" id={"B" + index} style={{width:"80%"}}></input>
                                        </th>                                    
                                    </tr>                                                                
                                </thead>
                            )
                        })}
                    </Table>
                
            </Form>
        </Container>
    )

}

export default Regression3