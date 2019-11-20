
import * as React from "react";

import styles from "../../helloWorld/components/HelloWorld.module.scss";
import { render } from "react-dom";
export interface INameFormRowProps {}

export class EContactFormRow extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
            <div className={styles.flex2}>
          <div className={`${styles["ms-TextField"]}  `}>
            <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Business Phone</label>
            <input type="text" className={styles["ms-TextField-field"]}  maxLength={12} id="formGroupExampleInput" placeholder=" " />
          </div>
        </div>
        <div className={styles.flex1}>
          <div className={`${styles["ms-TextField"]}  `}>
            <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Ext</label>
            <input type="text" className={styles["ms-TextField-field"]}  maxLength={12} id="formGroupExampleInput" placeholder=" " />
          </div>
        </div>
        <div className={styles.flex2}>
          <div className={`${styles["ms-TextField"]}  `}>
            <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Mobile Number</label>
            <input type="text" className={styles["ms-TextField-field"]}  maxLength={12} id="formGroupExampleInput" placeholder=" " />
          </div>
        </div>
        <div className={styles.flex2}>
          <div className={`${styles["ms-TextField"]} `}>
            <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Fax Number</label>
            <input type="text"className={styles["ms-TextField-field"]}  maxLength={12} id="formGroupExampleInput" placeholder=" " />
          </div>
        </div>
        <div className={styles.flex1}>

        <div className={`${styles["ms-TextField"]} ${styles.email}`}>

         <label className={styles["ms-Label"]} htmlFor="formGroupExampleInput">Email Address</label>

        <input type="text" className={styles["ms-TextField-field"]} id="formGroupExampleInput" placeholder=" " />

        </div>

          </div>
            </div>

        )
    }
}