/**
 * Created by renjp on 2019/1/3.
 */
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Layout} from "antd";


export default function () {
    return(
        <div>
            <Layout className="login-main">
                <QueueAnim delay={300}>
                    <div key="a">
                        <p>1111</p>
                        <p>1111</p>
                        <p>1111</p>
                        <p>1111</p>
                    </div>
                </QueueAnim>
            </Layout>
        </div>
    )
}