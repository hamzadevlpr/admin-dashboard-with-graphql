'use client'


import React, { useEffect, useState } from 'react';
import { Form, Button, message, Typography, Flex } from 'antd';
import { InputOTP } from 'antd-input-otp';

interface FormValues {
    otp: string;
}

const Verification: React.FC = () => {
    const { Title, Paragraph, Text, Link } = Typography;
    const [form] = Form.useForm();
    const [counter, setCounter] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev === 0) {
                    clearInterval(interval);
                    return 60;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const onFinish = (values: FormValues) => {
        const { otp } = values;
        if (otp === '123456') {
            message.success('OTP validated. Logging in...');
        }
    };

    return (
        <section className="flex flex-col items-center text-center justify-center h-screen bg-white">
            <div className="flex flex-col justify-center items-center gap-4 my-4">
                <h1 className="text-2xl font-semibold">Get Verified</h1>

                <p className="text-sm text-gray-600 text-center">
                    Welcome back to dashboard UI! Please enter <br /> otp number below to verify your account.
                </p>
            </div>
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                requiredMark="optional"
            >
                <Form.Item
                    name="otp"
                    rules={[
                        {
                            required: true,
                            message: "Please enter OTP",
                        },
                        {
                            pattern: /^[0-9]{6}$/,
                            message: "OTP must be 6 digits",
                        },
                    ]}
                >
                    <InputOTP />
                </Form.Item>
                <Form.Item>
                    <Button block type="primary" htmlType="submit" size="large">
                        Verify
                    </Button>
                </Form.Item>
                {
                    counter > 0 ? (
                        <Text type="secondary">
                            Resend OTP in <Text strong>{counter}</Text> seconds
                        </Text>
                    ) : (
                        <Button block size="large">Resend OTP</Button>
                    )
                }
            </Form>



        </section >
    );
};

export default Verification;
