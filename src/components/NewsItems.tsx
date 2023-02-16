import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NewsListInterface } from "../interfaces/interface";

interface newsListProps {
  news: NewsListInterface;
}

const NewsItems = (props: newsListProps) => {
  const navigate = useNavigate();
  return (
    <Col xs={6} md={4} lg={3} className="text-dark card-wrapper">
      <Card onClick={() => navigate("/details/" + props.news.id)}>
        <Card.Body>
          <Card.Img variant="top" src={props.news.imageUrl} />
          <hr className="hr" />
          <Card.Title>{props.news.title}</Card.Title>
          <hr className="hr" />
          <Card.Text>{props.news.summary}</Card.Text>
          <Card.Text>{props.news.newsSite}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsItems;
