import * as React from "react";

import styles from "../../helloWorld/components/HelloWorld.module.scss";
import { render } from "react-dom";
export interface INameFormRowProps {}

export class ParentFormRow extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h5>Parent (Individual or Entity)</h5>
                <div className={`${styles.row} ${styles.parentRow}`}>
                    <div className={styles.flex7}>
                        <div className={styles["ms-TextField"]}>
                            {/*  <Typeahead
                            selected={this.state.selected}
                            id="basic-example"
                            onChange={selected => this.setState({ selected })}
                            options={parents}
                            placeholder="Choose..."
                            /> */}
                            <input className={styles["ms-TextField-field"]} type="text" />
                        </div>
                    </div>
                    <div
                        className={`${styles.flex2} ${styles["usericon-align"]}}`}>
                        <i className="fas fa-user"></i>
                    </div>
                    <div className={styles.flex3}></div>
                </div>
                <hr className={styles.horizontalSeparator} />

            </div>
        )
    }
}























