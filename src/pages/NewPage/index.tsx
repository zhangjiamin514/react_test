import React, { useState } from 'react';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import { Line, Column } from '@ant-design/charts';

const Page: React.FC = () => {
  const [tab, setTab] = useState('tab2');
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  const data2 = [
    {
      action: '浏览网站',
      pv: 50000,
    },
    {
      action: '放入购物车',
      pv: 35000,
    },
    {
      action: '生成订单',
      pv: 25000,
    },
    {
      action: '支付订单',
      pv: 15000,
    },
    {
      action: '完成交易',
      pv: 8500,
    },
  ];
  const config2 = {
    data: data2,
    xField: 'action',
    yField: 'pv',
    conversionTag: {},
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return (
    <PageContainer>
      <ProCard
        tabs={{
          type: 'card',
          activeKey: tab,
          onChange: (key) => {
            setTab(key);
          },
        }}
      >
        <ProCard.TabPane key="tab1" tab="产品一" style={{ height: 500 }}>
          <ProCard style={{ marginTop: 8, height: 300 }} gutter={8} title="组件展示">
            <ProCard
              style={{ height: 300 }}
              colSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
              layout="left"
              bordered
            >
              <Line style={{ height: 300 }} {...config} />
            </ProCard>
            <ProCard
              style={{ height: 300 }}
              colSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
              layout="left"
              bordered
            >
              <Column style={{ height: 300 }} {...config2} />
            </ProCard>
          </ProCard>
        </ProCard.TabPane>
        <ProCard.TabPane key="tab2" tab="产品二">
          内容二
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};
export default Page;
