import type { Meta, StoryObj } from "@storybook/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Component/Pagination",
  component: Pagination,
  parameters: {
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Auto: Story = {
  // args: {
  //   item: ['목록1', '목록2'],
  // },
  render: function Render(args) {
    const URL = 'https://jsonplaceholder.typicode.com/posts';

    const [post, setPosts] = useState([]);

    useEffect(() => {
      axios
        .get(URL)
        .then((res) => setPosts(res.data.slice(0, 24)))
    }, []);

    return (
      <>
        데이터
        <Pagination totalPost={24} />
      </>
    )
  }
}
