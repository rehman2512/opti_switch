import React, { useState } from 'react'
import { Badge, Calendar, Alert, Table, Input, Space, Pagination, Modal } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { CiFilter, CiSearch, CiGrid41, CiGrid2H, CiMenuKebab } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import dayjs, { Dayjs } from 'dayjs';
import Button from '../Basic/button';
import style from './calender.module.css';

interface ListDataType {
  key: number;
  DateID: string;
  Events: string;
}

interface EventData {
  type: 'success' | 'warning' | 'error';
  content: string;
}

const getListData = (value: Dayjs): EventData[] => {
  switch (value.date()) {
    case 8:
      return [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
    case 10:
      return [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
    case 15:
      return [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event......' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
      ];
    default:
      return [];
  }
};

const getMonthData = (value: Dayjs) => (value.month() === 8 ? 1394 : null);

const listData: ListDataType[] = Array.from({ length: 14 }, (_, i) => ({
  key: i + 1,
  DateID: `2024-09-${String(i + 8).padStart(2, '0')}`,
  Events: i % 2 === 0 ? 'I-Link' : 'IHC',
}));

const columns = [
  { title: 'Date', dataIndex: 'DateID', key: 'DateID', width: 100 },
  { title: 'Events', dataIndex: 'Events', key: 'Events' },
  { title: 'Action', key: 'action', fixed: "right" as const, width: 50, render: () => <CiMenuKebab /> },
];

const CalendarData: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(9);
  const [searchText, setSearchText] = useState<string>('');
  const [isGridView, setGridView] = useState<boolean>(true);
  const [value, setValue] = useState<Dayjs>(dayjs());
  const [selectedValue, setSelectedValue] = useState<Dayjs>(dayjs());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onGridViewToggle = () => setGridView(true);
  const onListViewToggle = () => setGridView(false);

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value.toLowerCase());

  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    const filteredData = listData.filter((item) => item.content.toLowerCase().includes(searchText));
    return (
      <ul className="events">
        {filteredData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} onClick={showModal} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current: Dayjs, info: { type: string; originNode: React.ReactNode }) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  const filteredData = listData.filter(
    (item) =>
      (item.Events.toLowerCase().includes(searchText) ||
        item.DateID.toLowerCase().includes(searchText)) &&
      item.DateID.startsWith(selectedValue.format('YYYY-MM-DD'))
  );

  return (
    <>
      <div className={style.Route}>
        <h5>Calendar</h5>
        <Button Text="Add New" buttonClass={style.buttonAdd} disabled={true} />
      </div>
      <div className={style.container}>
        <Space className={style.SearchTable}>
          <div className={style.SearchBar}>
            <Input
              placeholder="Search..."
              prefix={<CiSearch size={20} />}
              suffix={<CiFilter size={20} />}
              onChange={onSearch}
              style={{ width: 200 }}
              className={style.inputSearch}
            />
            <SettingOutlined className={style.tableSettings} />
          </div>
          <div className={style.ViewChange}>
            <div className={style.boxIcons}>
              <CiGrid41 className={isGridView ? style.gridIcon2 : style.gridIcon} onClick={onGridViewToggle} />
              <CiGrid2H className={isGridView ? style.gridIcon : style.gridIcon2} onClick={onListViewToggle} />
            </div>
            <MdErrorOutline className={style.tableInstruction} />
          </div>
        </Space>
        {isGridView ? (
          <>
            <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
            <Calendar cellRender={cellRender} value={value} onSelect={onSelect}  />
          </>
        ) : (
          <>
            <Table
              columns={columns}
              dataSource={filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
              pagination={false}
              rowSelection={{ type: 'checkbox' }}
              size="small"
            />
            <Pagination
              showTotal={(total) => `Total ${total} items`}
              current={currentPage}
              total={filteredData.length}
              pageSize={pageSize}
              onChange={(page, newPageSize) => {
                setCurrentPage(page);
                setPageSize(newPageSize || pageSize);
              }}
              style={{ marginTop: 16, textAlign: 'right' }}
            />
          </>
        )}
        <Modal title="Add Event" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Input />
        </Modal>
      </div>
    </>
  );
};

export default CalendarData;
