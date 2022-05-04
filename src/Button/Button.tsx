import { Button , ButtonProps } from 'antd';

import 'antd/dist/antd.css'

const AButton = (props: ButtonProps) => {
    return <Button {...props}></Button>
}

export {
    Button,
    AButton
}
