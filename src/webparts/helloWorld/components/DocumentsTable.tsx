import * as React from "react";

import styles from "../../helloWorld/components/HelloWorld.module.scss";
import { render } from "react-dom";
import { comments, documents, parents } from "../../../data/data";

const edit_ico = require("../../../icons/NRD-00001_02013_ICO_Edit 52525b_001.svg");
const delete_ico = require("../../../icons/NRD-00001_02013_ICO_Delete 52525b_001.svg");
const delete_icon = require("../../../icons/NRD-00001_02013_ICO_Delete ff6600_001.svg");
const edit_icon = require("../../../icons/NRD-00001_02013_ICO_Edit ff6600_001 (1).svg");

export interface INameFormRowProps {}

export class DocumentsTable extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  state = {
    edit2: edit_ico,
    delete: delete_ico,
    selectedDocument: {},
    documents: documents,
    tDocuments: []
  };

  refe1;

  iconOver = type => {
    switch (type) {
      case "edit2":
        this.setState({ edit2: edit_icon });
        break;
      case "delete":
        this.setState({ delete: delete_icon });
        break;
    }
  };

  iconOut = type => {
    switch (type) {
      case "edit2":
        this.setState({ edit2: edit_ico });
        break;
      case "delete":
        this.setState({ delete: delete_ico });
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
        <div>
          <hr className="marigin" />
          <h5>Documents</h5>
          <div>
            <img
              src={this.state.edit2 as string}
              height="18px"
              width="18px"
              className={styles.editIcons}
              alt="editicon"
              onMouseOver={() => this.iconOver("edit2")}
              onMouseOut={() => this.iconOut("edit2")}
            />

            <img
              src={this.state.delete as string}
              height="18px"
              width="18px"
              className="deleteicons"
              alt="deleteicon"
              onMouseOver={() => this.iconOver("delete")}
              onMouseOut={() => this.iconOut("delete")}
            />
          </div>
          <div className={`${styles["ms-TextField"]} ${styles["table-input"]}` }>
            <input
              type="text"
              className={`${styles["ms-TextField-field"]} ${styles["table-input"]}`}
              ref={node => (this.refe1 = node)}
              value={this.state.selectedDocument["_docname"]}
              id="formGroupExampleInput"
              placeholder=" "
              onChange={e => this.changeDocument(e)}
            />
            <i className="far fa-2x fa-plus" onClick={this.saveDocuments}></i>
          </div>

          <div className={styles["document-Tabel"]}>
            <table className={styles["table-Head"]}>
              <thead>
                <tr>
                  <th>
                    <div className="form-check form-check-align">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        id="gridCheck"
                      />
                    </div>
                  </th>
                  <th>Document Name</th>
                  <th>Date</th>
                  <th>Who Uploaded</th>
                </tr>
              </thead>
            </table>
          </div>

          <div
            className={`${styles["document-Tabel"]} ${styles["scroll-table"]}`}
          >
            <table className={styles["table-Body"]}>
              <tbody>
                {this.state.documents.map(row => (
                  <tr>
                    <td>
                      <div className="form-check form-check-align">
                        <input
                          className="form-check-input"
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
                    <td>{row.whouploaded}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
