import React, { Component } from "react";
import BoardRow from "./BoardRow";

class BigBoard extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <BoardRow
            rowNum={0}
            boardGame={this.props.boardGame}
            currentBoard={this.props.currentBoard}
            handleClick={this.props.handleClick}
          />
          <BoardRow
            rowNum={3}
            boardGame={this.props.boardGame}
            currentBoard={this.props.currentBoard}
            handleClick={this.props.handleClick}
          />
          <BoardRow
            rowNum={6}
            boardGame={this.props.boardGame}
            currentBoard={this.props.currentBoard}
            handleClick={this.props.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default BigBoard;
