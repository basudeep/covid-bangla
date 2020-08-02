import Navbar from './navbar'
import Footer from '../pages/Footer'
import Head from 'next/head'
import Header from './head'
const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Head>
                <title>Covid India (Bangla/বাংলা )</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            </Head>
            <Navbar />
                {children}
            <Footer />
          <style jsx global>{
                `
                body{
                    background-color: #f4f8fb;
                }
                .info h3{
                  line-height:45px
                }
                .jumbotron {
                    margin-top: 94px;
                }
                .jumbotron a {
                    margin: 0 10px;
                }
                .bg-white{
                    background:#fff;
                    padding:20px;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }
                label {
                    font-size: 14px;
                    font-weight: bold;
                }
                h1 span {
                    font-size: 25px;
                }
                  .display-4{
                    font-size:35px;
                    line-height:60px;
                  }
                  .card{
                    box-shadow: 3px 3px 22px -6px rgba(0,0,0,0.77);
                }
                .card-header{
                    font-size:20px;
                    font-weight:600;
                }
                span{
                    font-size:12px;
                }
                select:focus {
                    border: 1px solid #00bcd4;
                    outline:0
                }
                @media only screen and (max-width: 985px) {
                    ul.navbar-nav.text-right.float-right {
                        float: left!important;
                        text-align: left!important;
                    }
                    .jumbotron h1 {
                        font-size: 20px;
                        text-align: center;
                    }
                    .jumbotron a {
                        margin: 0 auto;
                        margin-bottom: 20px;
                    }
                  }
                select{
                    cursor: pointer;
                    border: 1px solid #00bcd4;
                    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1);
                }
                .my-select{
                    height:0,
                    line-height: 1.5;
                    padding: 17px 15px;
                    display: inline-block;
                    width: 100%;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #495057;
                    vertical-align: middle;
                    background-color: #fff;
                    border: 1px solid #ced4da;
                    border-radius: .25rem;
                }
                select:focus {
                    outline: 0;
                }
                .state .single-card{
                    text-align: center;
                    background: #fff;
                    border-radius: 4px;
                    border: 0;
                    border: 1px solid rgb(241, 241, 241);
                    margin-bottom: 25px;
                    color: #333;
                    background: #fff;
                    box-shadow: 0 4px 8px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }
                .state .single-card {
                    padding: 26px 10px;
                }
                .statname h2{
                    font-size:24px;
                }
                .state .single-card h3 {
                    font-size: 16px;
                }
                .state .single-card h1 span{
                    font-size: 35px;
                    font-weight: 600;
                    margin-bottom: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family:  'Roboto', sans-serif;
                }
                .state .effected h1 {
            
                    color: #7f5fce;
                }
                .state .dead h1 {
                    color: #f11771;
                }
                .state .new-death h1 {
                    color: #ff5f40;
                }
                .state .new-recover h1 {
                    color: #00bcd4;
                }
                .state .recovered h1 {
                   color: #0abf54;
                }
                .state .active h1 {
                    color: #251f44;
                 }
                .state .under-treatment h1 {
                    color: #e1ab0a;
                }
                .state .effected {
                border-bottom: 7px solid #7f5fce;
                }
                .state .dead {
                    border-bottom: 7px solid #f11771;
                }
                .state .recovered {
                    border-bottom: 7px solid #0abf54;
                }
                .state .active {
                    border-bottom: 7px solid #251f44;
                }
                .state .under-treatment {
                    border-bottom: 7px solid #e1ab0a;
                }
                .state .new-death {
                    border-bottom: 7px solid #ff5f40;
                }
                .state .new-recover {
                    border-bottom: 7px solid #00bcd4;
                }
                .content a{
                    text-decoration:none;
                    color: #000
                    
                }
                .content ul li span{
                    color:#318fb5
                }
                .content ul li a{
                    color:#000
                }
                .center {
                    text-align: center;
                    display: inline-grid;
                }
                .nav-item a:hover{
                    color:#000;
                }
                .contact-content img{
                    max-height:450px
                }
                .navbar-brand {
                    font-size:25px;
                }
                li.nav-item a.nav-link {
                    font-size:16px;
                    font-weight:bold
                }
                .jumbotron h1 {
                    font-size: 25px;
                    font-weight: bold;
                    letter-spacing: 2px;
                    line-height: 30px;
                }
                
                .menu.navbar-toggler {
                    transition:.3s;
                    color:#000;
                }
                .menu.navbar-toggler:focus {
                    outline:0
                }
                ul{
                    list-style:none;
                    padding:0
                }
                .links span a {
                    color: #000;
                    padding: 10px 12px;
                    border-radius: 5px;
                    border: 1px solid #000;
                    transition: .3s;
                    margin: 10px 5px;
                }
                .links span a:hover {
                    background: #318fb5;
                    color:#fff;
                    border-color:#fff
                }
                .statewise td a {
                    color: #000;
                    text-decoration:none;
                }
                .footer h6 {
                    font-size: 20px;
                    color: #f11771;
                }
                .footer.py-3 span {
                    font-size: 20px;
                    margin-left: 5px;
                }
                `
                }
                </style>
        </div>
    )
}

export default Layout