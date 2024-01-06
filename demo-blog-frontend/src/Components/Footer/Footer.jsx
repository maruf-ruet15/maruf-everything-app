import React from "react";
import { Col, Container, Row } from "react-bootstrap";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
    this.resizeHandler = this.resizeHandler.bind(this);
  }

  resizeHandler() {
    const height = this.header.clientHeight;
    this.setState({ height });
    this.props.onHeightChange(height);
  }

  componentDidMount() {
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  }

  render() {
    return (
        <div>
          <Container
              fluid
              className="fixed-bottom border-top"
              style={{ backgroundColor: '#002a36' }}
              ref={(footer) => {
                this.header = footer;
              }}
          >
            <Row>
              <Col>
                <p className="text-center text-white pt-3">
                  &copy; 2023 All right reserved by maruadon, Inc
                </p>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }

}

export default Footer;
