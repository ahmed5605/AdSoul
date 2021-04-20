import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Table } from 'react-bootstrap';

import { AiOutlineArrowLeft } from "react-icons/ai";
import Skeleton from '@yisheng90/react-loading';

class Data extends Component {
   
    constructor(props){
        super(props);
       
       this.renderDataTable=this.renderDataTable.bind(this)
        this.state = {
         data: [],
         dataArray: [],
         name: '',
         appName: '',
         publisherName: '',
         color: '',
         skeleton: true,
        }
      }


    componentDidMount(){
        const id = this.props.location.id;
        const appName = this.props.location.appName;
        const publisherName = this.props.location.publisherName;
        const color = this.props.location.color;

        console.log("id: " + id + "appName: " + appName + "publisherNamed: " + publisherName);

        this.setState({
            appName: appName,
            publisherName: publisherName,
            color: color
        })

   
        fetch('https://api.npoint.io/d734975d2aee62d197ef/'+id)
            .then(response => response.json())
            .then(result => {
                this.setState({dataArray: result, skeleton: false})
                setTimeout(() => {
                    this.setState({skeleton: false})
                  }, 20000);
                //console.log("result"+ JSON.stringify(result))
                //console.log(this.state.dataArray)
            })
            .catch(e => {
                console.log(e);
            });
    }


    renderDataTable() {
        return this.state.dataArray.map((item, index) => {
       
            return (
                <>
                    <tr>
                        <td >
                            <div className="table-content">{item.date}</div>
                        </td>
                        <td >
                            <div  className="table-content">{item.revenue}</div>
                        </td>
                        <td >
                            <div  className="table-content">{item.adRequest}</div>
                        </td>
                        <td >
                            <div  className="table-content">{item.adResponse}</div>
                        </td>
                        <td >
                            <div  className="table-content">80000</div>
                        </td>
                        <td >
                            <div  className="table-content">{item.clicks}</div>
                        </td>
                        <td >
                            <div  className="table-content">{((8000/item.adResponse)*100).toFixed(2)}</div>
                        </td>
                    </tr>
                </>
            )
        })
    }
   

    render() {
        return (
            <div>
               {this.state.skeleton 
                  
                  ? 
                  <>
                    <div style={{display: 'flex', flexDirection: 'column',  }}  >
                          <Skeleton visible={false} height={70} rows={1} style={{marginBottom: 10, }} />
                    </div>     
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}  >
                          <Skeleton visible={false} width={70}  height={70} rows={1} style={{marginLeft: 30, }} />
                          <Skeleton visible={false} width={230}  height={70} rows={1} style={{marginLeft: 10, marginRight: 30}} />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column',  marginTop: 20, marginLeft: 30, marginRight: 30 }}  >
                        <Skeleton visible={false} height={70} rows={1} style={{marginBottom: 20, }} />
                        <Skeleton visible={false} height={40} rows={1}  style={{marginBottom: 10, }}/>
                        <Skeleton visible={false} height={40} rows={1}  style={{marginBottom: 10, }}/>
                        <Skeleton visible={false} height={40} rows={1}  style={{marginBottom: 10, }}/>
                        <Skeleton visible={false} height={40} rows={1}  style={{marginBottom: 10, }}/>
                        <Skeleton visible={false} height={40} rows={1}  style={{marginBottom: 10, }}/>
                        <Skeleton visible={false} height={40} rows={1}  style={{marginBottom: 10, }}/>
                        <Skeleton visible={false} height={40} rows={1}  style={{marginBottom: 10, }}/>
                        <Skeleton visible={false} height={40} rows={1}  style={{marginBottom: 10, }}/>
                        <Skeleton visible={false} height={40} rows={1}  style={{marginBottom: 10, }}/>
                    </div>
                  </>
                  :
                  <div>
                        <div style={{padding: 20, backgroundColor: '#7163FF'}} >
                            <div style={{fontSize: 14,fontWeight: 'bold', color: '#fff', marginLeft: 20}} >ADSOUL</div>
                        </div>

                        <div style={{flexDirection: 'row',display: 'flex', alignItems: 'center', marginTop: 20}}> 
                            <div style={{margin: 10}}>
                                <Link style={{color: '#000'}} to={{ pathname: '/'}}  >
                                    <div> <AiOutlineArrowLeft size="25" color="#C5C5C5" /> </div>
                                </Link>
                            </div>
                
                            <div style={{flexDirection: 'row', display: 'flex', margin: 10,}} >
                                <div style={{height: 50, width: 50, backgroundColor: this.state.color, borderRadius: 4}} />
                                    
                                <div style={{marginLeft: 10}}>
                                        <div style={{fontSize: 24}} >{this.state.appName}</div>
                                        <div style={{fontSize: 14, color: '#777777'}} >{this.state.publisherName}</div>
                                </div>
                            </div>
                        </div>

                        <div style={{margin: 10,}} >
                            <div className="table-responsive"  >
                                <Table responsive striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th className="table-heading">
                                                    <div className="Heading-text-style" >Date</div>
                                            </th>
                                            <th className="table-heading">
                                                    <div className="Heading-text-style" >Revenue</div>
                                            </th>
                                            <th className="table-heading">
                                                    <div className="Heading-text-style" >Ad Requests</div>
                                            </th>
                                            <th className="table-heading">
                                                    <div className="Heading-text-style" >Ad Resposes</div>
                                            </th>
                                            <th className="table-heading">
                                                    <div className="Heading-text-style" >Impressions</div>
                                            </th>
                                            <th className="table-heading">
                                                    <div className="Heading-text-style" >Clicks</div>
                                            </th>
                                            <th className="table-heading">
                                                    <div className="Heading-text-style" >Render Rate</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderDataTable()}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                  </div>
                }
                    
            </div>
        )
    }
}

export default Data
