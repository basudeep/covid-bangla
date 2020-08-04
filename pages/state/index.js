import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import Info from '../../pages/info'
const Web = ({ posts }) => {

    const [item, setItem] = useState()
    const [value, setValue] = useState('West Bengal')
    useEffect(() => {
         setItem(posts.filter((post) => post.state === value).shift())
        // console.log(item)
    }, [value])



    return (
        <div>
            <div className="jumbotron">
                <div className='container'>
                    <h1>Corona Virus States Wise In India</h1>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                            <label>Select State</label>
                            <select id="inlineFormCustomSelectPref" onChange={(e) => setValue(e.currentTarget.value)} value={value} className="my-select">
                            <option disabled>রাজ্যের তালিকা </option>
                                {
                                    posts.map((post, index) => {
                                        if(index != 0)
                                        return(
                                            <option  key={post.statecode} value={post.state}>{post.state.substring(0,26)}</option>
                                        )
                                        
                                    })
                                }
                            </select>
                    </div>
                </div>

                <div className='row my-2'>
                    <div className='col-12 text-right'>
                     { item && <span> সর্বশেষ আপডেট হয়েছে {item.lastupdatedtime.substring(0,10) } সময় {item.lastupdatedtime.substring(10) }</span> } 
                    </div>              
                    <div className='col-xl-12 col-12 my-4'>
                        <div className='statname'>
                            <h2 className='font-weight-bold text-center'>{item ? item.state +' রাজ্যের করোনায় মোট আক্রান্ত, মোট মৃত্যু এবং মোট সুস্থতার পরিসংখ্যান ' : ''}</h2>
                        </div>
                    </div>  
                </div>


               
                <div className='row state justify-content-center mb-5'>
                    <div className="col-md-3 col-6">
                        <div className="single-card effected">
                            <h3>মোট আক্রান্ত</h3>
                            <h1> <CountUp end= {parseFloat(item ? item.confirmed : '0')} delay={3} start={0} duration={3}/></h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-card dead">
                            <h3>মোট মৃত্যু</h3>
                            <h1 className="counter"><CountUp end= { parseFloat(item ? item.deaths : '0') } delay={3} start={0} duration={3}/></h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-card recovered">
                            <h3>মোট সুস্থ</h3>
                            <h1 className="counter"><CountUp end= { parseFloat(item ? item.recovered : '0') } delay={3} start={0} duration={3}/></h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-card active">
                            <h3>মোট সক্রিয়</h3>
                            <h1 className="counter"><CountUp end= { parseFloat(item ? item.active : '0') } delay={3} start={0} duration={3}/></h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="single-card under-treatment">
                            <h3>নতুন আক্রান্ত</h3>
                            <h1 className="counter"><CountUp end= { parseFloat(item ? item.deltaconfirmed : '0') } delay={3} start={0} duration={3}/></h1>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="single-card new-death">
                            <h3>আজকের মৃত্যু</h3>
                            <h1 className="counter"><CountUp end= {parseFloat(item ? item.deltadeaths : '0')} delay={3} start={0} duration={3} /></h1>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="single-card new-recover">
                            <h3>আজকের সুস্থ</h3>
                            <h1 className="counter"><CountUp end= { parseFloat(item ? item.deltarecovered : '0') }  delay={3} start={0} duration={3} /></h1>
                        </div>
                    </div>
                </div>
            </div>

             <Info />   
             
        </div>
    )
}


export async function getStaticProps() {
    const res = await fetch('https://api.covid19india.org/data.json')
    const posts = await res.json()
    // console.log(posts.statewise)
    return {
        props: {
            posts: posts.statewise
        }
    }
}



export default Web
