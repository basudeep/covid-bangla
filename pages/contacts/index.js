import { useEffect, useState } from 'react'
import { FaEnvelope as EmailIcon, FaPhoneAlt as PhoneIcon, FaGlobe as Globe, FaTwitter as Twitter, FaFacebookF as Facebook, FaMapSigns as Map } from 'react-icons/fa'
import { MetroSpinner } from 'react-spinners-kit'
const Contact = () => {

    const [contact, setContact] = useState()
    useEffect(() => {
        fetch('https://api.rootnet.in/covid19-in/contacts')
            .then(res => res.json())
            .then(data =>  setContact(data))
    }, [])
    return (
            <div>
                <div className="jumbotron">
                    <div className='container'>
                        <h1 className="">Coronavirus Helpline India <br /> <span className='font-weight-bold'>( জরুরি পরিষেবা )</span></h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center contact-content">
                        <div className="col-xl-6 col-md-6 text-center">
                        <h2 className='font-weight-bold text-center mb-5'>All India Coronavirus Helpline Information</h2>
                            {
                                contact ? 
                                <div className="content">
                                    <ul>
                                        <li className='mb-3'><span className='mr-2'>< PhoneIcon /></span><a className='font-weight-bold' href={`tel:${contact.data.contacts.primary.number}`}>{contact.data.contacts.primary.number}</a></li>
                                        <li><span className='mr-2'><EmailIcon /></span><a className='font-weight-bold' href={`emailto:${contact.data.contacts.primary.email}`}>{contact.data.contacts.primary.email}</a></li>
                                    </ul>
                                    <div className="links text-center mt-5">
                                        <span><a href="https://www.mohfw.gov.in/"><Globe /></a> </span>
                                        <span><a href={contact.data.contacts.primary.facebook}><Facebook /></a> </span>
                                        <span><a href={contact.data.contacts.primary.twitter}><Twitter /></a></span>
                                    </div>
                                </div>
                                :
                                <div className='center'> 
                                    <MetroSpinner  color='#0097F7' />
                                </div>
                                
                            }
                        </div>
                        <div className="col-xl-6 col-md-6 text-center my-5">
                            <img className='img-fluid' src="https://res.cloudinary.com/sociallink/image/upload/v1596294961/covid/doctor-man_hzbudk.svg" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="statewise">
                                <h2 className='font-weight-bold text-center mb-5'>State-wise List of Coronavirus Helpline Numbers</h2>
                                
                                {
                                    contact ?

                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered">
                                            <thead className='thead-dark'>
                                                <tr>
                                                    <th scope="col"> <span className='mr-2'><Map /></span>States</th>
                                                    <th scope="col"> <span className='mr-2'><PhoneIcon /></span>Helpline Numbers</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    contact.data.contacts.regional.map((item, key) => {
                                                        return (
                                                            <tr key={key}>
                                                                <td>{item.loc}</td>
                                                                <td><a data-toggle="tooltip" data-placement="right" title={`Click to call ${item.loc} state helpline`} href={`tel:${item.number}`}>{item.number}</a> </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                    : 
                                    <div className='col-xl-12 text-center'>
                                        <div className='center'>
                                        <MetroSpinner color='#0097F7' />
                                    </div>  
                                        </div>       

                                }

                            </div>
                        </div>
                    </div>
                </div>           
            </div>
            
    )
}


// export async function getStaticProps(){
//     const res = await fetch('https://api.rootnet.in/covid19-in/contacts')
//     const result = await res.json()

//     return{
//         props:{
//             data: result.data
//         }
//     }
// }


export default Contact