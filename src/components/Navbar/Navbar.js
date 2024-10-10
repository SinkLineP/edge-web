import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.scss";
import {useDispatch, useSelector} from "react-redux";
import {addDownloadCount} from "../../redux/Reducers/downloadSlice";
import {Form} from "react-bootstrap";

export default function NavbarHome() {
    const downloadsCount = useSelector((state) => state.downloads.countDownloads)
    const dispatch = useDispatch()

    const handleDownload = () => {
        // Create a sample text file
        const data = 'Hello, this is a sample file content!';
        const blob = new Blob([data], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);

        // Create an anchor element and trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.download = 'sample.txt'; // Specify the file name
        document.body.appendChild(link);
        link.click();

        // Cleanup: remove the link and revoke the object URL
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        dispatch(addDownloadCount());
    };

    return (
        <Navbar className={"navbar-shadow"} expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#">EDGE</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Главная</Nav.Link>
                        <Nav.Link href="#action2">Новости</Nav.Link>
                    </Nav>

                    <Form className="d-flex">
                        <Nav.Item className={"downloads no-select"} href="#action1" disabled={false}>Загрузок: {downloadsCount}</Nav.Item>
                        <Button variant="warning" onClick={handleDownload}><b>Загрузить игру</b></Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

