import "./App.css";
import CardComponent from "./cardComponent";
import { Container, Row, Col } from "react-bootstrap";

function App() {
    const listings = [
        {
            image: "https://a0.muscache.com/im/pictures/b7c9264d-73c9-45c3-882e-6e9577d63d68.jpg?im_w=720",
            location: "Drimnin, UK",
            host: "Individual Host",
            date: "16-21 Nov",
            price: "£994 total",
        },
        {
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720",
            location: "Ponta Delgada, Portugal",
            host: "Professional Host",
            date: "20-25 Nov",
            price: "£624 total",
        },
        {
            image: "https://a0.muscache.com/im/pictures/60d4058e-98a8-4f30-ba8a-93b101a31c47.jpg?im_w=720",
            location: "Pelkosenniemi, Finland",
            host: "Professional Host",
            date: "3-8 Jan",
            price: "£769 total",
        },
        {
            image: "https://a0.muscache.com/im/pictures/be42241a-5346-4745-a2ef-8cf7576f88b8.jpg?im_w=720",
            location: "Harlingen, Netherlands",
            host: "Professional Host",
            date: "27 Aug - 1 Sept",
            price: "£1640 total",
        },
        {
            image: "https://a0.muscache.com/im/pictures/26d3e96c-d296-41f3-a023-4bbf32e5bd5a.jpg?im_w=720",
            location: "Amsterdam, Netherlands",
            host: "Professional Host",
            date: "8-14 Jun",
            price: "£5960 total",
        },
        {
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-50166553/original/cd9af62c-590f-47a6-b37f-f28d8753ca0e.jpeg?im_w=720",
            location: "Wargnies-le-Petit, France",
            host: "Professional Host",
            date: "12-17 Jun",
            price: "£734 total",
        },
    ];

    const categories = [
        {
            icon: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
            text: "OMG!",
        },
        {
            icon: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
            text: "Rooms",
        },
        {
            icon: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
            text: "Cabins",
        },
        {
            icon: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
            text: "Amazing Views",
        },
        {
            icon: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
            text: "Treehouses",
        },
        {
            icon: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
            text: "Caves",
        },
        {
            icon: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
            text: "Mansions",
        },
        {
            icon: "https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg",
            text: "Shepherd's huts",
        },
        {
            icon: "https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg",
            text: "Boats",
        },
        {
            icon: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
            text: "Beachfront",
        },
        {
            icon: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
            text: "Amazing pools",
        },
        {
            icon: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
            text: "Luxe",
        },
        {
            icon: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
            text: "Countryside",
        },
        {
            icon: "https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg",
            text: "Barns",
        },
        {
            icon: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
            text: "Trending",
        },
        {
            icon: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
            text: "Islands",
        },
        {
            icon: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
            text: "Castles",
        },
    ];

    return (
        <div className="App">
            <div className="iconflex">
                {categories.map((category) => {
                    return (
                        <div className="icons">
                            <img src={category.icon} style={{ maxWidth: "30px" }} />
                            <div style={{ fontSize: "12px" }}>{category.text}</div>
                        </div>
                    );
                })}
            </div>

            <Container fluid>
                <Row>
                    {listings.map((listing) => {
                        return (
                            <Col className="d-flex align-items-center justify-content-center">
                                <CardComponent 
                                    image={listing.image}
                                    location={listing.location}
                                    host={listing.host}
                                    date={listing.date}
                                    price={listing.price}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default App;
