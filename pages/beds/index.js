import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import Info from '../../pages/info'
const Bed = ({ all, states }) => {
    const [selected, setSelected] = useState()
    const [state, setState] = useState()

    useEffect(() => {
        setState(states.regional.filter((single) => single.state == selected).shift())
    }, [selected])

    // console.log(states.regional)
    return (
        <div>
            <div className="jumbotron">
                <div className='container'>
                    <h1 className="4">State-wise estimates of current hospital beds, intensive care unit (ICU) beds and ventilators in India</h1>
                </div>
            </div>
            <div className='container'>
                <div className='row my-3'>
                    <div className='col-xl-12 col-12'>
                        <div className='statname'>
                            <h2 className='text-center font-weight-bold'>মোট গ্রামীন ও শহরের হাসপাতাল ও বেড সংখ্যা </h2>
                        </div>
                    </div>
                </div>
                <div className='row mb-5 align-items-center'>
                    <div className='col-md-6'>
                        <label>Select State</label>
                        <select id="inlineFormCustomSelectPref" onChange={(e) => { setSelected(e.currentTarget.value) }} className="my-select">
                            <option selected disabled >রাজ্যের তালিকা</option>
                            {
                                states.regional.map(data => {
                                    return <option key={data.totalBeds} value={data.state}>{data.state}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="col-md-6 mt-4 text-center">
                        <h3>{ selected ? selected : 'All India'}</h3>
                    </div>
                </div>

                <div className='row state justify-content-center pb-5'>
                    <div className="col-md-3 col-6">
                        <div className="single-card effected">
                            <h3>মোট হাসপাতাল</h3>
                            <h1> <CountUp end={state ? state.totalHospitals : all.totalHospitals} start={0} duration={3} /></h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-card dead">
                            <h3>মোট বেড </h3>
                            <h1 className="counter"><CountUp end={state ? state.totalBeds : all.totalBeds}  start={0} duration={3} /></h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-card recovered">
                            <h3>শহরের হাসপাতাল</h3>
                            <h1 className="counter"><CountUp end={state ? state.urbanHospitals : all.urbanHospitals} start={0} duration={3} /></h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-card active">
                            <h3>শহরের মোট বেড</h3>
                            <h1 className="counter"><CountUp end={state ? state.urbanBeds : all.urbanBeds} start={0} duration={3} /></h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-card under-treatment">
                            <h3>গ্রামীণ হাসপাতাল</h3>
                            <h1 className="counter"><CountUp end={state ? state.ruralHospitals : all.ruralHospitals} start={0} duration={3} /></h1>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="single-card new-death">
                            <h3>গ্রামের মোট বেড</h3>
                            <h1 className="counter"><CountUp end={state ? state.ruralBeds : all.ruralBeds} start={0} duration={3} /></h1>
                        </div>
                    </div>
                </div>
            </div>

            <Info></Info>              
                <style jsx>{`
                    .state .single-card h1 span {
                        font-size: 30px;
                `}</style>            
        </div>
    )
}


export async function getStaticProps() {
    const res = await fetch('https://api.rootnet.in/covid19-in/hospitals/beds')
    const result = await res.json()
    return {
        props: {
            all: result.data.summary,
            states: result.data

        }
    }
}


export default Bed