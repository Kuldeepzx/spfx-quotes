import * as React from 'react';
import styles from './Quotes.module.scss';
import { IQuotesProps } from './IQuotesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Overview  from './Overview';
export default class Quotes extends React.Component<IQuotesProps, {}> {
  public render(): React.ReactElement<IQuotesProps> {
    return (
      <div className={ styles.quotes }>
        <div className={ styles.container }>
          <div className={styles.row}>
            <div className={styles.column}>
              <Overview context={this.props.context}>
              </Overview>
            </div>  
          </div>
        </div>
      </div>
    );
  }
}
