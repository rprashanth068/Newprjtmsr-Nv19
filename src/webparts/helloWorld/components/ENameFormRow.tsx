import * as React from "react";
import { Typeahead } from "react-typeahead";

import styles from "../../helloWorld/components/HelloWorld.module.scss";
import { render } from "react-dom";
export interface INameFormRowProps {}

export class ENameFormRow extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return(
<div>
          <div className={styles.row}>
          <div className={`${styles["col-8"]}`}>
            <div className={styles["ms-TextField"]}>
              <label
                className={styles["ms-Label"]}
                htmlFor="formGroupExampleInput"
              >
                Entity Name <span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                className={styles["ms-TextField-field"]}
                id="formGroupExampleInput"
                placeholder=" "
              />
            </div>
          </div>
          <div className={`${styles["col-2"]}`}>
            <div className={styles["ms-TextField"]}>
              <label
                className={styles["ms-Label"]}
                htmlFor="formGroupExampleInput"
              >
                c/o Name
              </label>
               <div className={styles["type-Ahead"]}>
                <Typeahead
                      options={['John', 'Paul', 'George', 'Ringo']}
                      maxVisible={2}
                    />
                    </div>
            </div>
          </div>
        </div>
      )}
       <hr className={styles.horizontalSeparator}/>

</div>
        )
    }
}