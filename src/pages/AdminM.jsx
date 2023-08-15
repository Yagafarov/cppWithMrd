import React from 'react'
import Write from './Write'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import {AiOutlineClose} from 'react-icons/ai'

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

const AdminM = () => {
  return (
    <Container className='py-5'>
      <h3 className='text-center bg-light p-3' style={{position:'relative'}} >Admin panel  <Link to={'/'} style={{ position:'absolute', right:'25px'}}  ><AiOutlineClose/></Link> </h3>
      <Row>
        <Col xs={12} md={2} className='bg-light p-4'>
          <Nav variant='pills' defaultActiveKey='/home' className='flex-column'>
            <Nav.Item>
              <p style={{ fontWeight: 'bold', marginBottom: 0 }}>Yaratish</p>
              <Nav.Link href='' eventKey='newCreate'>
                Yangi yaratish
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <p style={{ fontWeight: 'bold', marginBottom: 0 }}>Tahrirlash</p>
            </Nav.Item>
            {posts.map((post) => (
              <Nav.Item key={post.id}>
                <Nav.Link href='' eventKey={post.postId}>
                  {post.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col xs={12} md={10}>
          <Write />
        </Col>
      </Row>
    </Container>
  )
}

export default AdminM