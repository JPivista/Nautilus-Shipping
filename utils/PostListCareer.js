// components/PostList.js
import { useState, useEffect } from 'react';
import { fetchPostsByCategory } from './CategoryPostsCareer';
import { Card, Button, Col, Row, Container, Spinner } from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image'
import {RotatingLines} from 'react-loader-spinner'


    const PostList = ({ categorySlug }) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hide, setHide] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

  const loadMorePosts = async () => {
    setLoading(true);
    const newPosts = await fetchPostsByCategory(categorySlug, page + 1);
    if (newPosts.length === 0) {
        // No more posts to load, hide the "Load More" button
        setHide(true);
      } else {
        setPosts([...posts, ...newPosts]);
        setPage(page + 1);
        
    }
    setLoading(false);

  };

  useEffect(() => {
    const loadInitialPosts = async () => {
      setLoading(true);
      const initialPosts = await fetchPostsByCategory(categorySlug);
      setPosts(initialPosts);
      setLoading(false);
        
    };

    loadInitialPosts();
  }, [categorySlug]);

  return (
      <div>
             
        <Container className="wbg-grey">
        <Row>
      {posts.map((post) => (
        <Col sm={4} className="p-3" key={post.index}>
        <Card className="story_post" >
          <Image
            src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
            alt={post['title']['rendered']}
            width="400"
              height="250"
              className="w-100"
          />
          <Card.Body className="b-border">
            <Card.Title className="fs-5 mb-4 insights"  dangerouslySetInnerHTML={{__html:post['title']['rendered']}}/>
            <Link key={post.index} href={`/${post['slug']}`}>
              <Button variant="primary" className="read_btn fs-6">Read more</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      ))}
              </Row>
          </Container>
    
          {loading ? (
  <section className="section text-center mb-3">
    <RotatingLines
      strokeColor="grey"
      strokeWidth="3"
      animationDuration="0.75"
      width="50"
      visible={true}
    />
  </section>
) : (
  <>
    {!hide && (
      <section className="section text-center mb-3">
        <div className="loadmodediv">
          <Button
            onClick={loadMorePosts}
            variant="primary"
            className="read_btn btn btn-primary fs-6"
            disabled={isSubmitting}
          >
            Load More
          </Button>
        </div>
      </section>
    )}
  </>
)}
         
</div>

  );
};

export default PostList;
