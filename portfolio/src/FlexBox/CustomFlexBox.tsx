import { FC, PropsWithChildren } from "react";

const style: any = {
    display: 'flex'
}

const CustomFlexBox: FC<PropsWithChildren<any>> = (props) => {
    const { children, ...rest } = props;
    return (<div style={style} {...rest}>{children}</div>)
}

export default CustomFlexBox;