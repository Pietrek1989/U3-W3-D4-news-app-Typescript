import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { NewsListInterface } from "../interfaces/interface";

const Details = () => {
  const id = useParams();
  console.log(id);
  const [newsList, getNewsList] = useState<NewsListInterface>();

  const getList = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/" + id.id
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="text-dark mt-2">
      {newsList && (
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <div className="bg-news">
              <div>
                <img src={newsList?.imageUrl} id="detail-img" alt="news" />
              </div>
              <div className="ml-2">
                <h1>{newsList?.title}</h1>
                <p>{newsList?.summary}</p>
              </div>
              <div className="ml-2">
                <a href={newsList?.url}>See More at {newsList?.newsSite} !</a>

                <p className="pb-2">
                  Date published:{" "}
                  {format(
                    parseISO(newsList?.publishedAt.toString()),
                    "dd.MM.yyyy"
                  )}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Details;
