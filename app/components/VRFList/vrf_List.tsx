import React, { useState } from 'react';
import style from './vrf_List.module.css';
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
  Variation_Req_ID: string;
  Full_Field_Name: string;
}

const dataSource: DataSourceItem[] = [
  {
    key: '1',
    Variation_Req_ID: 'EKG464SJFN01',
    Full_Field_Name: 'Account Inquiry Service Request',
  },
  {
    key: '2',
    Variation_Req_ID: 'EKG464SJFN02',
    Full_Field_Name: 'Account Inquiry Service Response',
  },
  {
    key: '3',
    Variation_Req_ID: 'EKG464SJFN03',
    Full_Field_Name: 'Account Inquiry Service Response',
  },
  {
    key: '4',
    Variation_Req_ID: 'EKG464SJFN04',
    Full_Field_Name: 'Inter Bank Cash Withdrawal Service Request',
  },
  {
    key: '5',
    Variation_Req_ID: 'EKG464SJFN05',
    Full_Field_Name: 'Inter Bank Cash Withdrawal Service Request',
  },
  {
    key: '6',
    Variation_Req_ID: 'EKG464SJFN06',
    Full_Field_Name: 'Inter Bank Cash Withdrawal Service Request',
  },
  {
    key: '7',
    Variation_Req_ID: 'EKG464SJFN07',
    Full_Field_Name: 'Inter Bank Cash Withdrawal Service Request',
  },
  {
    key: '8',
    Variation_Req_ID: 'EKG464SJFN08',
    Full_Field_Name: 'Biometric Verification Service Request',
  },
  {
    key: '9',
    Variation_Req_ID: 'EKG464SJFN09',
    Full_Field_Name: 'Biometric Verification Service Request',
  },
  {
    key: '10',
    Variation_Req_ID: 'EKG464SJFN10',
    Full_Field_Name: 'Biometric Verification Service Request',
  },
  {
    key: '11',
    Variation_Req_ID: 'EKG464SJFN11',
    Full_Field_Name: 'Biometric Verification Service Request',
  },
  {
    key: '12',
    Variation_Req_ID: 'EKG464SJFN12',
    Full_Field_Name: 'Biometric Verification Service Request',
  },
  {
    key: '13',
    Variation_Req_ID: 'EKG464SJFN13',
    Full_Field_Name: 'Biometric Verification Service Request',
  },
  {
    key: '14',
    Variation_Req_ID: 'EKG464SJFN14',
    Full_Field_Name: 'Biometric Verification Service Request',
  },
];

const columns = [
  {
    title: 'Variation Req ID',
    dataIndex: 'Variation_Req_ID',
    key: 'Variation_Req_ID',
    width:100,

  },
  {
    title: 'Full Field Name',
    dataIndex: 'Full_Field_Name',
    key: 'Full_Field_Name',
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
  const [pageSize, setPageSize] = useState<number>(10 );
  const [searchText, setSearchText] = useState<string>('');

  const onSearch = (value: string): void => setSearchText(value.toLowerCase());

  const filteredData = dataSource.filter((item) =>
    item.Full_Field_Name.toLowerCase().includes(searchText) ||
    item.Variation_Req_ID.toLowerCase().includes(searchText)  
  );

  return (
    <>    
      <div className={style.Route}>
        <h5>VRF List</h5>
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
          style={{ marginTop: 16, textAlign: 'right',  }}
        />
      </div>
    </>
  );
};

export default InstituteManagement;
