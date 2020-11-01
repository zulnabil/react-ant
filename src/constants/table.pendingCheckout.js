import { Button } from "antd"
import { EditOutlined } from "@ant-design/icons"

export const columns = [
  {
    title: "Courier",
    dataIndex: "courier",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "From",
    dataIndex: "from",
  },
  {
    title: "To",
    dataIndex: "to",
  },
  {
    title: "Rate",
    dataIndex: "rate",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
]

export const data = [
  {
    key: "1",
    courier: "Courier 1",
    description: "Sameday Delivery",
    from: "Joseph, 100 Bukit Timah Road 01-23...",
    to: "Jane Shepard, 1 Fuilerton rd #02-02",
    rate: "x 3",
    action: <Button icon={<EditOutlined />} />,
  },
  {
    key: "2",
    courier: "Courier 2",
    description: "Sameday Delivery",
    from: "Joseph, 100 Bukit Timah Road 01-23...",
    to: "Jane Shepard, 1 Fuilerton rd #02-02",
    rate: "x 3",
    action: <Button icon={<EditOutlined />} />,
  },
  {
    key: "3",
    courier: "Courier 3",
    description: "Sameday Delivery",
    from: "Joseph, 100 Bukit Timah Road 01-23...",
    to: "Jane Shepard, 1 Fuilerton rd #02-02",
    rate: "x 3",
    action: <Button icon={<EditOutlined />} />,
  },
  {
    key: "4",
    courier: "Courier 4",
    description: "Sameday Delivery",
    from: "Joseph, 100 Bukit Timah Road 01-23...",
    to: "Jane Shepard, 1 Fuilerton rd #02-02",
    rate: "x 3",
    action: <Button icon={<EditOutlined />} />,
  },
  {
    key: "5",
    courier: "Courier 5",
    description: "Sameday Delivery",
    from: "Joseph, 100 Bukit Timah Road 01-23...",
    to: "Jane Shepard, 1 Fuilerton rd #02-02",
    rate: "x 3",
    action: <Button icon={<EditOutlined />} />,
  },
  {
    key: "6",
    courier: "Courier 6",
    description: "Sameday Delivery",
    from: "Joseph, 100 Bukit Timah Road 01-23...",
    to: "Jane Shepard, 1 Fuilerton rd #02-02",
    rate: "x 3",
    action: <Button icon={<EditOutlined />} />,
  },
]
