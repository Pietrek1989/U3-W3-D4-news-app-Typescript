import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import { Col, Container, Row } from "react-bootstrap";
import { NewsListInterface } from "../interfaces/interface";

const MainPage = () => {
  const [newsList, getNewsList] = useState<NewsListInterface[]>([]);

  const getList = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        getNewsList(data);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center">
          <h2 className="text-dark">News from around the 🌍 </h2>
        </Col>
      </Row>
      <Row>
        {newsList.map((news) => (
          <NewsItems news={news} key={news.id} />
        ))}
      </Row>
    </Container>
  );
};
export default MainPage;
