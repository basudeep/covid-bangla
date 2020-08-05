import { PureComponent, useEffect, useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts'

const Chart = () => {

    const [chartdata, setChartdata] = useState()

    useEffect(() => {
        fetch('https://api.covid19india.org/data.json')
            .then(res => res.json())
            .then(result => {
                setChartdata(result.cases_time_series)
            })
    }, [])

    return (
        <div>
            
            {
                chartdata ?
                    <div className='col-xl-12' style={{ maxWidth: '800px', height: 350, margin: 'auto', }}>
                        <ResponsiveContainer>
                            <AreaChart
                                data={chartdata}
                                margin={{
                                    top: 20, right: 0, left: -20, bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="1 1" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="dailydeceased" stackId="1" stroke="#c70039" fill="#c70039" />
                                <Area type="monotone" dataKey="dailyrecovered" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                <Area type="monotone" dataKey="dailyconfirmed" stackId="1" stroke="#fbd46d" fill="#fbd46d" />
                            </AreaChart>
                        </ResponsiveContainer>


                        <h4 className='font-weight-bold pt-5 mt-5 my-4 text-center'>দৈনিক করোনায় আক্তান্ত বৃদ্ধির হার</h4>
                        <ResponsiveContainer>
                            <BarChart
                                data={chartdata}
                                margin={{
                                    top: 10, right: 0, left: -20, bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="1 1" />
                                <XAxis dataKey="date"/>
                                <YAxis type='number' domain={[0,80000]} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="dailyconfirmed" fill="#8884d8" />
                            </BarChart>

                        </ResponsiveContainer>
                    </div>
                    :

                    ''
            }
            <style jsx global>{`
                tspan {
                    font-size: 12px;
                }
                .bg-white{
                    backgroud:#fff;
                }
                .recharts-wrapper {
                    width: 200px;
                    height: 100px;
                }
                
            `}</style>
        </div>
    )
}

// export async function getStaticProps(){
//     const res = await fetch('https://api.covid19india.org/data.json')
//     const data = await res.json()
//     console.log(data.cases_time_series)
//     return{
//         props:{
//             result : data.cases_time_series
//         }
//     }
// }




export default Chart
