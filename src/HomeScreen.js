
import './App.css';
import { Component } from 'react';
import {Link} from 'react-router-dom';

import assets1 from "./assets/asset1.svg";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";

import { AiOutlineArrowRight, AiTwotoneSetting } from "react-icons/ai";


class HomeScreen extends Component{

  constructor(props) {
    super(props);
    this.renderAppArray=this.renderAppArray.bind(this);
    this.state = {
        isFetching: false,
        users: [],
        appsArray: [],
        color: ['#EF7854', '#7163FF', '#61CA40', '#EF7854', '#7163FF', '#61CA40', '#EF7854', '#7163FF', '#61CA40', '#EF7854']
    };
}



  componentDidMount(){

    fetch('https://api.npoint.io/adf6676a313fa01f787d')
        .then(response => response.json())
        .then(result => {
            this.setState({appsArray: result})
        //  console.log("result"+ JSON.stringify(result))
        //  console.log(this.state.appsArray)
        })
        .catch(e => {
            console.log(e);
        });
  }


  renderAppArray(){
        return(
            this.state.appsArray.map((item, index) => (
                <div>
                    <div style={{marginTop: 20, backgroundColor: '#fff', margin: 20, borderRadius: 4}}>
                        
                        <div style={{flexDirection: 'row',justifyContent: 'space-between', display: 'flex',}}> 
                                <div style={{flexDirection: 'row', display: 'flex', margin: 20}} >
                                     <div style={{height: 50, width: 50, backgroundColor: this.state.color[index], borderRadius: 4}} />
                                            
                                    <div style={{marginLeft: 20}}>
                                            <div style={{fontSize: 20, textAlign: 'auto'}} >{item.appName}</div>
                                            <div style={{fontSize: 14,  textAlign: 'auto'}} >{item.publisherName}</div>
                                    </div>
                                </div>
                                    
                                <div style={{margin: 20}}>
                                    <Link style={{color: '#000'}} 
                                        to={{ pathname: '/data', 
                                        id: item.id,
                                        appName: item.appName,
                                        publisherName: item.publisherName,
                                        color: this.state.color[index],
                                    }} >
                                            <AiOutlineArrowRight size="25" color="#C5C5C5"/> 
                                    </Link>
                                </div>
                        </div>

                        <div style={{flexDirection: 'row', display: 'flex', marginLeft: 20, marginBottom: 20}} >
                                <div style={{marginRight: 30,marginBottom: 20}} >
                                    <div style={{fontSize: 10}} >Revenue</div>
                                    <div style={{fontSize: 18, fontWeight: 'bold'}} >$345</div>
                                </div>

                                <div style={{marginRight: 30}} >
                                    <div style={{fontSize: 10}} >Ad Requests</div>
                                    <div style={{fontSize: 18, fontWeight: 'bold'}} >34M</div>
                                </div>

                                <div style={{marginRight: 30}} >
                                    <div style={{fontSize: 10}} >Ad Response</div>
                                    <div style={{fontSize: 18, fontWeight: 'bold'}} >10M</div>
                                </div>

                                <div style={{marginRight: 30}} >
                                    <div style={{fontSize: 10}} >Impressions</div>
                                    <div style={{fontSize: 18, fontWeight: 'bold'}} >10M</div>
                                </div>
                        </div>

                    </div>
                </div>
            ))
        )
    }



  render(){
        return (
            <div>
                <section  className="card" >
                        <div  className="card-center" >
                            
                            <article className="card" >
                                    <div>
                                        <div style={{backgroundColor: '#7163FF', height: 400}} >
                                            <div style={{alignItems: 'flex-start', display: 'flex', }} >
                                                    <div style={{fontSize: 14, fontWeight: 'bold', marginTop: 30,color: '#fff', marginLeft: 50}} >
                                                        ADSOUL
                                                    </div>
                                            </div> 

                                            <div style={{justifyContent: 'center', display: 'flex'}} >
                                                <img src={assets1} style={{marginTop: 20}} />
                                            </div>
                                        </div>

                                
                                        <div style={{backgroundColor: '#6154DA', height: 400, }} >
                                                <div style={{ alignItems: 'flex-start', display: 'flex', marginLeft: 50, }}>
                                                    <div style={{color: '#fff',fontSize: 24, marginTop: 50,}} >Revenue Optimization</div>
                                                </div>
                                        
                                                <div style={{alignItems: 'center', display: 'flex', marginTop: 20}}>
                                                    <div style={{flexDirection: 'column', display: 'flex'}} >
                                                            <div style={{width: 300,  justifyContent: 'space-between', display: 'flex',marginLeft: 50, marginTop: 20}} >
                                                                    <div>
                                                                        <img src={icon1} />
                                                                        <div style={{color: '#fff', fontSize: 12, marginTop: 5}} >Fill Rate</div>
                                                                    </div>
                                                                    <div>
                                                                        <img src={icon2} />
                                                                        <div style={{color: '#fff', fontSize: 12, marginTop: 5}} >Improve CTR</div>
                                                                    </div>
                                                            </div>
                                                            <div style={{ width: 300,  justifyContent: 'space-between', display: 'flex', marginLeft: 50, marginTop: 40}}>
                                                                    <div>
                                                                        <img src={icon3} />
                                                                        <div style={{color: '#fff', fontSize: 12, marginTop: 5}} >Refresh Rate</div>
                                                                    </div>
                                                                    <div style={{marginTop: 15}}>
                                                                        <img src={icon4} />
                                                                        <div style={{color: '#fff', fontSize: 12, marginTop: 5}} >Quick Integration</div>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                </div>
                                        </div>

                                    </div>
                            </article>

                            <article className="card" >
                                <div style={{backgroundColor: '#fff', padding: 30, flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems:'center'}} >
                                    <div style={{fontSize: 28}} >Apps</div>
                                    <div>
                                        <AiTwotoneSetting size="25" color="#A2A2A2" /> 
                                    </div>
                                </div>

                                <div style={{overflow: 'auto', height: 700,}}>
                                        {this.renderAppArray()}
                                </div>
                            </article>


                        </div>
                </section>
            </div>
        );
    }
}

export default HomeScreen;


  