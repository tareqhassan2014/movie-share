 import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdMenuOpen } from 'react-icons/md';
import { TiGroup } from 'react-icons/ti';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './dashboard.css';

const Dashboard = () => {

  const [show, setShow] = useState(false);
 
  const navigate = useNavigate();

 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ShowDashboard = useLocation().pathname;
  const ShowAdmin = useLocation().pathname;
  const [openDrawer, setOpenDrawer] = useState(false);

  const handlePagesClose = () => {
    if (openDrawer) {
      setOpenDrawer(false);
    }
    handleClose();
  }

  const handleClickPages = () => {
    if (openDrawer) {
      setOpenDrawer(false);
    } else {
      setOpenDrawer(true);
    }
  };
 

  return (
    <div
      className="dashboardFlex"
      style={{ height: "auto", backgroundColor: "#1A1A25" }}
    >
      <div
        className="handleNested text-center"
        style={{ backgroundColor: "#323246", color: "white" }}
      >
        <div className='positionHandleLogo'>
          <Link to='/dashboard pb-5 mb-5'>
            <h5 className='mt-4 mb-4'  >MOVIES SHEAR</h5>
          </Link>
          <hr className='hr text-light' />
        </div>
        <Navbar
          expand="sm"
          className="mb-3"
          style={{ marginTop: "60px", width: "245px" }}
          fixed="top"
        >
          <Container fluid style={{ color: "white" }}>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
            <Navbar.Offcanvas
              id={"offcanvasNavbar-expand-sm"}
              aria-labelledby={"offcanvasNavbarLabel-expand-sm"}
              placement="start"
              style={{ color: "white" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={"offcanvasNavbarLabel-expand-sm"}>
                  <span className='text-light'>DS Legends Pte. Ltd.</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='j_c_c p-0 m-0'>
                <Nav className="d-flex flex-column justify-content-center align-items-start handleNav  text-start">
                  <div className='dashboardRouteBox'>
                    <Nav.Link
                      className="dashboard_route_link mb-2 text-start"
                      id={ShowDashboard === '/dashboard' ? "idRouteBg" : ""}
                      as={HashLink}
                      to="/dashboard"
                      href='#dashboard'
                      onClick={() => handlePagesClose()}
                    >
                      <span className="pe-3 ps-3 fs-4">
                        <TiGroup ></TiGroup>
                      </span>{" "}
                      <span className="pe-3 dashboardNavs">Dashboard</span>
                    </Nav.Link>

                    <Nav.Link
                      href='#/dashboard/admin'
                      className="dashboard_route_link mb-2 text-start"
                      id={ShowAdmin === '/dashboard/movies' ? "idRouteBg" : ""}
                      as={HashLink}
                      to="/dashboard/movies"
                      onClick={() => handlePagesClose()}
                    >
                      <span className="pe-3 ps-3 fs-4">
                        <TiGroup></TiGroup>
                      </span>{" "}
                      <span className="pe-3 dashboardNavs">Manage MOVIES</span>
                    </Nav.Link>
                    <Nav.Link
                      href='#/dashboard/admin'
                      className="dashboard_route_link mb-2 text-start"
                      id={ShowAdmin === '/dashboard/orders' ? "idRouteBg" : ""}
                      as={HashLink}
                      to="/dashboard/orders"
                      onClick={() => handlePagesClose()}
                    >
                      <span className="pe-3 ps-3 fs-4">
                        <TiGroup></TiGroup>
                      </span>{" "}
                      <span className="pe-3 dashboardNavs">Manage orders</span>
                    </Nav.Link>
                    <Nav.Link
                      href='#/dashboard/admin'
                      className="dashboard_route_link mb-2 text-start"
                      id={ShowAdmin === '/dashboard/admin' ? "idRouteBg" : ""}
                      as={HashLink}
                      to="/dashboard/admin"
                      onClick={() => handlePagesClose()}
                    >
                      <span className="pe-3 ps-3 fs-4">
                        <TiGroup></TiGroup>
                      </span>{" "}
                      <span className="pe-3 dashboardNavs">Admins</span>
                    </Nav.Link> 
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
      <div className="handleNavbarSecond">
        <Navbar
          expand="lg"
          variant="dark"
          className="navIssue"
          collapseOnSelect

        >
          <Container fluid>
            <Container className="d-flex justify-content-between align-items-center">
              <div className='dashboard_header'>
                <MdMenuOpen
                  className="fs-3 text-light open_d_dashboard"
                  onClick={handleShow}
                ></MdMenuOpen>

                <button style={{ backgroundColor: '#f74545' }} class="button-34" role="button"><span> </span> <span className='ps-2'>Log Out</span></button></div>



              <div className="hanleMenuBarForRespo">
                <Offcanvas
                  show={show}
                  onHide={handleClose}
                  style={{ color: "white" }}
                >
                  <Offcanvas.Header className='text-light' closeButton>
                    <Offcanvas.Title className="text-light">
                      <Nav className="d-flex flex-column justify-content-center align-items-center handleNav mx-auto text-center">
                       {/* logo  */}
                      </Nav>

                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body
                    style={{ color: "white", marginTop: "-50px" }}
                  >
                    <hr />
                    <Nav className="d-flex flex-column justify-content-center align-items-center handleNav ps-0 ms-0">
                      <div className='boxTogoLink'>
                        <Nav.Link
                          className="text-start ps-3 pe-3 text-light"
                          id={ShowAdmin === '/dashboard' ? "idRouteBg" : ""}
                          as={HashLink}
                          to="/dashboard"
                          href="#dashboard"
                          onClick={() => handlePagesClose()}
                        >
                          <span className="me-2 fs-4">
                            <TiGroup></TiGroup>
                          </span>{" "}
                          <span style={{ fontSize: "medium" }}>DASHBOARD</span>
                        </Nav.Link>
                        <Nav.Link
                          className="ps-3 pe-3 text-light text-start"
                          id={ShowAdmin === '/dashboard/admin' ? "idRouteBg" : ""}
                          as={HashLink}
                          to="/dashboard/admin"
                          href="#admin"
                          onClick={() => handlePagesClose()}
                        >
                          <span className="me-2 fs-4">
                            <TiGroup></TiGroup>
                          </span>{" "}
                          <span style={{ fontSize: "medium" }}>Manage MOVIES</span>
                        </Nav.Link>
                        <Nav.Link
                          className="ps-3 pe-3 text-light text-start"
                          id={ShowAdmin === '/dashboard/movies' ? "idRouteBg" : ""}
                          as={HashLink}
                          to="/dashboard/movies"
                          href="#movies"
                          onClick={() => handlePagesClose()}
                        >
                          <span className="me-2 fs-4">
                            <TiGroup></TiGroup>
                          </span>{" "}
                          <span style={{ fontSize: "medium" }}>Manage MOVIES</span>
                        </Nav.Link>
                        <Nav.Link
                          className="ps-3 pe-3 text-light text-start"
                          id={ShowAdmin === '/dashboard/orders' ? "idRouteBg" : ""}
                          as={HashLink}
                          to="/dashboard/orders"
                          href="#orders"
                          onClick={() => handlePagesClose()}
                        >
                          <span className="me-2 fs-4">
                            <TiGroup></TiGroup>
                          </span>{" "}
                          <span style={{ fontSize: "medium" }}>Manage orders</span>
                        </Nav.Link>
                        <Nav.Link
                          className="ps-3 pe-3 text-light text-start"
                          id={ShowAdmin === '/dashboard/admin' ? "idRouteBg" : ""}
                          as={HashLink}
                          to="/dashboard/admin"
                          href="#admin"
                          onClick={() => handlePagesClose()}
                        >
                          <span className="me-2 fs-4">
                            <TiGroup></TiGroup>
                          </span>{" "}
                          <span style={{ fontSize: "medium" }}>admin</span>
                        </Nav.Link>
                      </div>
                    </Nav>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <div className="profile">
                <div className="imgDashDiv">
                </div>
              </div>
            </Container>
          </Container>
        </Navbar>

        <div className="handleOutlet_admin">
          <Outlet />
        </div>
        <Navbar className='dashboardFooter'>
          <Container fluid>
            <Container>
              <p className="text-light text-center pt-3">
                Copyright &copy; 2022 - DS Legends Pte. Ltd.
              </p>
            </Container>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Dashboard;