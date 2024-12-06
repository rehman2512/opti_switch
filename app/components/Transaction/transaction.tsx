import React, { useState } from 'react';
import style from './transaction.module.css';
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
  Variation_ID: string;
  Name: string;
  Description: string;
}

const dataSource: DataSourceItem[] = [
  {
    key: '1',
    Variation_ID: 'EKG464SJFN01',
    Name: 'Account Inquiry Service Request',
    Description: "Account Inquiry Service Request"
  },
  {
    key: '2',
    Variation_ID: 'EKG464SJFN02',
    Name: 'Account Inquiry Service Response',
    Description: "Account Inquiry Service Request"
  },
  {
    key: '3',
    Variation_ID: 'EKG464SJFN03',
    Name: 'Account Inquiry Service Response',
    Description: "Account Inquiry Service Request"
  },
  {
    key: '4',
    Variation_ID: 'EKG464SJFN04',
    Name: 'Inter Bank Cash Withdrawal Service Request',
    Description: "Inter Bank Cash Withdrawal Service Request"
  },
  {
    key: '5',
    Variation_ID: 'EKG464SJFN05',
    Name: 'Inter Bank Cash Withdrawal Service Request',
    Description: "Biometric Verification Service Request"
  },
  {
    key: '6',
    Variation_ID: 'EKG464SJFN06',
    Name: 'Inter Bank Cash Withdrawal Service Request',
    Description: "Inter Bank Cash Withdrawal Service Response"
  },
  {
    key: '7',
    Variation_ID: 'EKG464SJFN07',
    Name: 'Inter Bank Cash Withdrawal Service Request',
    Description: "Inter Bank Cash Withdrawal Service Response"
  },
  {
    key: '8',
    Variation_ID: 'EKG464SJFN08',
    Name: 'Biometric Verification Service Request',
    Description: "Inter Bank Cash Withdrawal Service Request"
  },
  {
    key: '9',
    Variation_ID: 'EKG464SJFN09',
    Name: 'Biometric Verification Service Request',
    Description: "Account Inquiry Service Response"
  },
  {
    key: '10',
    Variation_ID: 'EKG464SJFN10',
    Name: 'Biometric Verification Service Request',
    Description: "Inter Bank Cash Withdrawal Service Request"
  },
  {
    key: '11',
    Variation_ID: 'EKG464SJFN11',
    Name: 'Biometric Verification Service Request',
    Description: "Reliable switches used for various residential and commercial electrical applications"
  },
  {
    key: '12',
    Variation_ID: 'EKG464SJFN12',
    Name: 'Biometric Verification Service Request',
    Description: "Reliable switches used for various residential and commercial electrical applications"
  },
  {
    key: '13',
    Variation_ID: 'EKG464SJFN13',
    Name: 'Biometric Verification Service Request',
    Description: "Reliable switches used for various residential and commercial electrical applications"
  },
  {
    key: '14',
    Variation_ID: 'EKG464SJFN14',
    Name: 'Biometric Verification Service Request',
    Description: "Reliable switches used for various residential and commercial electrical applications"
  },
];

const columns = [
  {
    title: 'Variation ID',
    dataIndex: 'Variation_ID',
    key: 'Variation_ID',
    width:100,

  },
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',

  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'Description',
  },
  {
    title: 'Action',
    key: 'action',
    fixed:"right" as const,
    width:50,
    render: () => <CiMenuKebab />,
  },
];

const InstituteManagement: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [searchText, setSearchText] = useState<string>('');

  const onSearch = (value: string): void => setSearchText(value.toLowerCase());

  const filteredData = dataSource.filter((item) =>
    item.Name.toLowerCase().includes(searchText) ||
    item.Variation_ID.toLowerCase().includes(searchText) ||  
    item.Description.toLowerCase().includes(searchText)
  );

  return (
    <>    
      <div className={style.Route}>
        <h5>Transaction</h5>
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
          style={{ marginTop: 16, textAlign: 'right',  }}
        />
      </div>
    </>
  );
};

export default InstituteManagement;
