import { useEffect, useState } from "react"
import { getCookie } from "../../utils/cookies";

import arrowLeft from '../../assets/images/keyboard_double_arrow_left.png';
import arrowRight from '../../assets/images/keyboard_double_arrow_right.png';
import logo from '../../assets/images/logo.png';
import logoDesabled from '../../assets/images/logo_menu_desabled.png';

import Image from "next/image";
import Link from 'next/link'

export default function Home({ children, ...pageProps }) {
    const [menu, setMenu] = useState(true);
    const [listMenu, setListMenu] = useState(pageProps.setListMenu);

    useEffect(() => {
        if(!pageProps.setListMenu) setListMenu(0);

        const fetchData = async () => {
            const token = getCookie("TOKEN_AUTH");
            if(!token) { window.location.href = '/';  return false; };
            const response = await fetch("/api/login/status",{ method: "POST", headers: {"Authorization": token}});
            const person = await response.json();
            if(!person.status) { window.location.href = '/';  return false; };
        }; fetchData();
    }, [])

    const caixa_entrada = () => {
        const color = (listMenu == 0) ? "black" : "white";
        return <>
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.4633 0.846154H2.92205C1.5233 0.846154 0.385321 2.0027 0.385321 3.42428V15.7993C0.385321 17.2209 1.5233 18.3774 2.92205 18.3774H8.89555C8.96847 18.3774 9.0378 18.413 9.0811 18.4727L11.2605 21.4756C11.4789 21.7766 11.8152 21.9502 12.1832 21.9519H12.1887C12.5545 21.9519 12.8902 21.7817 13.1102 21.4842L15.339 18.4709C15.3823 18.4123 15.4513 18.3774 15.5234 18.3774H21.4633C22.862 18.3774 24 17.2208 24 15.7992V3.42423C24 2.00265 22.862 0.846154 21.4633 0.846154ZM22.6163 15.7993C22.6163 15.91 22.6008 16.017 22.5725 16.1186L15.4648 9.78634L22.6163 3.75456V15.7993ZM21.4633 2.2524C21.6742 2.2524 21.8719 2.31053 22.0422 2.41145L12.931 10.096C12.5043 10.4559 11.885 10.4559 11.4583 10.096L2.34548 2.41009C2.51521 2.31001 2.7121 2.2524 2.92205 2.2524H21.4633ZM1.81286 16.1186C1.78449 16.017 1.76899 15.91 1.76899 15.7993V3.75128L8.92249 9.78461L1.81286 16.1186ZM14.2331 17.6259L12.1903 20.3876L10.1946 17.6379C9.89171 17.2204 9.40599 16.9711 8.89551 16.9711H2.95494L10.0007 10.694L10.5746 11.1781C11.044 11.574 11.6192 11.7718 12.1946 11.7718C12.7698 11.7718 13.3453 11.5738 13.8146 11.1781L14.3864 10.6957L21.4303 16.9711H15.5234C15.0188 16.9712 14.5364 17.2159 14.2331 17.6259Z" fill={color}/>
            </svg>
            {(menu) ? <>
                <div><span>Caixa de entrada</span></div>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10.1069L10 6.73791L6 3.36896" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </> : ''}
        </>
    }

    const processos = () => {
        const color = (listMenu == 1) ? "black" : "white";
        return <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color}/>
                <path d="M12.0006 13.0797C11.8706 13.0797 11.7406 13.0497 11.6206 12.9797L6.32061 9.9197C5.96061 9.7097 5.84059 9.2497 6.05059 8.8997C6.26059 8.5397 6.72061 8.4197 7.07061 8.6297L11.9906 11.4797L16.8806 8.6497C17.2406 8.4397 17.7006 8.5697 17.9006 8.9197C18.1006 9.2697 17.9806 9.7397 17.6306 9.9397L12.3706 12.9797C12.2606 13.0397 12.1306 13.0797 12.0006 13.0797Z" fill={color}/>
                <path d="M12 18.5201C11.59 18.5201 11.25 18.1801 11.25 17.7701V12.3301C11.25 11.9201 11.59 11.5801 12 11.5801C12.41 11.5801 12.75 11.9201 12.75 12.3301V17.7701C12.75 18.1801 12.41 18.5201 12 18.5201Z" fill={color}/>
                <path d="M12.0002 18.7498C11.4202 18.7498 10.8503 18.6198 10.3903 18.3698L7.19025 16.5898C6.23025 16.0598 5.49023 14.7898 5.49023 13.6898V10.2998C5.49023 9.20982 6.24025 7.9398 7.19025 7.3998L10.3903 5.6198C11.3103 5.1098 12.6902 5.1098 13.6102 5.6198L16.8102 7.3998C17.7702 7.9298 18.5103 9.19982 18.5103 10.2998V13.6898C18.5103 14.7798 17.7602 16.0498 16.8102 16.5898L13.6102 18.3698C13.1502 18.6298 12.5802 18.7498 12.0002 18.7498ZM12.0002 6.7498C11.6702 6.7498 11.3502 6.8098 11.1202 6.9398L7.92026 8.71981C7.43026 8.9898 6.99023 9.74981 6.99023 10.2998V13.6898C6.99023 14.2498 7.43026 14.9998 7.92026 15.2698L11.1202 17.0498C11.5802 17.3098 12.4202 17.3098 12.8802 17.0498L16.0802 15.2698C16.5702 14.9998 17.0103 14.2398 17.0103 13.6898V10.2998C17.0103 9.73982 16.5702 8.9898 16.0802 8.71981L12.8802 6.9398C12.6502 6.8098 12.3302 6.7498 12.0002 6.7498Z" fill={color}/>
            </svg>
            {(menu) ? <>
                <div><span>Processos</span></div>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10.1069L10 6.73791L6 3.36896" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </> : ''}
        </>
    }

    const dashboard = () => {
        const color = (listMenu == 2) ? "black" : "white";
        return <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3125 0H24V8H13.3125V0ZM13.3125 24V10.6875H24V24H13.3125ZM0 24V16H10.6875V24H0ZM0 13.3125V0H10.6875V13.3125H0Z" fill={color}/>
            </svg>
            {(menu) ? <>
                <div><span>Dashboard</span></div>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10.1069L10 6.73791L6 3.36896" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </> : ''}
        </>
    }

    const admin = () => {
        const color = (listMenu == 3) ? "black" : "white";
        return <>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6875 17.3125C11.6042 18.2292 12.7083 18.6875 14 18.6875C15.2917 18.6875 16.3958 18.2292 17.3125 17.3125C18.2292 16.3958 18.6875 15.2917 18.6875 14C18.6875 12.7083 18.2292 11.6042 17.3125 10.6875C16.3958 9.77083 15.2917 9.3125 14 9.3125C12.7083 9.3125 11.6042 9.77083 10.6875 10.6875C9.77083 11.6042 9.3125 12.7083 9.3125 14C9.3125 15.2917 9.77083 16.3958 10.6875 17.3125ZM23.9375 15.3125L26.75 17.5C27.0417 17.7083 27.0833 18 26.875 18.375L24.1875 23C24.0208 23.2917 23.75 23.375 23.375 23.25L20.0625 21.9375C19.1875 22.5625 18.4375 23 17.8125 23.25L17.3125 26.75C17.2292 27.125 17.0208 27.3125 16.6875 27.3125H11.3125C10.9792 27.3125 10.7708 27.125 10.6875 26.75L10.1875 23.25C9.39583 22.9167 8.64583 22.4792 7.9375 21.9375L4.625 23.25C4.25 23.375 3.97917 23.2917 3.8125 23L1.125 18.375C0.916667 18 0.958333 17.7083 1.25 17.5L4.0625 15.3125C4.02083 15.0208 4 14.5833 4 14C4 13.4167 4.02083 12.9792 4.0625 12.6875L1.25 10.5C0.958333 10.2917 0.916667 10 1.125 9.625L3.8125 5C3.97917 4.70833 4.25 4.625 4.625 4.75L7.9375 6.0625C8.8125 5.4375 9.5625 5 10.1875 4.75L10.6875 1.25C10.7708 0.875 10.9792 0.6875 11.3125 0.6875H16.6875C17.0208 0.6875 17.2292 0.875 17.3125 1.25L17.8125 4.75C18.6042 5.08333 19.3542 5.52083 20.0625 6.0625L23.375 4.75C23.75 4.625 24.0208 4.70833 24.1875 5L26.875 9.625C27.0833 10 27.0417 10.2917 26.75 10.5L23.9375 12.6875C23.9792 12.9792 24 13.4167 24 14C24 14.5833 23.9792 15.0208 23.9375 15.3125Z" fill={color}/>
            </svg>
            {(menu) ? <>
                <div><span>Admin</span></div>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10.1069L10 6.73791L6 3.36896" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </> : ''}
        </>
    }

    return (
        <>
            <style jsx global>{`
                * { margin: 0px; padding: 0px; text-decoration: none; list-style-type: none; }
			
                .container {}
                .container_navigator { position: fixed; top: 0px; left: 0px; width: 300px; height: 100%; background: #2F3944; padding-top: 30px; }
                .container_navigator_active { margin-left: 300px !important; width: calc(100% - 300px) !important; }
                .container_navigator_desabled { width: 90px !important; }
                .container_navigator_menu { display: flex; justify-content: end; padding: 10px; }
                .container_navigator_menu button { background: transparent; border: 0px; cursor: pointer; }
                .container_navigator_header { display: flex; justify-content: center; align-items: center; }
                .container_navigator_list ul { display: flex; flex-direction: column; }
                .container_navigator_list_desabled ul li { cursor: pointer; display: flex; margin: 8px 24px !important; justify-content: center !important; align-items: center; height: 40px; border-radius: 6px; }
                .container_navigator_list ul li { cursor: pointer; color:#FFF; display: flex; justify-content: space-between; align-items: center;  margin: 8px 5px 8px 20px; height: 40px; border-radius: 6px; padding: 0px 10px 0px 38px; }
                .container_navigator_list ul .active , .container_navigator_list_desabled ul .active { background: #FFF; color:#333; }
                .container_navigator_list ul li div { display: flex; width: 100%; padding: 0px 10px; justify-content: left; }
                .container_content { margin-left: 90px; width: calc(100% - 90px); height: calc(100vh - 40px); background: #F4F4F9; display: flex; align-items: center; justify-content: center; }
                .container_content_card { width: calc(100% - 40px); height: calc(100vh - 40px); background: #F4F4F9; }		
               
                @media (max-width: 1280px){
                    .container_navigator_active { margin-left: 90px !important; width: 100% !important; }
                }
            `}</style>

            <div className="container">
                <div className={(menu) ? "container_navigator" : "container_navigator container_navigator_desabled"}>
                    <div className="container_navigator_header">
                        {(menu) ? <Image src={logo} /> : <Image src={logoDesabled} />}
                    </div>
                    <div className="container_navigator_menu">
                        <button onClick={() => setMenu(!menu)}>
                            {(menu) ? <Image src={arrowLeft} /> : <Image src={arrowRight} />}
                        </button>
                    </div>
                    <div className={(menu) ? "container_navigator_list" : "container_navigator_list_desabled"}>
                        <ul>
                        <Link href="/home"><li onClick={() => setListMenu(0)} className={(listMenu == 0) ? "active" : ""}>{caixa_entrada()}</li></Link>
                        <Link href="/home/processos"><li onClick={() => setListMenu(1)} className={(listMenu == 1) ? "active" : ""}>{processos()}</li></Link>
                        <Link href="/home/dashboard"><li onClick={() => setListMenu(2)} className={(listMenu == 2) ? "active" : ""}>{dashboard()}</li></Link>
                        <Link href="/home/admin"><li onClick={() => setListMenu(3)} className={(listMenu == 3) ? "active" : ""}>{admin()}</li></Link>
                        </ul>
                    </div>
                </div>
                <div className={(menu) ? "container_content container_navigator_active" : "container_content"}>
                    <div className="container_content_card">
                       {children}
                    </div>
                </div>
            </div>
        </>
    )
}
