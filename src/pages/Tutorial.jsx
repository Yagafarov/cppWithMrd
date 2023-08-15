import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideMenu from '../components/SideMenu'

import '../App.css'

const posts = [
  {
    id: 1,
    title: "Kirish",
    postId: "introduction",
    content: <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
    </p>
  },
  {
    id: 2,
    title: "O'zgaruvchilar",
    postId: "variables",
    content: <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
    </p>
  },
  {
    id: 3,
    title: "Strukturalar",
    postId: "control-structures",
    content: <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
      
    </p>
  },
  {
    id: 4,
    title: "Funksiyalar",
    postId: "functions",
    content: <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
    </p>
  },
]

const Tutorial = () => {

  const [isDivVisible, setDivVisible] = useState(true);
  const handleButtonClick = () => {
    setDivVisible(!isDivVisible);
  };

  return (
    <div className='conOut'>
      <Container fluid >
        <Row>
          <Col md={2} className='bg-light' >
            <SideMenu Con={handleButtonClick} />
          </Col>
          {isDivVisible && (
            <Col md={10} className="p-3" style={{ height: '100%', maxHeight: "80vh", overflowY: 'scroll' }}>
              {/* Content for each section goes here */}

              {
                posts.map((post) => (
                  <section className='conCpp' key={post.id}>
                    <h2 id={post.postId}>{post.title}</h2>
                    {
                      post.content
                    }
                  </section>
                ))
              }

              {/* Add more sections as needed based on your NavLinks */}
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default Tutorial