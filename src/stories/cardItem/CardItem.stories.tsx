import type { Meta, StoryObj } from "@storybook/react";
import CardItem from "./CardItem";

const meta: Meta<typeof CardItem> = {
  title: "Component/CardItem",
  component: CardItem,
  parameters: {
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof CardItem>;

export default meta;
type Story = StoryObj<typeof CardItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  render: function Render(args) {
    return (
      <div style={{ display: 'flex', gap: '5px 15px' }}>
        <CardItem>
          <CardItem.ItemTitle>SK매직 은행지국</CardItem.ItemTitle>
          <CardItem.ItemContent>제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축</CardItem.ItemContent>
          <CardItem.ItemSchedule>일/금/토<br />10:00 ~ 22:00</CardItem.ItemSchedule>
          <CardItem.ItemPay>월급 2,700,000 원</CardItem.ItemPay>
          <CardItem.ItemRecruit>채용시 마감</CardItem.ItemRecruit>
        </CardItem>
        <CardItem>
          <CardItem.ItemTitle>SK매직 은행지국</CardItem.ItemTitle>
          <CardItem.ItemContent>제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축</CardItem.ItemContent>
          <CardItem.ItemSchedule>일/금/토<br />10:00 ~ 22:00</CardItem.ItemSchedule>
          <CardItem.ItemPay>월급 2,700,000 원</CardItem.ItemPay>
          <CardItem.ItemRecruit>채용시 마감</CardItem.ItemRecruit>
        </CardItem>
        <CardItem>
          <CardItem.ItemTitle>SK매직 은행지국</CardItem.ItemTitle>
          <CardItem.ItemContent>제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축</CardItem.ItemContent>
          <CardItem.ItemSchedule>일/금/토<br />10:00 ~ 22:00</CardItem.ItemSchedule>
          <CardItem.ItemPay>월급 2,700,000 원</CardItem.ItemPay>
          <CardItem.ItemRecruit>채용시 마감</CardItem.ItemRecruit>
        </CardItem>
        <CardItem>
          <CardItem.ItemTitle>SK매직 은행지국</CardItem.ItemTitle>
          <CardItem.ItemContent>제품과 서비스 홍보, 정기적 제품 관리 및 상담 서비스 제공, 정기적인 방문관리 서비스 제공, 고객과의 약속 조율, 안정적인 소득 체계 구축</CardItem.ItemContent>
          <CardItem.ItemSchedule>일/금/토<br />10:00 ~ 22:00</CardItem.ItemSchedule>
          <CardItem.ItemPay>월급 2,700,000 원</CardItem.ItemPay>
          <CardItem.ItemRecruit>채용시 마감</CardItem.ItemRecruit>
        </CardItem>

      </div>
    )
  }
}
