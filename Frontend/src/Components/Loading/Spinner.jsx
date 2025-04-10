import React from 'react';
import { Spin } from 'antd';
const Spinner = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50 dark:bg-background-dark animate-fadeIn">
        <Spin size='large'  style={{ color: '#2563EB' }} />
    </div>
)
export default Spinner;