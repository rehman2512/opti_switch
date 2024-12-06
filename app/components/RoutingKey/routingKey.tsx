import React, { useState } from 'react';
import style from './routingKey.module.css';
import { Table, Input, Pagination, Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { CiMenuKebab } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import Button from '../Basic/button';
import { CiSearch } from "react-icons/ci";

interface DataSourceItem {
  key: string;
  BIZ_Flow_Routine_ID: string;
  BIZ_Flow_Package_ID: string;
  Name: string;
}

const dataSource: DataSourceItem[] = [
  {
    key: '1',
    BIZ_Flow_Routine_ID: 'EKG464SJFN01',
    BIZ_Flow_Package_ID: '1',
    Name: 'TransactionBizRoutines::fetchTranFromSettlementLog',
  },
  {
    key: '2',
    BIZ_Flow_Routine_ID: 'EKG464SJFN02',
    BIZ_Flow_Package_ID: '1',
    Name: 'TransactionBizRoutines::CheckNetworkMessage',
  },
  {
    key: '3',
    BIZ_Flow_Routine_ID: 'EKG464SJFN03',
    BIZ_Flow_Package_ID: '1',
    Name: 'TransactionBizRoutines::CheckProcessOK',
  },
  {
    key: '4',
    BIZ_Flow_Routine_ID: 'EKG464SJFN04',
    BIZ_Flow_Package_ID: '1',
    Name: 'TransactionBizRoutines::Checkprocessdate',
  },
  {
    key: '5',
    BIZ_Flow_Routine_ID: 'EKG464SJFN05',
    BIZ_Flow_Package_ID: '1',
    Name: 'TransactionBizRoutines::processcutover',
  },
  {
    key: '6',
    BIZ_Flow_Routine_ID: 'EKG464SJFN06',
    BIZ_Flow_Package_ID: '1',
    Name: 'TransactionBizRoutines::settimer',
  },
  {
    key: '7',
    BIZ_Flow_Routine_ID: 'EKG464SJFN07',
    BIZ_Flow_Package_ID: '1',
    Name: 'TransactionBizRoutines::Setauthid',

  },
  {
    key: '8',
    BIZ_Flow_Routine_ID: 'EKG464SJFN08',
    BIZ_Flow_Package_ID: '1',
    Name: 'TransactionBizRoutines::UpdatetransLog',
  },
  {
    key: '9',
    BIZ_Flow_Routine_ID: 'EKG464SJFN09',
    BIZ_Flow_Package_ID: '1',
    Name: 'TransactionBizRoutines::SetRRN',
  },
  {
    key: '10',
    BIZ_Flow_Routine_ID: 'EKG464SJFN10',
    BIZ_Flow_Package_ID: '1',
    Name: 'TransactionBizRoutines::Addtosaflog',
  },
  {
    key: '11',
    BIZ_Flow_Routine_ID: 'EKG464SJFN11',
    BIZ_Flow_Package_ID: '1',
    Name: 'TransactionBizRoutines::Checktransstatus',
  },
  {
    key: '12',
    BIZ_Flow_Routine_ID: 'EKG464SJFN12',
    BIZ_Flow_Package_ID: '1',
    Name: 'Biometric Verification Service Request',
  },
  {
    key: '13',
    BIZ_Flow_Routine_ID: 'EKG464SJFN13',
    BIZ_Flow_Package_ID: '1',
    Name: 'Biometric Verification Service Request',
  },
  {
    key: '14',
    BIZ_Flow_Routine_ID: 'EKG464SJFN14',
    BIZ_Flow_Package_ID: '1',
    Name: 'Biometric Verification Service Request',
  },
];

const columns = [
  {
    title: 'BIZ Flow Routine ID',
    dataIndex: 'BIZ_Flow_Routine_ID',
    key: 'BIZ_Flow_Routine_ID',
    width: 150,

  },
  {
    title: 'BIZ Flow Package ID',
    dataIndex: 'BIZ_Flow_Package_ID',
    key: 'BIZ_Flow_Package_ID',
    width: 200,

  },
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
  },

  {
    title: 'Action',
    key: 'action',
    fixed: "right" as const,
    width: 50,
    render: () => <CiMenuKebab />,
  },
];

const InstituteManagement: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [searchText, setSearchText] = useState<string>('');

  const onSearch = (value: string): void => setSearchText(value.toLowerCase());

  const filteredData = dataSource.filter((item) =>
    item.BIZ_Flow_Package_ID.toLowerCase().includes(searchText) ||
    item.BIZ_Flow_Routine_ID.toLowerCase().includes(searchText)
  );

  return (
    <>
      <div className={style.Route}>
        <h5>Routing Key</h5>
        <Button Text={'Add New'} buttonClass={style.buttonAdd} Disable />
      </div>
      <div className={style.container}>
        <Space className={style.SearchTable}>
          <div className={style.SearchBar}>
            <Input
              placeholder="Search..."
              prefix={<CiSearch size={20} />}
              suffix={<CiFilter size={20} />}
              onChange={(e) => onSearch(e.target.value)}
              style={{ width: 200 }}
              className={style.inputSearch}
            />
            <SettingOutlined className={style.tableSettings} />
          </div>
          <div className={style.ViewChange}>
            <div className={style.boxIcons}>
              <CiGrid41 className={style.gridIcon} />
              <CiGrid2H className={style.gridIcon} />
            </div>
            <MdErrorOutline className={style.tableInstruction} />
          </div>
        </Space>
        <Table
          columns={columns}
          dataSource={filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
          pagination={false}
          rowSelection={{ type: 'checkbox' }}
          size="small"
        />
        <Pagination
          align="end"
          showTotal={(total) => `Total ${total} items`}
          current={currentPage}
          total={filteredData.length}
          pageSize={pageSize}
          onChange={(page, pageSize) => {
            setCurrentPage(page);
            setPageSize(pageSize);
          }}
          className={style.page}
          style={{ marginTop: 16, textAlign: 'right', }}
        />
      </div>
    </>
  );
};

export default InstituteManagement;
