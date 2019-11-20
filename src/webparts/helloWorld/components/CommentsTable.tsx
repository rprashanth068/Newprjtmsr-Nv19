import * as React from "react";

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

export class CommentsTable extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  state = {
    edit: edit_ico,
    delete: delete_ico,
    selectedComment: {},
    comments: comments,
    plus: plus_ico,
    tComments: []
  };

  refe2;

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

  saveComments = () => {
    this.state.tComments.map(c => {
      c.gcomment = c._gcomment ? c._gcomment : c.gcomment;
    });
    this.setState({ comments: this.state.tComments });
  };

  changeComment = event => {
    let e = event.target.value;
    event.preventDefault();
    //let me = this;
    let _tcoment1 = this.state.comments;
    /** Mutablity isssue  */
    //_tcoment1 = Array.from(this.state.comments);
    let t = {};
    _tcoment1.forEach(c => {
      if (c.id === this.state.selectedComment["id"]) {
        c._gcomment = e;
        t = c;
      }
    });
    this.setState({ selectedComment: t });
    this.setState({ tComments: _tcoment1 });
  };

  selectComment = (event, row) => {
    row._gcomment = row.gcomment;
    this.state.comments.map(c => {
      if (c.id === row.id) {
        c.selected = !c.selected;
        if (c.selected) {
          this.setState({ selectedComment: row });
        } else {
          this.setState({ selectedComment: {} });
          this.refe2.value = "";
        }
      } else {
        c.selected = false;
      }
    });
    console.log(comments);
  };

  render() {
    return (
      <div>
        <h5 className={styles.commentsLabel}>Comments</h5>
        <div>
          <img
            src={this.state.edit as string}
            height="18px"
            width="18px"
            className={styles.editIcons}
            alt="editicon"
            onMouseOver={() => this.iconOver("edit")}
            onMouseOut={() => this.iconOut("edit")}
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
        <div
          className={`${styles["ms-TextField"]} ${styles.customFormInputContainer}`}
        >
          <div className={styles.customFormInput}>
            <span className={styles.inputContainer}>
              <input
                type="text"
                className={`${styles["ms-TextField-field"]} ${styles["table-input"]}`}
                ref={node => (this.refe2 = node)}
                value={this.state.selectedComment["_gcomment"]}
                id="formGroupExampleInput"
                placeholder=" "
                onChange={e => this.changeComment(e)}
              />
            </span>
            <span className={styles.iconContainer}>
              <img
                src={this.state.plus as string}
                height="18px"
                width="18px"
                className="plusicon"
                alt="plusicon"
                onMouseOver={() => this.iconOver("plus")}
                onMouseOut={() => this.iconOut("plus")}
                onClick={this.saveComments}
              />
            </span>
          </div>
        </div>

        <div className={`${styles.commentsTable}`}>
          <table className={styles["table-Head"]}>
            <thead>
              <tr>
                <th>
                  <div className="form-check form-check-align">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                  </div>
                </th>
                <th>General comment regarding Individual</th>
                <th>Date</th>
                <th>Who</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className={` ${styles["scroll-table"]} ${styles.commentsTable}`}>
          <table className={styles["table-Body"]}>
            <tbody>
              {this.state.comments.map(row => (
                <tr>
                  <td>
                    <div className="form-check form-check-align">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        name="comment_chk"
                        defaultValue={row.selected}
                        checked={row.selected}
                        onChange={e => {
                          this.selectComment(e, row);
                        }}
                      />
                    </div>
                  </td>

                  <td>{row.gcomment}</td>

                  <td>{row.date}</td>

                  <td>{row.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
