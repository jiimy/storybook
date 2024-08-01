import type { Meta, StoryObj } from "@storybook/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Component/Pagination",
  component: Pagination,
  parameters: {
    // componentSubtitle: 'dd',
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const PagingApi: Story = {
  args: {
    isButton: true,
    theme: 'default',
    className: '',
    btnRange: 10,
    pageRange: 10,
    totalPost: 112
  },
  render: function Render(args) {

    const [post, setPosts] = useState([]); // 넘겨줄 데이터의 length
    const [index, setIndex] = useState(1);

    const viewPageCount = 10;

    // 1. 페이징 처리가 안되어있는 api 일 경우
    useEffect(() => {
      // console.log('dindex', index);
      axios
        .get(`https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=${viewPageCount}`)
        .then((res) => {
          setPosts(res.data);
          console.log('data:', res.data)
        })
    }, [index]);


    return (
      <>
        <Pagination theme={args.theme} totalPost={args.totalPost} setCurrentPage={setIndex} currentPage={index} btnRange={10} />
      </>
    )
  }
}

export const NoPagingApi: Story = {
  args: {
    isButton: true,
    theme: 'auto',
    className: '',
    btnRange: 10,
    pageRange: 10,
    totalPost: 112
  },
  render: function Render(args) {
    const [post, setPosts] = useState([]); // 넘겨줄 데이터의 length
    const [index, setIndex] = useState(1);

    const viewPageCount = 10;

    // 1. 페이징 처리가 안되어있는 api 일 경우
    useEffect(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
          // index === 1 && setPosts(res.data.slice(index, index * viewPageCount))
          index === 1 ? setPosts(res.data.slice((index - 1), index * viewPageCount))
            : setPosts(res.data.slice((index - 1) * 10, index * 10))
        })
    }, [index]);

    return (
      <>
        <Pagination theme={args.theme} totalPost={args.totalPost} setCurrentPage={setIndex} currentPage={index} btnRange={args.btnRange} />
      </>
    )
  }
}

