import { Button } from "@mui/material";
import { FC } from "react";

const CustomFlexBoxItem: FC<any> = ( {name, id, order, onClick, colWidth, text, style, ...props}) => {
    const styleValue: any = { ...style, flex:colWidth, order: order};

    return (
        <div style={styleValue} {...props}>
            <Button id={id} onClick={onClick} name={name}>
                {text}
            </Button>
        </div>
    )
}

export default CustomFlexBoxItem;