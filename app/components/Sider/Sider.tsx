'use client'
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import style from './sider.module.css';
import Logo from '../../Images/Logo_Image.png';
import { HomeOutlined, FolderOpenOutlined } from '@ant-design/icons';
import { LiaClipboardListSolid } from "react-icons/lia";
import { BiUser } from "react-icons/bi";
import { PiCreditCardLight, PiNotebookThin, PiPuzzlePieceLight } from "react-icons/pi";
import { CiCalendar, CiSearch } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { Input } from 'antd';
import { Dropdown, Space, Menu } from 'antd';
import { DownOutlined, } from '@ant-design/icons';
import Flag from "../../Images/language.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import profile_image from '../../Images/profile_image.png';
import InternalSwitch from '../InternalSwitchTag/internalSwitchTag';
import Calender from '../Calender/CalenderData';
import InstituteManagement from '../InstituteManagement/InstituteManagement';
import ServiceConfiguration from '../ServiceConfiguration/ServiceConfiguration';
import InternalResponseCode from '../InternalResponseCode/InternalResponseCode';
import InternalTranCode from '../InternalTranCode/InternalTranCode';
import ClusterManagement from '../ClusterManagement/ClusterManagement';
import ChannelList from '../ChannelList/ChannelList';
import FieldDefination from '../FieldDefination/fieldDefination';
import ProtocolVariation from '../ProtocolVariation/protocolVariation';
import Transaction from '../Transaction/transaction'
import VRFList from '../VRFList/vrf_List'
import Adaptor from '../Adaptor/Adaptor';
import TrigerFlow from '../TrigerFlow/trigerFlow';
import RoutingKey from '../RoutingKey/routingKey'
import Image from 'next/image';
import Link from 'next/link';
import TrasCodeMapping from '../TransCodeMapping/TransCodeMapping'
import ResCodeMapping from '../ResCodeMapping/ResCodeMapping'
import type { MenuProps } from 'antd';



// interface MenuItem {
//     key: string;
//     label: string | React.ReactNode;
//     icon?: React.ReactNode;
//     children?: MenuItem[];
//     type?: 'divider';
// }
// interface MenuItemClose {
//     key: string;
//     icon?: React.ReactNode;
//     children?: MenuItemClose[];
//     type?: 'divider';
// }


const Sider: React.FC = () => {
    const [isMenu, setMenu] = useState<boolean>(false);
    const [isView, setView] = useState<{ key: string } | string>('');
    const [isClient, setClient] = useState(false)

    useEffect(() => {
        setClient(true)
    }, [])


    const handleMenuToggle = () => {
        setMenu(!isMenu);
    };

    const items2 = [
        {
            key: '1',
            label: (
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Image src={Flag} alt="English" width={20} height={20} />
                    <p className='p-0 mx-1 my-0'>English</p>
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Image src={Flag} alt="French" width={20} height={20} />
                    <p className='p-0 mx-1 my-0'>French</p>
                </div>
            ),
        },
    ];

    const items: MenuProps['items'] = [
        {
            key: 'Dashboard',
            label: 'Dashboard',
            icon: <HomeOutlined style={{ fontSize: 20, color: "#626C70" }} />,
        },
        {
            type: 'divider',
            key: "",
        },
        {
            key: 'Administration',
            label: 'Administration',
            icon: <CiCalendar style={{ fontSize: 20 }} />,
            children: [
                { key: 'Internal_Switch_Tag', label: 'Internal Switch Tag' },
                { key: 'Institute_Management', label: 'Institute Management' },
                { key: 'Service_Configuration', label: 'Service Configuration' },
                { key: 'Internal_Response_Code', label: 'Internal Response Code' },
                { key: 'Internal_Tran_Code', label: 'Internal Tran Code' },
                { key: 'Calendar', label: 'Calendar' },
                { key: 'Cluster_Management', label: 'Cluster Management' },
            ],
        },
        {
            key: 'Channel_Management',
            label: 'Channel Management',
            icon: <LiaClipboardListSolid style={{ fontSize: 20 }} />,
            children: [
                { key: 'Channel_List', label: 'Channel List' },
                { key: 'Adaptor', label: 'Adaptor' },
                { key: 'Field_Definition', label: 'Field Definition' },
                { key: 'Protocol_Variation', label: 'Protocol Variation' },
                { key: 'Transaction', label: 'Transaction' },
                { key: 'VRF_List', label: 'VRF List' },
                { key: 'Triger_Flow', label: 'Triger Flow' },
                { key: 'Routing_Key', label: 'Routing Key' },
                { key: 'Tran_Code_Mapping', label: 'Tran Code Mapping' },
                { key: 'Response_Code_Mapping', label: 'Response Code Mapping' },
            ],
        },
        {
            key: 'Monitoring',
            label: 'Monitoring',
            icon: <FolderOpenOutlined style={{ fontSize: 19 }} />,
            children: [
                { key: 'Transaction_Monitoring', label: 'Transaction Monitoring' },
                { key: 'Channel_Monitoring', label: 'Channel Monitoring' },
                { key: 'Service_Monitoring', label: 'Service Monitoring' },
                { key: 'SAF_Transaction', label: 'SAF Transaction' },
            ],
        },
        {
            key: 'Reports',
            label: 'Reports',
            icon: <BiUser size={20} />,
            children: [
                { key: 'Transaction_Monitoring ', label: 'Transaction Monitoring' },
                { key: 'Channel_Monitoring ', label: 'Channel Monitoring' },
                { key: 'Service_Monitoring ', label: 'Service Monitoring' },
                { key: 'SAF_Transaction ', label: 'SAF Transaction' },
            ],
        },
        {
            key: 'Settlement',
            label: 'Settlement',
            icon: <PiNotebookThin size={20} />,
            children: [
                { key: 'Transaction_Monitoring  ', label: 'Transaction Monitoring' },
                { key: 'Channel_Monitoring  ', label: 'Channel Monitoring' },
                { key: 'Service_Monitoring  ', label: 'Service Monitoring' },
                { key: 'SAF_Transaction  ', label: 'SAF Transaction' },
            ],
        },
        {
            key: 'Fees_Management',
            label: 'Fees Management',
            icon: <PiCreditCardLight size={20} />,
            children: [
                { key: 'Transaction_Monitoringf', label: 'Transaction Monitoring' },
                { key: 'Channel_Monitoringf', label: 'Channel Monitoring' },
                { key: 'Service_Monitoringf', label: 'Service Monitoring' },
                { key: 'SAF_Transactionf', label: 'SAF Transaction' },
            ],
        },
        {
            key: 'User Management',
            label: 'User Management',
            icon: <PiPuzzlePieceLight size={20} />,
            children: [
                { key: 'Transaction_Monitoringu', label: 'Transaction Monitoring' },
                { key: 'Channel_Monitoringu', label: 'Channel Monitoring' },
                { key: 'Service_Monitoringu', label: 'Service Monitoring' },
                { key: 'SAF_Transactionu', label: 'SAF Transaction' },
            ],
        },
    ];

    const itemsClose: MenuProps['items'] = [
        {
            key: 'Dashboard',
            icon: <HomeOutlined style={{ fontSize: 20, color: "#626C70" }} />,
        },
        {
            type: 'divider',
            key: "",
        },
        {
            key: 'Administration',
            icon: <CiCalendar style={{ fontSize: 20 }} />,
        },
        {
            key: 'Channel_Management',
            icon: <LiaClipboardListSolid style={{ fontSize: 20 }} />,
        },
        {
            key: 'Monitoring',
            icon: <FolderOpenOutlined style={{ fontSize: 19 }} />,
        },
        {
            key: 'Reports',
            icon: <BiUser size={20} />,
        },
        {
            key: 'Settlement',
            icon: <PiNotebookThin size={20} />,
        },
        {
            key: 'Fees_Management',
            icon: <PiCreditCardLight size={20} />,
        },
        {
            key: 'User Management',
            icon: <PiPuzzlePieceLight size={20} />,
        },
    ];

    const HandleClick: MenuProps['onClick'] = (info) => {
        setView({ key: info.key });
    };
    return (
        <section>
            <div className={`container-fluid ${style.containerFluid}`}>
                <div className={`row ${style.row}`}>
                    <div className={style.sidersMenus}>
                        {isMenu ? (
                            <div className={style.ContainerClose}>
                                {isClient && (
                                    <Image alt='logo' src={Logo} className={style.LogoClose} width={100} height={100}  />
                                )}
                                <div className={style.sideList}>
                                    <Menu
                                        onClick={HandleClick}
                                        items={itemsClose}
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        mode="inline"
                                        style={{ border: "none" }}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className={style.Container}>
                                {isClient && (
                                    <Image alt='logo' src={Logo} className={style.LogoOpen} width={200} height={50} />
                                )}
                                <div className={style.sideList}>
                                    <Menu
                                        onClick={HandleClick}
                                        items={items}
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        mode="inline"
                                        style={{ border: "none",color: "#626C70", fontSize:"14px" }}
                                    />
                                </div>
                            </div>
                        )}

                        <div className={style.contentSide}>
                            <div className={style.ContainerHeader}>
                                <div className={style.headerSearch}>
                                    <IoMdMenu size={24} className={style.menuIcon} onClick={handleMenuToggle} />
                                    <Input placeholder='Search...' prefix={<CiSearch className={style.searchIcon} />} />
                                </div>
                                <div className={style.profile}>
                                    <Dropdown
                                        menu={
                                            { items: items2 }
                                        }
                                        className={style.Dropdown}
                                    >
                                        <Link href={'/'} className={style.link} onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <Image src={Flag} alt="English" width={20} height={20} />
                                                Language
                                                <DownOutlined />
                                            </Space>
                                        </Link>
                                    </Dropdown>
                                    <CiGrid41 className={style.amdin} />
                                    <IoIosNotificationsOutline className={style.amdin} />
                                    <div className={style.profileContainer}>
                                        {isClient && (
                                            <Image src={profile_image} alt='profile' width={35} height={35} className={style.profileImg} />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                {typeof isView === 'object' && isView.key === 'Internal_Switch_Tag' && <InternalSwitch />}
                                {typeof isView === 'object' && isView.key === 'Institute_Management' && <InstituteManagement />}
                                {typeof isView === 'object' && isView.key === 'Service_Configuration' && <ServiceConfiguration />}
                                {typeof isView === 'object' && isView.key === 'Internal_Response_Code' && <InternalResponseCode />}
                                {typeof isView === 'object' && isView.key === 'Internal_Tran_Code' && <InternalTranCode />}
                                {typeof isView === 'object' && isView.key === 'Calendar' && <Calender />}
                                {typeof isView === 'object' && isView.key === 'Cluster_Management' && <ClusterManagement />}
                                {typeof isView === 'object' && isView.key === 'Channel_List' && <ChannelList />}
                                {typeof isView === 'object' && isView.key === 'Adaptor' && <Adaptor />}
                                {typeof isView === 'object' && isView.key === 'Field_Definition' && <FieldDefination />}
                                {typeof isView === 'object' && isView.key === 'Protocol_Variation' && <ProtocolVariation />}
                                {typeof isView === 'object' && isView.key === 'Transaction' && <Transaction />}
                                {typeof isView === 'object' && isView.key === 'VRF_List' && <VRFList />}
                                {typeof isView === 'object' && isView.key === 'Triger_Flow' && <TrigerFlow />}
                                {typeof isView === 'object' && isView.key === 'Routing_Key' && <RoutingKey />}
                                {typeof isView === 'object' && isView.key === 'Tran_Code_Mapping' && <TrasCodeMapping />}
                                {typeof isView === 'object' && isView.key === 'Response_Code_Mapping' && <ResCodeMapping />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sider;
