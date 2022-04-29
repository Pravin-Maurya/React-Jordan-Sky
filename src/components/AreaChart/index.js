import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import GoPrimitiveDot from 'react-icons/go'


const data = [
    {
      "name": "Jan",
      "uv": 3000,
      "pv": 5000,
      "amt": 2400
    },
    {
      "name": "Feb",
      "uv": 2000,
      "pv": 6000,
      "amt": 2210
    },
    {
      "name": "Mar",
      "uv": 3800,
      "pv": 2100,
      "amt": 2290
    },
    {
      "name": "Apr",
      "uv": 2900,
      "pv": 2900,
      "amt": 2000
    },
    {
      "name": "May",
      "uv": 1900,
      "pv": 4500,
      "amt": 2181
    },
    {
      "name": "Jun",
      "uv": 5800,
      "pv": 2100,
      "amt": 2500
    },
    {
      "name": "Jul",
      "uv": 4200,
      "pv": 4280,
      "amt": 2100
    },
    {
      "name": "Aug",
      "uv": 2000,
      "pv": 7200,
      "amt": 2100
    },
    {
      "name": "Sep",
      "uv": 4000,
      "pv": 4000,
      "amt": 2100
    },
    {
      "name": "Oct",
      "uv": 4100,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "Nov",
      "uv": 3400,
      "pv": 5000,
      "amt": 2100
    },
    {
      "name": "Dec",
      "uv": 3000,
      "pv": 3000,
      "amt": 2100
    }
  ]

export default class Rchart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
          <div className='header-container'>
              <div className='balance-container'>
                  <p className='my-balance'>My Balance</p>
                  <h1 className='amount'>$2634.80</h1>
              </div>
              <div className='income-spend-container'>
                  <div className='income-container'>
                      <GoPrimitiveDot className='income-symbol'/>
                      <p className='details-text'>Income</p>
                  </div>
                  <div className='spend-container'>
                      <GoPrimitiveDot className='spend-symbol'/>
                      <p className='details-text'>Spend</p>
                  </div>
              </div>
              <div className='time-period-container'>
                  <p className='period-text'>Day</p>
                  <p className='period-text'>Week</p>
                  <p className='period-text'>Month</p>
                  <p className='period-text'>Year</p>
              </div>
          </div>
        <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
      </ResponsiveContainer>
    );
  }
}
