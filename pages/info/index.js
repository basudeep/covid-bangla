import Link from 'next/link'
const Info =() => {
    return(
        <div className="info-bg">
        <div className="container">
          <div className="row">
            <div className="info px-5 text-center">
              <h3 className='font-weight-bold mt-5'>করোনা পরিস্থিতিতে যে কোন স্বাস্থ্য বিষয়ক সমস্যায় যোগাযোগের নাম্বার গুলো যাতে হাতের কাছেই পাওয়া যায় সে জন্য সকল জরুরী নাম্বার সমূহকে আপনাদের সুবিধার্থে একত্রে একটি পেইজে রেখেছি।</h3>
              <Link href='/contacts'><a className='btn btn-danger text-light font-weight-bold mt-3 btn-lg'>Emergency Number</a></Link>
            </div>
          </div>
        </div>
    <style jsx global>{`
    .info {
        padding-bottom:50px
    }
    .info-bg{
      background: #1f4068;
    }
    .info-bg{
      color: #fff
    }
    .info h3{
      line-height:45px
    }
    `}</style>
      </div>
    )
}


export default Info