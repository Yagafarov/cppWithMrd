import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
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
const SideMenu = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 990);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);

    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  const handleClick = () => {
    if (isMobile) {
      props.Con();
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="side-menu-nav" className="mt-lg-5 mt-3" onClick={handleClick}>
        Menu
      </Navbar.Toggle>
      <Navbar.Collapse id="side-menu-nav">
        <Nav className="flex-column">
          {posts.map((post) => (
            <Nav.Link href={`#${post.postId}`} key={post.id} onClick={handleClick}>
              {post.title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SideMenu;
