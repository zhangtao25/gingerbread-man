import React, { useState } from "react"
import { Button, Table, Input } from "antd"

const TodoList: React.FC = () => {
  const [inputValue, useInputValue] = useState<string>("")
  const [dataSource, useDataSource] = useState<any[]>([])
  const handleDelete = (index: any) => {
    const deepCopyDataSource = JSON.parse(JSON.stringify(dataSource))
    deepCopyDataSource.splice(index, 1)
    useDataSource(deepCopyDataSource)
  }
  const handleChange = (e: any) => {
    useInputValue(e.target.value)
  }
  const handleAdd = () => {
    useDataSource([
      ...dataSource,
      {
        title: inputValue,
      },
    ])
    useInputValue("")
  }
  const columns = [
    {
      title: "#",
      render(text: any, record: any, index: any) {
        return <>{index}</>
      },
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "control",
      render(text: any, record: any, index: any) {
        return (
          <a style={{ color: "red" }} onClick={() => handleDelete(index)}>
            delete
          </a>
        )
      },
    },
  ]

  return (
    <div className="TodoList">
      <div>
        <Input
          style={{ width: "200px" }}
          value={inputValue}
          onChange={handleChange}
        />
        <Button onClick={handleAdd}>添加</Button>
      </div>
      <Table
        rowKey={(row, index) => {
          return String(index)
        }}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  )
}

export default TodoList
