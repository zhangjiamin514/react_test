import { PageContainer } from '@ant-design/pro-layout';
import { Button, Descriptions, Space } from 'antd';

import { LikeOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '基本信息内容',
      name: '张佳民',
    };
  }

  render() {
    const { Statistic } = StatisticCard;

    const content = (
      <Descriptions size="small" column={2}>
        <Descriptions.Item label="创建人">{this.state.name}</Descriptions.Item>
        <Descriptions.Item label="联系方式">
          <a>13167845679</a>
        </Descriptions.Item>
        <Descriptions.Item label="创建时间">2022-02-23</Descriptions.Item>
        <Descriptions.Item label="更新时间">2022-02-23</Descriptions.Item>
        <Descriptions.Item label="备注">北京天源迪科网络科技有限公司</Descriptions.Item>
      </Descriptions>
    );

    return (
      <PageContainer
        content={content}
        tabList={[
          {
            tab: '基本信息',
            key: 'base',
          },
          {
            tab: '详细信息',
            key: 'info',
          },
        ]}
        onTabChange={(key) => {
          this.setState({ value: key === 'base' ? '基本信息内容' : '详细信息内容' });
        }}
        extraContent={
          <Space size={24}>
            <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
            <Statistic title="Unmerged" value={93} suffix="/ 100" />
          </Space>
        }
        extra={[
          <Button key="3">操作</Button>,
          <Button key="2">操作</Button>,
          <Button key="1" type="primary">
            主操作
          </Button>,
        ]}
      >
        <div
          style={{
            height: 'auto',
          }}
        >
          <RcResizeObserver key="resize-observer">
            <ProCard
              title="数据概览"
              extra="2019年9月28日 星期五"
              split="vertical"
              headerBordered
              bordered
            >
              <ProCard split="horizontal">
                <ProCard split="horizontal">
                  <ProCard split="vertical">
                    <StatisticCard
                      statistic={{
                        title: '昨日全部流量',
                        value: 234,
                        description: (
                          <Statistic title="较本月平均流量" value="8.04%" trend="down" />
                        ),
                      }}
                    />
                    <StatisticCard
                      statistic={{
                        title: '本月累计流量',
                        value: 234,
                        description: <Statistic title="月同比" value="8.04%" trend="up" />,
                      }}
                    />
                  </ProCard>
                  <ProCard split="vertical">
                    <StatisticCard
                      statistic={{
                        title: '运行中实验',
                        value: '12/56',
                        suffix: '个',
                      }}
                    />
                    <StatisticCard
                      statistic={{
                        title: '历史实验总数',
                        value: '134',
                        suffix: '个',
                      }}
                    />
                  </ProCard>
                </ProCard>
                <StatisticCard
                  title="流量走势"
                  chart={
                    <img
                      src="https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg"
                      width="100%"
                    />
                  }
                />
              </ProCard>
              <StatisticCard
                title="流量占用情况"
                chart={
                  <img
                    src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
                    alt="大盘"
                    width="100%"
                  />
                }
              />
            </ProCard>
          </RcResizeObserver>
        </div>
      </PageContainer>
    );
  }
}

export default Welcome;
