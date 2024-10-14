import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import img1 from './images/pizza1.jpg';
import img2 from './images/pizza2.jpg';
import img3 from './images/pizza3.jpg';
import menu1 from './images/menu1.jpg';
import menu2 from './images/menu2.jpg';
import menu3 from './images/menu3.jpg';
import menu4 from './images/menu4.jpg';

function MydModalWithGrid(props) {
   // Tạo state để lưu số lượng cho mỗi sản phẩm
   const [quantity1, setQuantity1] = useState(0);
   const [quantity2, setQuantity2] = useState(0);
   const [quantity3, setQuantity3] = useState(0);
   const [quantity4, setQuantity4] = useState(0);
 
   // Hàm tăng số lượng sản phẩm 1
   const incrementQuantity1 = () => {
     setQuantity1(prevQuantity => prevQuantity + 1);
   };
 
   // Hàm giảm số lượng sản phẩm 1
   const decrementQuantity1 = () => {
     setQuantity1(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
   };
 
   // Hàm tăng số lượng sản phẩm 2
   const incrementQuantity2 = () => {
     setQuantity2(prevQuantity => prevQuantity + 1);
   };
 
   // Hàm giảm số lượng sản phẩm 2
   const decrementQuantity2 = () => {
     setQuantity2(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
   };
   const incrementQuantity3 = () => {
    setQuantity3(prevQuantity => prevQuantity + 1);
  };

  // Hàm giảm số lượng sản phẩm 2
  const decrementQuantity3 = () => {
    setQuantity3(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };
  const incrementQuantity4 = () => {
    setQuantity4(prevQuantity => prevQuantity + 1);
  };

  // Hàm giảm số lượng sản phẩm 2
  const decrementQuantity4 = () => {
    setQuantity4(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header>
        {/* Button Login nằm bên trái và cách button Close 25px */}
       

        <Modal.Title id="contained-modal-title-vcenter">
          {props.isLoginModal ? "Login" : "Using Grid in Modal"}
        </Modal.Title>

        <Button variant="close" onClick={props.onHide} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </Button>
      </Modal.Header>

      <Modal.Body>
        <Container>
          {props.isLoginModal ? (
            <Row>
              <Col xs={12}>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </Col>
            </Row>
          ) : (
            <>
              <Row>
                <Col xs={12} md={8}>
                  Card Title 1
                </Col>
                <Col xs={6} md={4}>
                  <button className="btn btn-primary" onClick={incrementQuantity1}>+</button>
                  <span style={{ margin: '0 15px' }}>{quantity1}</span>
                  <button className="btn btn-danger"onClick={incrementQuantity1}>-</button>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={8}>
                  Card Title 2
                </Col>
                <Col xs={6} md={4}>
                  <button className="btn btn-primary" onClick={incrementQuantity2}>+</button>
                  <span style={{ margin: '0 15px' }}>{quantity2}</span>
                  <button className="btn btn-danger" onClick={incrementQuantity2}>-</button>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={8}>
                  Card Title 3
                </Col>
                <Col xs={6} md={4}>
                  <button className="btn btn-primary" onClick={incrementQuantity3}>+</button>
                  <span style={{ margin: '0 15px' }}>{quantity3}</span>
                  <button className="btn btn-danger" onClick={incrementQuantity3}>-</button>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={8}>
                  Card Title 2
                </Col>
                <Col xs={6} md={4}>
                  <button className="btn btn-primary" onClick={incrementQuantity4}>+</button>
                  <span style={{ margin: '0 15px' }}>{quantity4}</span>
                  <button className="btn btn-danger" onClick={incrementQuantity4}>-</button>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


function App() {
  const [index, setIndex] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null); 
  
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);
  const [quantity4, setQuantity4] = useState(0);

  const incrementQuantity1 = () => setQuantity1(prev => prev + 1);
  const decrementQuantity1 = () => setQuantity1(prev => (prev > 0 ? prev - 1 : 0));

  const incrementQuantity2 = () => setQuantity2(prev => prev + 1);
  const decrementQuantity2 = () => setQuantity2(prev => (prev > 0 ? prev - 1 : 0));

  const incrementQuantity3 = () => setQuantity3(prev => prev + 1);
  const decrementQuantity3 = () => setQuantity3(prev => (prev > 0 ? prev - 1 : 0));

  const incrementQuantity4 = () => setQuantity4(prev => prev + 1);
  const decrementQuantity4 = () => setQuantity4(prev => (prev > 0 ? prev - 1 : 0));
  

    const [items, setItems] = useState([]);
    const handleCardClick = (itemNumber) => {
      setSelectedItem(itemNumber);  // Lưu thông tin sản phẩm được chọn
      setModalShow(true);  // Mở modal
    };
  
    
    // Fetch dữ liệu từ API
    useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await fetch("https://api-demo-4gqb.onrender.com/users/login"); // API giả định
          const data = await response.json();
          setItems(data.slice(0, 5)); // Lấy 5 phần tử đầu tiên
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchItems();
    }, []); // Chỉ fetch một lần khi component mount
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    }
  

  return (
    <>
      <Container>
        <Row>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" disabled>
                    Link
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button 
                    variant="primary" 
                    onClick={() => { setIsLoginModal(false); setModalShow(true); }} 
                    style={{ marginRight: "20px" }}
                  >
                    Items
                  </Button>
                </Form>
              </Navbar.Collapse>
              <Row>
                <>
                  <Button 
                    variant="primary" 
                    onClick={() => { setIsLoginModal(true); setModalShow(true); }}
                  >
                    Login
                  </Button>

                  <MydModalWithGrid 
                    show={modalShow} 
                    onHide={() => setModalShow(false)} 
                    isLoginModal={isLoginModal} 
                  />
                </>
              </Row>
            </Container>
          </Navbar>
        </Row>
        <Row>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img src={img1} alt="First slide" style={{ cursor: 'pointer' }} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img2} alt="Second slide" style={{ cursor: 'pointer' }} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img3} alt="Third slide" style={{ cursor: 'pointer' }} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row className='mt-5'>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={menu1} onClick={() => handleCardClick(1)}/>
              <Card.Body>
                <Card.Title>Card Title 1</Card.Title>
                <Card.Text>
                           Quantity: {quantity1}
                        </Card.Text>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={menu2} onClick={() => handleCardClick(2)} />
              <Card.Body>
                <Card.Title>Card Title 2</Card.Title>
                <Card.Text>
                           Quantity: {quantity2}
                        </Card.Text>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={menu3} onClick={() => handleCardClick(3)} />
              <Card.Body>
                <Card.Title>Card Title 3</Card.Title>
                <Card.Text>
                           Quantity: {quantity3}
                        </Card.Text>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={menu4} onClick={() => handleCardClick(4)}/>
              <Card.Body>
                <Card.Title>Card Title 4</Card.Title>
                <Card.Text>
                           Quantity: {quantity4}
                        </Card.Text>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <MydModalWithGrid
        show={modalShow}
        onHide={() => setModalShow(false)}
        isLoginModal={isLoginModal}
        selectedItem={selectedItem} // Truyền item được chọn vào modal
        quantity1={quantity1}
        quantity2={quantity2}
        quantity3={quantity3}
        quantity4={quantity4}
        setQuantity1={setQuantity1}
        setQuantity2={setQuantity2}
        setQuantity3={setQuantity3}
        setQuantity4={setQuantity4}
      />
    </>
    
  );
};

export default App;
