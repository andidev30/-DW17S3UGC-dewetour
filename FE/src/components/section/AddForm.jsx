import React from "react";
import { Form, Button, Col } from "react-bootstrap";

function AddForm() {
  return (
    <div className="mx-5">
      <Form>
        <Form.Group>
          <Form.Label className="font-weight-bold">Title Trip</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Country</Form.Label>
          <Form.Control as="select">
            <option></option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Accomondation</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Transportation</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Eat</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Duration</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control type="text" />
            </Col>
            <Col md={1}>
              <Form.Label className="font-weight-bold my-2">Day</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" />
            </Col>
            <Col>
              <Form.Label className="font-weight-bold my-2">Night</Form.Label>
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Label  className="font-weight-bold">Date Trip</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group>
          <Form.Label  className="font-weight-bold">Price</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label  className="font-weight-bold">Quota</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label  className="font-weight-bold">Description</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <Form.Group>
          <Form.Label  className="font-weight-bold">Image</Form.Label>
          <Form.File id="custom-file" label="Add Attachment" />
        </Form.Group>

        <div className="text-center pb-5">
          <Button variant="warning text-white" type="submit">
            Add Trip
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddForm;
