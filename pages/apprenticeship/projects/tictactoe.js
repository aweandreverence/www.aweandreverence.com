import _ from 'lodash';

import React from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import Obfuscate from 'react-obfuscate';

import Page from '@/components/base_page';
import css from '@/styles/common.module.scss';

export default function TicTacToePage() {
    return (
        <Page>
            <h1 className={css.title}>Tic Tac Toe</h1>

            <br />

            <div className={css.card}>
                <TicTacToe />
            </div>
        </Page>
    );
}

class TicTacToe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // constants
            boardWidth: 600,
            boardHeight: 600,
            pieces: ['X', 'O', 'Y', 'Z', 'W', 'A', 'B', 'C', 'D', 'E'],
            minPlayers: 2,
            maxPlayers: 10,
            minRows: 3,
            maxRows: 10,
            minCols: 3,
            maxCols: 10,
            minWinCondition: 3,
            maxWinCondition: 10,
            // game config
            numPlayers: 2,
            rows: 3,
            cols: 3,
            winCondition: 3,
            // game state
            board: {},
            currentPlayerIndex: 0,
            isFinished: false,
            winner: null,
            status: 'In Progress',
        };
    }

    setPlayers(numPlayers) {
        this.setState({ numPlayers });
    }

    setCols(cols) {
        this.setState({ cols });
    }

    setRows(rows) {
        this.setState({ rows });
    }

    setWinCondition(winCondition) {
        this.setState({ winCondition });
    }

    makePos(row, col) {
        const pos = `${row}.${col}`;
        return pos;
    }

    placePiece(row, col) {
        if (this.state.isFinished) {
            // no more pieces can be placed after a game is finished
        } else {
            const board = this.state.board;
            const currentPlayerIndex = this.state.currentPlayerIndex;

            const pos = this.makePos(row, col);

            if (board[pos] !== undefined) {
                // cell already occupied, illegal move
            } else {
                const eligiblePieces = this.state.pieces.slice(
                    0,
                    this.state.numPlayers
                );
                const piece = eligiblePieces[currentPlayerIndex];
                board[pos] = piece;

                this.setState({
                    board,
                    currentPlayerIndex:
                        (this.state.currentPlayerIndex + 1) %
                        this.state.numPlayers,
                });

                this.updateGameState();
            }
        }
    }

    updateGameState() {
        const board = this.state.board;
        const winner = this.findWinner();
        let hasAvailableMove = false;
        for (let i = 0; i < this.state.rows && !hasAvailableMove; ++i) {
            for (let j = 0; j < this.state.cols && !hasAvailableMove; ++j) {
                const pos = this.makePos(i, j);

                if (board[pos] === undefined) {
                    hasAvailableMove = true;
                }
            }
        }

        if (winner) {
            // check for win condition
            this.setState({
                status: 'Winner',
                isFinished: true,
                winner: winner,
            });
        } else if (!hasAvailableMove) {
            // check for finished - if no more available moves, then is a draw
            this.setState({
                status: 'Draw',
                isFinished: true,
            });
        } else {
            // otherwise, status is in progress
            this.setState({
                status: 'In Progress',
                isFinished: false,
            });
        }
    }

    findWinner() {
        const winCondition = this.state.winCondition;
        const rows = this.state.rows;
        const cols = this.state.cols;
        const board = this.state.board;

        let winner = null;

        for (let i = 0; i < rows && !winner; ++i) {
            for (let j = 0; j < cols && !winner; ++j) {
                // for each "starting position", check:
                // - right (horizontal)
                // - down (vertical)
                // - left diagonal
                // - right diagonal

                // right (horizontal)
                if (j + (winCondition - 1) < cols) {
                    const candidateH = _.range(winCondition).map((k) => {
                        const pos = this.makePos(i, j + k);
                        return board[pos];
                    });
                    winner = this.checkCandidateCellsForWinner(candidateH);
                    if (winner) {
                        break;
                    }
                }

                if (i + (winCondition - 1) < rows) {
                    // down (vertical)
                    const candidateV = _.range(winCondition).map((k) => {
                        const pos = this.makePos(i + k, j);
                        return board[pos];
                    });
                    winner = this.checkCandidateCellsForWinner(candidateV);
                    if (winner) {
                        break;
                    }

                    // left diagonal
                    if (j - (winCondition - 1) >= 0) {
                        const candidateLD = _.range(winCondition).map((k) => {
                            const pos = this.makePos(i + k, j - k);
                            return board[pos];
                        });
                        winner = this.checkCandidateCellsForWinner(candidateLD);
                        if (winner) {
                            break;
                        }
                    }

                    // right diagonal
                    if (j + (winCondition - 1) < cols) {
                        const candidateRD = _.range(winCondition).map((k) => {
                            const pos = this.makePos(i + k, j + k);
                            return board[pos];
                        });
                        winner = this.checkCandidateCellsForWinner(candidateRD);
                        if (winner) {
                            break;
                        }
                    }
                }
            }
        }

        return winner;
    }

    checkCandidateCellsForWinner(pieces) {
        // returns winner if all pieces in `pieces` list are the same
        const set = new Set(pieces);
        const winner =
            set.size === 1 && pieces[0] !== undefined ? pieces[0] : null;
        return winner;
    }

    reset() {
        this.setState({
            board: {},
            currentPlayerIndex: 0,
            isFinished: false,
            status: 'In Progress',
        });
    }

    render() {
        const board = <TicTacToeBoard app={this} />;

        return (
            <div>
                Status: {this.state.status}
                {board}
                <TicTacToeControls app={this} />
            </div>
        );
    }
}

class TicTacToeBoard extends React.Component {
    render() {
        const app = this.props.app;
        const rows = app.state.rows;
        const cols = app.state.cols;

        return (
            <div
                style={{
                    border: '1px solid',
                    width: app.state.boardWidth,
                    height: app.state.boardHeight,
                    boxSizing: 'border-box',
                    margin: 'auto',
                }}
            >
                {_.range(rows).map((i) => {
                    return (
                        <div style={{ boxSizing: 'border-box', margin: 0 }}>
                            {_.range(cols).map((j) => {
                                return (
                                    <TicTacToeBoardCell
                                        row={i}
                                        col={j}
                                        app={app}
                                        board={this}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

class TicTacToeBoardCell extends React.Component {
    placePiece() {
        const app = this.props.app;
        const row = this.props.row;
        const col = this.props.col;

        app.placePiece(row, col);
    }

    render() {
        const app = this.props.app;
        const board = this.props.board;
        const row = this.props.row;
        const col = this.props.col;
        const piece = app.state.board[`${row}.${col}`] || '-';

        // TODO: remove `- 20` offset which is used as a temp workaround
        return (
            <div
                className="board-cell"
                style={{
                    width: (app.state.boardWidth - 20) / app.state.cols,
                    height: (app.state.boardHeight - 20) / app.state.rows,
                    display: 'inline-block',
                    border: '1px dashed',
                    boxSizing: 'border-box',
                    margin: 0,
                    padding: 0,
                }}
                onClick={this.placePiece.bind(this)}
            >
                {piece}
            </div>
        );
    }
}

class TicTacToeControls extends React.Component {
    setPlayers(e) {
        const players = e.target.value;
        this.props.app.setPlayers(players);
    }

    setCols(e) {
        const cols = e.target.value;
        this.props.app.setCols(cols);
    }

    setRows(e) {
        const rows = e.target.value;
        this.props.app.setRows(rows);
    }

    setWinCondition(e) {
        const winCondition = e.target.value;
        this.props.app.setWinCondition(winCondition);
    }

    reset() {
        this.props.app.reset();
    }

    render() {
        const app = this.props.app;
        const numPlayers = app.state.numPlayers;
        const rows = app.state.rows;
        const cols = app.state.cols;
        const winCondition = app.state.winCondition;

        const playersSelect = (
            <select onChange={this.setPlayers.bind(this)}>
                {_.range(app.state.minPlayers, app.state.maxPlayers + 1).map(
                    (i) => {
                        return (
                            <option value={i} selected={i == numPlayers}>
                                {i}
                            </option>
                        );
                    }
                )}
            </select>
        );
        const colSelect = (
            <select onChange={this.setCols.bind(this)}>
                {_.range(app.state.minCols, app.state.maxCols + 1).map((i) => {
                    return (
                        <option value={i} selected={i == cols}>
                            {i}
                        </option>
                    );
                })}
            </select>
        );
        const rowSelect = (
            <select onChange={this.setRows.bind(this)}>
                {_.range(app.state.minRows, app.state.maxRows + 1).map((i) => {
                    return (
                        <option value={i} selected={i == rows}>
                            {i}
                        </option>
                    );
                })}
            </select>
        );
        const winConditionSelect = (
            <select onChange={this.setWinCondition.bind(this)}>
                {_.range(
                    app.state.minWinCondition,
                    app.state.maxWinCondition + 1
                ).map((i) => {
                    return (
                        <option value={i} selected={i == winCondition}>
                            {i}
                        </option>
                    );
                })}
            </select>
        );

        return (
            <div style={{ border: '1px solid' }}>
                Num Players:
                {playersSelect}
                <br />
                Cols:
                {colSelect}
                <br />
                Rows:
                {rowSelect}
                <br />
                Win Condition:
                {winConditionSelect}
                <br />
                <button onClick={this.reset.bind(this)}>Reset</button>
            </div>
        );
    }
}
