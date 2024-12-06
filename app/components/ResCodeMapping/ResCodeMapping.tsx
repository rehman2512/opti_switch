import React, { useState } from 'react';
import style from './ResCodeMapping.module.css';
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
  ID: string;
  Internal_Code: string;
  External_Code: string;
  Channel_ID: string;
}

const dataSource: DataSourceItem[] = [
  {
    key: '1',
    ID: 'EKG464SJFN01',
    Internal_Code: '123',
    External_Code: 'TransactionBizRoutines::fetchTranFromSettlementLog',
    Channel_ID: '21312',
  },
  {
    key: '2',
    ID: 'EKG464SJFN02',
    Internal_Code: '233',
    External_Code: 'TransactionBizRoutines::CheckNetworkMessage',
    Channel_ID: '346346',
  },
  {
    key: '3',
    ID: 'EKG464SJFN03',
    Internal_Code: '423',
    External_Code: 'TransactionBizRoutines::CheckProcessOK',
    Channel_ID: '325235',
  },
  {
    key: '4',
    ID: 'EKG464SJFN04',
    Internal_Code: '2134',
    External_Code: 'TransactionBizRoutines::Checkprocessdate',
    Channel_ID: '864',
  },
  {
    key: '5',
    ID: 'EKG464SJFN05',
    Internal_Code: '57678',
    External_Code: 'TransactionBizRoutines::processcutover',
    Channel_ID: '23435',
  },
  {
    key: '6',
    ID: 'EKG464SJFN06',
    Internal_Code: '167',
    External_Code: 'TransactionBizRoutines::settimer',
    Channel_ID: '564',
  },
  {
    key: '7',
    ID: 'EKG464SJFN07',
    Internal_Code: '257',
    External_Code: 'TransactionBizRoutines::Setauthid',
    Channel_ID: '123',

  },
  {
    key: '8',
    ID: 'EKG464SJFN08',
    Internal_Code: '4578',
    External_Code: 'TransactionBizRoutines::UpdatetransLog',
    Channel_ID: '432',
  },
  {
    key: '9',
    ID: 'EKG464SJFN09',
    Internal_Code: '456',
    External_Code: 'TransactionBizRoutines::SetRRN',
    Channel_ID: '456',
  },
  {
    key: '10',
    ID: 'EKG464SJFN10',
    Internal_Code: '345',
    External_Code: 'TransactionBizRoutines::Addtosaflog',
    Channel_ID: '1',
  },
  {
    key: '11',
    ID: 'EKG464SJFN11',
    Internal_Code: '1',
    External_Code: 'TransactionBizRoutines::Checktransstatus',
    Channel_ID: '1',
  },
  {
    key: '12',
    ID: 'EKG464SJFN12',
    Internal_Code: '1',
    External_Code: 'Biometric Verification Service Request',
    Channel_ID: '1',
  },
  {
    key: '13',
    ID: 'EKG464SJFN13',
    Internal_Code: '1',
    External_Code: 'Biometric Verification Service Request',
    Channel_ID: '1',
  },
  {
    key: '14',
    ID: 'EKG464SJFN14',
    Internal_Code: '1',
    External_Code: 'Biometric Verification Service Request',
    Channel_ID: '1',
  },
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID',
    width: 150,

  },
  {
    title: 'Internal Code',
    dataIndex: 'Internal_Code',
    key: 'Internal_Code',
    width: 150,

  },
  {
    title: 'External Code',
    dataIndex: 'External_Code',
    key: 'External_Code',
    width: 200,
  },

  {
    title: 'Channel ID',
    dataIndex: 'Channel_ID',
    key: 'Channel_ID',
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
    item.Internal_Code.toLowerCase().includes(searchText) ||
    item.ID.toLowerCase().includes(searchText) ||
    item.External_Code.toLowerCase().includes(searchText) ||
    item.Channel_ID.toLowerCase().includes(searchText)
  );

  return (
    <>
      <div className={style.Route}>
        <h5>Response Code Mapping</h5>
        <Button Text={'Add New'} buttonClass={style.buttonAdd} />
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
