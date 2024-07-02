import { Content } from "next/font/google";
import React from "react";

const page = ({ params }) => {
  console.log(params.title);
  const blogs = [
    {
      id: 1,
      title: "blog1",
      content: "blog 1 content",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt maiores porro earum, commodi voluptas, recusandae consequuntur, rerum natus totam pariatur beatae harum repellat aut incidunt nobis! Excepturi, quam reprehenderit.",
    },
    {
      id: 2,
      title: "blog2",
      content: "blog 2 content",
      detail:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, itaque. Obcaecati praesentium libero sit voluptatibus illo eligendi sequi harum minus.",
    },
    {
      id: 3,
      title: "blog3",
      content: "blog 3 content",
      detail:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ad fugit dicta repellendus commodi molestiae suscipit tenetur explicabo aperiam architecto!",
    },
    {
      id: 4,
      title: "blo4",
      content: "blog 4 content",
      detail:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aliquam!",
    },
    {
      id: 5,
      title: "blog5",
      content: "blog 5 content",
      detail:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, itaque. Obcaecati praesentium libero sit voluptatibus illo eligendi sequi harum minus.",
    },
    {
      id: 6,
      title: "blog6",
      content: "blog 6 content",
      detail:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ad fugit dicta",
    },
    {
      id: 7,
      title: "blog7",
      content: "blog 7 content",
      detail:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, itaque. Obcaecati praesentium libero sit voluptatibus illo eligendi sequi harum minus.",
    },
    {
      id: 8,
      title: "blog8",
      content: "blog 8 content",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aliquam!",
    },
  ];
  const { content,detail } = blogs?.find((blog) => blog.title == params.title);
  console.log(content,detail);

  return <div>
    <h3>{content}</h3>
    <h3>{detail}</h3>
  </div>
};

export default page;
