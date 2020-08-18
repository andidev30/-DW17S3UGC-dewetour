import React from 'react'
import { Row,
         Button,
         Container
    } from 'react-bootstrap'

function Search(){
    return(
        <div className="form-group mt-4">
            <small id="helpId" className="pl-0 ml-0 text-white">Find great places to holliday</small>
            
            <Container>
                <Row>
                    <input type="text" className="form-control col-11" aria-describedby="helpId" placeholder="Search" />
                    <Button variant="warning" className="text-white col-1">Search</Button>
                </Row>
            </Container>
        </div>
    )
}

export default Search