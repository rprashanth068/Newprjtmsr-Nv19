import * as React from "react";
import { Typeahead } from "react-typeahead";
import styles from "../../helloWorld/components/HelloWorld.module.scss";
import { render } from "react-dom";

const edit_ico = require("../../../icons/NRD-00001_02013_ICO_Edit 52525b_001.svg");
const delete_ico = require("../../../icons/NRD-00001_02013_ICO_Delete 52525b_001.svg");
const delete_icon = require("../../../icons/NRD-00001_02013_ICO_Delete ff6600_001.svg");
const edit_icon = require("../../../icons/NRD-00001_02013_ICO_Edit ff6600_001 (1).svg");

const plus_ico = require("../../../icons/NRD-00001_02013_ICO_New 52525b_001.svg");
const plus_icon = require("../../../icons/NRD-00001_02013_ICO_New ff6600_001 (2).svg");

import { comments, documents, parents } from "../../../data/data";

export interface INameFormRowProps {}

export class Esignatories extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  state = {
    edit2: edit_ico,
    delete: delete_ico,
    plus: plus_ico,
    selectedDocument: {},
    documents: documents,
    tDocuments: [],

  };

  refe1;

  iconOver = type => {
    switch (type) {
      case "edit":
        this.setState({ edit: edit_icon });
        break;
      case "delete":
        this.setState({ delete: delete_icon });
        break;
      case "plus":
        this.setState({ plus: plus_icon });
        break;
      default:
        break;
    }
  };

  iconOut = type => {
    switch (type) {
      case "edit":
        this.setState({ edit: edit_ico });
        break;
      case "delete":
        this.setState({ delete: delete_ico });
        break;
      case "plus":
        this.setState({ plus: plus_ico });
        break;
      default:
        break;
    }
  };

  selectDocument = (event, row) => {
    row._docname = row.docname;
    this.setState({ selectedComment: row });
    this.state.documents.map(d => {
      if (d.id === row.id) {
        d.selected = !d.selected;
        if (d.selected) {
          this.setState({ selectedDocument: row });
        } else {
          this.setState({ selectedDocument: {} });
          this.refe1.value = "";
        }
      } else {
        d.selected = false;
      }
    });
    console.log(documents);
  };

  changeDocument = event => {
    let e = event.target.value;
    event.preventDefault();
    //let me = this;
    let _dDoument1 = this.state.documents;
    /** Mutablity isssue  */
    //_tcoment1 = Array.from(this.state.comments);
    let t = {};
    _dDoument1.forEach(d => {
      if (d.id === this.state.selectedDocument["id"]) {
        d._docname = e;
        t = d;
      }
    });
    this.setState({ selectedDocument: t });
    this.setState({ tDocuments: _dDoument1 });
  };

  saveDocuments = () => {
    this.state.tDocuments.map(d => {
      d.docname = d._docname ? d._docname : d.docname;
    });
    this.setState({ documents: this.state.tDocuments });
  };

  render() {
    return (


      <div>
        <h5>Signatories</h5>
        <label className={styles["preffered-sign"]}>Preffered Signatory</label>
        <div
          className={`${styles["ms-TextField"]} ${styles["table-input"]} ${styles["table-input-signaturies"]} ${styles["mLeft"]}`}
        >
          <span>
            <img
              src={this.state.edit2 as string}
              height="18px"
              width="18px"
              alt="editicon"
              onMouseOver={() => this.iconOver("edit2")}
              onMouseOut={() => this.iconOut("edit2")}
            />
          </span>

          <span>
            <img
              src={this.state.delete as string}
              height="18px"
              width="18px"
              className={styles["signotorydeleteicons"]}
              alt="deleteicon"
              onMouseOver={() => this.iconOver("delete")}
              onMouseOut={() => this.iconOut("delete")}
            />
          </span>

          <span>
            <div
              className={`${styles["type-Ahead"]} ${styles["table-input"]} ${styles["margin-icons"]}`}
            >
              <Typeahead
                options={["John", "Paul", "George", "Ringo"]}
                maxVisible={2}
              />
            </div>
          </span>

          <span>
            <i className="far fa-2x fa-plus" onClick={this.saveDocuments}></i>
          </span>

          <span className={styles["margin-icons"]}>
            <img
              src={this.state.edit2 as string}
              height="18px"
              width="18px"
              alt="editicon"
              onMouseOver={() => this.iconOver("edit2")}
              onMouseOut={() => this.iconOut("edit2")}
            />
          </span>

          <span className={styles["margin-icons"]}>
            <input type="checkbox" name="sign" />
          </span>
          <span className={styles["margin-icons"]}>
            <img
              src={this.state.plus as string}
              height="18px"
              width="18px"
              alt="editicon"
              onMouseOver={() => this.iconOver("edit2")}
              onMouseOut={() => this.iconOut("edit2")}
            />
          </span>
        </div>
        <div className={`${styles["sign-Tabel"]} ${styles["mLeft"]}`}>
          <table className={styles["table-Head"]}>
            <thead>
              <tr>
                <th scope="row">
                  <div className="form-check form-check-align">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                  </div>
                </th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Preferred Name</th>
              </tr>
            </thead>
          </table>
        </div>
        <div
          className={`${styles["sign-Tabel"]} ${styles["scroll-table"]} ${styles["mLeft"]}`}
        >
          <table className={styles["table-Body"]}>
            <tbody>
              {this.state.documents.map(row => (
                <tr>
                  <td scope="row">
                    <div className="form-check form-check-align">
                      <input
                        type="checkbox"
                        id="gridCheck"
                        name="document_chk"
                        defaultValue={row.selected}
                        checked={row.selected}
                        onChange={e => {
                            this.selectDocument(e, row);
                          }}
                      />
                    </div>
                  </td>
                  <td>{row.docname}</td>
                  <td>{row.dateuploaded}</td>
                  <td>
                    <input
                      className={styles["ms-TextField"]}
                      type="checkbox"
                      id="gridCheck"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
        <hr className={styles.horizontalSeparator} />
      </div>
    );
  }
}
