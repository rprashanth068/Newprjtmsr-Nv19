import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { ContactHeader } from './ContactHeader';
import { MyForm } from './MyForm';

const save_ico = require('../../../icons/NRD-00001_02013_ICO_Save cccccc_001.svg');
const delete_icon1 = require('../../../icons/NRD-00001_02013_ICO_Delete cccccc_001.svg');
const save_icon  = require( '../../../icons/NRD-00001_02013_ICO_Save ff6600_001.svg');
const delete_icon  = require( '../../../icons/NRD-00001_02013_ICO_Delete ff6600_001.svg');

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  
  constructor(props) {
    super(props);
  }
  state = {
    contactData: {'save': save_ico, 'delete': delete_icon1, 'save1': save_icon, 'delete1': delete_icon}
  }

  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={styles.helloWorld}  >        
        <div className="container main-container ">
          <ContactHeader contactData={this.state.contactData}></ContactHeader>
          <MyForm></MyForm>
        </div>
      </div>
    );
  }
}
