'use client'
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function App() {
    const router = useRouter();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        router.push('/auth/verify')
    };

    return (
        <section className="flex items-center justify-center h-screen bg-white">
            <div className="max-w-md w-full p-6">
                <div className="flex flex-col gap-2  mb-6">
                    <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect x="0.464294" width="24" height="24" rx="4.8" fill="#1890FF" />
                        <path
                            d="M14.8643 3.6001H20.8643V9.6001H14.8643V3.6001Z"
                            fill="white"
                        />
                        <path
                            d="M10.0643 9.6001H14.8643V14.4001H10.0643V9.6001Z"
                            fill="white"
                        />
                        <path
                            d="M4.06427 13.2001H11.2643V20.4001H4.06427V13.2001Z"
                            fill="white"
                        />
                    </svg>
                    <h1 className="text-2xl font-semibold">Sign in</h1>
                    <p className="text-sm text-gray-600">
                        Welcome back to dashboard UI! Please enter your details below to sign in.
                    </p>
                </div>
                <Form
                    name="normal_login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    layout="vertical"
                    requiredMark="optional"
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: "email",
                                required: true,
                                message: "Please input your Email!",
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined className="pr-2" />} placeholder="Email" size={'large'} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined className="pr-2" />} type="password" placeholder="Password" size={'large'} />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <a className="float-right text-blue-400 font-medium underline" href="">
                            Forgot password?
                        </a>
                    </Form.Item>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit" size={'large'}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
}
