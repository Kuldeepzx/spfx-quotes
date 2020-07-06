import * as React from 'react';  
import styles from './Quotes.module.scss';  
import { IQuotesProps } from './IQuotesProps';  
import { escape } from '@microsoft/sp-lodash-subset';  
import { WebPartContext } from '@microsoft/sp-webpart-base';  
import {ServiceProvider} from './ServiceProvider';  
  
export interface IOverViewProps {  
  context:WebPartContext;  
}  

export interface IOverViewState {  
  data:any;    
}  
  
export default class OverViewStats extends React.Component<IOverViewProps, IOverViewState> {  
  
  private serviceProvider;  
  
  public constructor(props: IOverViewProps, state: IOverViewState) {  
    super(props);  
    this.serviceProvider = new ServiceProvider(this.props.context);  
  
    this.state = {  
      data:{},
      
    };  
  
  }  
  
  public render(): React.ReactElement<IOverViewProps> {  
       return(  
      <React.Fragment>  
        <h1>New Quotes:</h1>  
        <h2>Quote :"{this.state.data.quote}"</h2>  
        <h2>Author: {this.state.data.author}</h2>  
        <h2>Date: {this.state.data.date}</h2>  
        {/* <h2>Deaths: {this.state.data.deaths}</h2>   */}
      </React.Fragment>  
    );  
  }  
  
  public async  componentDidMount(){  
    this.getData();  
  }  
  
  private getData(){  
    this.serviceProvider.  
    getTotals()   
      .then(  
        (result: any): void => {  
          //  console.log("Result are here", result.contents.quotes[0].author);  
           console.log("Result are here", result);  

           this.setState({data:result.contents.quotes[0]});  
        }  
      )  
      .catch(error => {  
        console.log(error);  
      });  
  }  
} 