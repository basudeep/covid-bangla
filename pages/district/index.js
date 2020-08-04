import { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import Info from '../../pages/info'
import { MetroSpinner } from 'react-spinners-kit'
const District = () => {

    const [states, setStates] = useState({})
    const [rajjo, setRajjo] = useState()
    const [districts, setDistricts] = useState()
    const [district, setDistrict] = useState()
    const [result, setResult] = useState()
    const [ loading, setLoading] = useState(false)
    // console.log(states[rajjo])
    useEffect(() => {
        setLoading(true)
        fetch('https://api.covid19india.org/state_district_wise.json')
        .then( res => res.json())
        .then( data => {
            return setStates(data)
        })
        
        setDistricts(states[rajjo])
        if (!district == '') {
            // console.log(states[rajjo].districtData[district])
            setResult(states[rajjo].districtData[district])
        }
        setLoading(false)
    },[ rajjo, district ])
    return (
        <div>
            <div className="jumbotron">
                <div className='container'>
                    <h1 className="display-4">Corona Virus District Wise In India</h1>
                </div>
            </div>
            {
                loading ? 

                    <div className='col-xl-12 text-center'>
                        <div className='center'>
                            <MetroSpinner color='#0097F7' />
                        </div>
                    </div>   
                 :
                
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-3'>
                        <label>Select State</label>
                        <select onChange={(e) => { setRajjo(e.currentTarget.value) }} id="inlineFormCustomSelectPref" className="my-select" >
                            <option selected disabled >রাজ্যের তালিকা </option>
                            {
                                Object.keys(states).map((state, key) => {
                                    if (key != 0)
                                        return (
                                            <option key={key} value={state}>{state}</option>
                                        )
                                    }

                                )
                            }
                        </select>
                    </div>

                    <div className='col-md-6 mt-3'>
                        <label>Select District</label>
                        <select id="inlineFormCustomSelectPref" onChange={(e) => { setDistrict(e.currentTarget.value) }} className="my-select" >
                            {
                                districts ?
                                    <option selected disabled >জেলার তালিকা</option>
                                    :
                                    ''
                            }


                            {
                                districts ?

                                    Object.keys(districts.districtData).map((district, key) => {
                                        return (
                                            <option key={key} value={district}>{district}</option>
                                        )
                                    }

                                    )
                                    :
                                    <option selected disabled >আগে রাজ্য নির্বাচন করুন </option>
                            }

                        </select>
                    </div>

                </div>




                <div className='row my-5'>
                    <div className='col-xl-12 col-12'>
                        <div className='statname'>
                            <h2 className='text-center font-weight-bold'>{result ? rajjo + ` রাজ্যের ${district} জেলায়  করোনায় মোট আক্তান্ত, মোট মৃত্যু এবং মোট সুস্থতার পরিসংখ্যান ` : ''}</h2>
                        </div>
                    </div>
                </div>



                <div className='row state justify-content-center my-5'>
                    <div className="col-md-3 col-6">
                        <div className="single-card effected">
                            <h3>মোট আক্রান্ত</h3>
                            <h1> <CountUp end={parseFloat(result ? result.confirmed : '0')} delay={1} start={0} duration={3}/></h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-card dead">
                            <h3>মোট মৃত্যু</h3>
                            <h1 className="counter"><CountUp end={parseFloat(result ? result.deceased : '0')} delay={1} start={0} duration={3}/></h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-card recovered">
                            <h3>মোট সুস্থ</h3>
                            <h1 className="counter"><CountUp end={parseFloat(result ? result.recovered : '0')} delay={1} start={0} duration={3}/></h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-card active">
                            <h3>মোট সক্রিয়</h3>
                            <h1 className="counter"><CountUp end={parseFloat(result ? result.active : '0')} delay={1} start={0} duration={3}/></h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-card under-treatment">
                            <h3>নতুন আক্রান্ত</h3>
                            <h1 className="counter"><CountUp end={parseFloat(result ? result.delta.confirmed : '0')} delay={1} start={0} duration={3}/></h1>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="single-card new-death">
                            <h3>আজকের মৃত্যু</h3>
                            <h1 className="counter"><CountUp end={parseFloat(result ? result.delta.deceased : '0')} delay={1} start={0} duration={3}/></h1>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="single-card new-recover">
                            <h3>আজকের সুস্থ</h3>
                            <h1 className="counter"><CountUp end={parseFloat(result ? result.delta.recovered : '0')} delay={1} start={0} duration={3}/></h1>
                        </div>
                    </div>
                </div>


            </div>

                            
            }
             <Info />                  
                            
        </div>
    )
}




export default District
