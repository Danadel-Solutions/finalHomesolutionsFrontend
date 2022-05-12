import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { listProperties } from "../actions/propertyActions";
import Loader from "../UI/Loader";
const FeaturedProjects = ({ propertyList }) => {
  return (
    <Container className="featured-projects mt-5">
      <h5 className="topic">Featured Projects</h5>
      <Row xs={1} sm={2} lg={3} className="g-6">
        {propertyList.loading && <Loader />}
        {propertyList.error && <p>Error</p>}
        {propertyList.properties &&
          propertyList.properties.map((project) => (
            <Col key={project.id}>
              <Card className="mb-3">
                <Link to={`properties/${project.id}`}>
                  <Card.Img variant="top" src={project.cover_photo} />
                </Link>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 700 }}>
                    {project.first_title}
                  </Card.Title>
                  <Card.Text>
                    <i className="fa-solid fa-location-dot"></i>
                    {project.location}
                  </Card.Text>
                  <NumberFormat
                    value={project.price}
                    className="text-primary fw-bold"
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"NGN"}
                    renderText={(value, props) => <div {...props}>{value}</div>}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default FeaturedProjects;
