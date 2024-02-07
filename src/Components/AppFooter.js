import {Typography} from "antd";

const AppFooter = () => {
    return ( 
        <div className="AppFooter">
            <Typography.Link href="tel: +916383784798">+91 6383784798</Typography.Link>
            <Typography.Link href="https://www.google.com" target={"_blank"}>Policy</Typography.Link>
            <Typography.Link href="https://www.google.com" target={"_blank"}>Term of Use</Typography.Link>
        </div>
     );
}
 
export default AppFooter;