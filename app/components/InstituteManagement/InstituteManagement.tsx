import React, { useState, useEffect } from 'react';
import style from './instittutManagemen.module.css';
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
  InstituteID: string;
  InternalName: string;
  Description: string;
}

const dataSource: DataSourceItem[] = [
  {
    key: '1',
    InstituteID: 'EKG464SJFN01',
    InternalName: 'I-Link',
    Description: "Reliable switches used for various residential and commercial electrical applications."
  },
  {
    key: '2',
    InstituteID: 'EKG464SJFN02',
    InternalName: 'IRIC',
    Description: "Durable switches designed for safety and ease of use in homes and offices."
  },
  {
    key: '3',
    InstituteID: 'EKG464SJFN03',
    InternalName: 'Schneider Electric',
    Description: "Modern switches that combine style with advanced safety features and energy efficiency."
  },
  {
    key: '4',
    InstituteID: 'EKG464SJFN04',
    InternalName: 'Legrand Switches',
    Description: "Elegant switches that offer a variety of styles and functionalities for upscale installations."
  },
  {
    key: '5',
    InstituteID: 'EKG464SJFN05',
    InternalName: 'Havells Switches',
    Description: "Robust and aesthetically pleasing switches suitable for both home and industrial environments."
  },
  {
    key: '6',
    InstituteID: 'EKG464SJFN06',
    InternalName: 'ABB Switches',
    Description: "Innovative switches focusing on energy efficiency and safety, ideal for commercial use."
  },
  {
    key: '7',
    InstituteID: 'EKG464SJFN07',
    InternalName: 'Siemens Switches',
    Description: "High-quality switches known for their reliability and advanced technology in industrial settings."
  },
  {
    key: '8',
    InstituteID: 'EKG464SJFN08',
    InternalName: 'Philips Switches',
    Description: "Integrated lighting solutions that provide functionality and modern design."
  },
  {
    key: '9',
    InstituteID: 'EKG464SJFN09',
    InternalName: 'Crompton Switches',
    Description: "Affordable switches that deliver good performance for everyday use."
  },
  {
    key: '10',
    InstituteID: 'EKG464SJFN10',
    InternalName: 'Chint Switches',
    Description: "Budget-friendly switches that meet basic electrical needs with dependable performance."
  },
  {
    key: '11',
    InstituteID: 'EKG464SJFN11',
    InternalName: 'I-Link',
    Description: "Reliable switches used for various residential and commercial electrical applications"
  },
  {
    key: '12',
    InstituteID: 'EKG464SJFN12',
    InternalName: 'IHC',
    Description: "Reliable switches used for various residential and commercial electrical applications"
  },
  {
    key: '13',
    InstituteID: 'EKG464SJFN13',
    InternalName: 'I-Link',
    Description: "Reliable switches used for various residential and commercial electrical applications"
  },
  {
    key: '14',
    InstituteID: 'EKG464SJFN14',
    InternalName: 'IHC',
    Description: "Reliable switches used for various residential and commercial electrical applications"
  },
];

const columns = [
  {
    title: 'Institute ID',
    dataIndex: 'InstituteID',
    key: 'InstituteID',
    width:100,
  },
  {
    title: 'Internal Name',
    dataIndex: 'InternalName',
    key: 'InternalName',
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
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSearch = (value: string): void => setSearchText(value.toLowerCase());

  const filteredData = dataSource.filter((item) =>
    item.InternalName.toLowerCase().includes(searchText) ||
    item.InstituteID.toLowerCase().includes(searchText) ||  
    item.Description.toLowerCase().includes(searchText)
  );

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      }, 2000) 
      }, [])

  return (
    <>    
      <div className={style.Route}>
        <h5>Institute Management</h5>
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
         loading={isLoading}
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
          style={{ marginTop: 16, textAlign: 'right' }}
        />
      </div>
    </>
  );
};

export default InstituteManagement;
