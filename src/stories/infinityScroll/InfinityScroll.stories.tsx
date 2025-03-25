import type { Meta, StoryObj } from "@storybook/react";
import InfinityScroll from "./InfinityScroll";
import { useEffect, useState } from "react";
import axios from "axios";

const meta: Meta<typeof InfinityScroll> = {
  title: "Component/InfinityScroll",
  component: InfinityScroll,
  parameters: {
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof InfinityScroll>;

export default meta;
type Story = StoryObj<typeof InfinityScroll>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    // pageNumber: 1
  },
  render: function Render(args) {
    const [index, setindex] = useState(1);
    const [data, setData] = useState([]);


    const viewCount = 10;

    useEffect(() => {
      console.log('dindex', index);
      axios
        .get(`https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=${viewCount}`)
        .then((res: any) => {
          setData(res.data);
          console.log('data:', res.data)
        })
    }, [index]);

    return (
      <>
        <InfinityScroll setIndex={setindex} data={data} viewCount={viewCount} />
      </>
    )
  }
}
