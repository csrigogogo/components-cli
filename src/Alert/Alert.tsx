import React from 'react'

interface AlertProps {
    children: any,
    kinds: 'info'| 'positive'| 'negative'| 'warning',
    [key: string]: any
}
const kinds = {
    info: '#5352ED',
    positive: '#2ED573',
    negative: '#FF4757',
    warning: '#FFA502',
}

export const Alert = ({ children, kind, ...rest }: AlertProps) => (
    <div
        style={{
            padding: 20,
            background: 'white',
            borderRadius: 3,
            color: 'white',
            // @ts-ignore
            background: kinds[kind],
        }}
        {...rest}
    >
        {children}
    </div>
)



Alert.defaultProps = {
    kind: 'info',
}

