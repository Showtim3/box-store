import React from "react";
import "../../assets/scss/components/layout.scss";
import TopBar from "../TopBar";
import FooterComponent from "./FooterComponent";

interface IProps {
    children: React.ReactFragment
}

const Layout = (props: IProps) =>{
    return(
        <div className='layout-container'>
            <div className={"layout-topbar"}>
                <TopBar/>
            </div>
            <div className={"layout-content"}>
                {props.children}
            </div>
            <FooterComponent/>
        </div>
    );
};
export default Layout;
