// import { useState, useEffect } from 'react'
import Link from 'next/link'
import CountUp from 'react-countup'
import Chart from '../pages/chart'
import Footer from '../pages/Footer'
import Info from '../pages/info'
const Home = ({ data }) => {
  return (
    <div>
      <div className="jumbotron">
        <div className='container'>
          <div className="row"><h1 className="mb-5">বৈশ্বিকভাবে করোনা পরিস্থিতি মহামারি আকার ধারণ করেছে। বর্তমানে এই ভাইরাসের কোন প্রতিষেধক না থাকায় সামাজিক দূরুত্ব বজায় রাখাই এটি নিয়ন্ত্রনের একমাত্র উপায়।</h1></div>
          <div className="row">
              <Link href='/state'><a className=" btn btn btn-info text-white btn-lg font-weight-bold" >State Wise Case</a></Link>
              <Link href='/district'><a className="btn btn-outline-info btn-lg font-weight-bold">District Wise Case</a></Link>
          </div>
        </div>
      </div>
      <div className='main-body'>
        <div className="container">
          <div className="row">
          <div className="col">
            <h4 className='font-weight-bold my-4 text-center'>দেশে করোনায় মোট আক্তান্ত, মোট মৃত্যু এবং মোট সুস্থতার পরিসংখ্যান</h4>
          </div>
          </div>
          <div className='row state justify-content-center my-5'>
            <div className="col-md-3 col-6">
              <div className="single-card effected">
                <h3>মোট আক্রান্ত</h3>
                <h1> <CountUp delay={1} end={parseFloat(data.confirmed)} duration={3} /></h1>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-card dead">
                <h3>মোট মৃত্যু</h3>
                <h1 className="counter"><CountUp delay={1} end={parseFloat(data.deaths)} duration={3} /></h1>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-card recovered">
                <h3>মোট সুস্থ</h3>
                <h1 className="counter"><CountUp delay={1} end={parseFloat(data.recovered)} duration={3} /></h1>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-card active">
                <h3>মোট সক্রিয়</h3>
                <h1 className="counter"><CountUp delay={1} end={parseFloat(data.active)} duration={3} /></h1>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-card under-treatment">
                <h3>নতুন আক্রান্ত</h3>
                <h1 className="counter"><CountUp delay={1} end={parseFloat(data.deltaconfirmed)} duration={3} /></h1>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="single-card new-death">
                <h3>আজকের মৃত্যু</h3>
                <h1 className="counter"><CountUp delay={1} start={0} end={parseFloat(data.deltadeaths)} duration={3} /></h1>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="single-card new-recover">
                <h3>আজকের সুস্থ</h3>
                <h1 className="counter"><CountUp delay={1} end={parseFloat(data.deltarecovered)} duration={3} /></h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h4 className='font-weight-bold my-4 text-center'>দৈনিক করোনায় আক্তান্ত, মৃত্যু এবং সুস্থতার হার</h4>
            </div>
          </div>
        </div>
        <div className="chart">
          <div className="container-fluid bg-white mb-5">
            <Chart></Chart>
          </div>
        </div>
        <div className='info-bg'>
        <Info></Info>
        </div>
      </div>
      <style jsx>{`
      .info-bg{
        margin-top: 550px;
      }
      .jumbotron a {
        width: 230px;
        border-radius: 2px;
    }
      `}</style>
    </div>


  )
}


export async function getStaticProps() {
  const res = await fetch('https://api.covid19india.org/data.json')
  const result = await res.json()

  return {
    props: {
      data: result.statewise[0]
    }
  }
}



export default Home