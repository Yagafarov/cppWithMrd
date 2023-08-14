import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideMenu from '../components/SideMenu'

import '../App.css'


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
              <section className='conCpp'>
                <h2 id="introduction">Kirish</h2>
                <p>Welcome to the Introduction section of the tutorial.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
                </p>
              </section>

              <section className='conCpp'>
                <h2 id="variables">O'zgaruvchilar</h2>
                <p>In this section, we will learn about variables and their usage.</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. ...
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
                </p>
              </section>

              <section className='conCpp'>
                <h2 id="control-structures">Strukturalar</h2>
                <p>Explore control structures like loops and conditionals in this section.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
                </p>
              </section>

              <section className='conCpp'>
                <h2 id="functions">Funksiyalar</h2>
                <p>Learn about functions and how to define and use them.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur ullam, nulla inventore dolore tenetur et officia quae harum corrupti earum cumque eos excepturi, natus nihil nobis libero autem magni recusandae. Amet, architecto, odit explicabo maxime, doloribus quis qui animi aperiam sed soluta debitis. Repellendus ab fuga cumque minus odit aperiam praesentium voluptatem nisi dignissimos, debitis, quo dolorem. Quod voluptates, tempore unde placeat eum harum obcaecati libero. Debitis maxime minus, quia dolorum porro fugiat, sapiente, rem voluptatem accusamus facilis recusandae id! Distinctio repellendus placeat illum vitae eum, rerum minima facere illo expedita, quos nam nihil enim itaque dolorum aliquam fugiat.
                </p>
              </section>


              {/* Add more sections as needed based on your NavLinks */}
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default Tutorial