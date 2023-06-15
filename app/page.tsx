
'use client'

import { useEffect, useState } from "react"


export const Button = ({index, move, board, handleClick}) => {

  // board = [0,1,2,3,4,5,6,7,8]

  const [title, setTitle] = useState(null)

  useEffect(() => {

  }, [title])


  const handleTitle = (e) => {    
    e.preventDefault()
    if(!title){
      if(move){
        board[index] = 'X'
        setTitle(board[index])
      }
      else{
        board[index] = '0'
        setTitle(board[index])

      }
      handleClick(!move, board)
    }
  }

  return (
    <button className="w-24 h-24 border border-black -mr-[1px] -mt-[1px]" onClick={handleTitle}>
      <span className="font-sans text-4xl">{board[index]}</span>
    </button>
  )
}

export default function Home() {

  const [isNextMove, setIsNextMove] = useState(true)
  const [next, setNext] = useState('X')
  const [winner, setWinner] = useState(null)
  const [board, setBoard] = useState(new Array(9).fill(null))
  const [boardHistory, setBoardHistory] = useState([new Array(9).fill(null)])
  const winMatix = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const handleWinner = (board) => {
    for(const rowItem of winMatix){
      const [a,b,c] = rowItem
      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        setWinner(board[a])
      }
    }

  }

  const handleIsNextMove = (nextMoveValue, boardValue) => {
    if(nextMoveValue){
      setNext('X')
    }else{
      setNext('O')
    }

    const copy = [...boardHistory]
    copy.push([...boardValue])
    setBoardHistory(copy)
    setIsNextMove(nextMoveValue)
    setBoard(boardValue)
    handleWinner(boardValue)
  }


  const handleBoard = (index) => {
    console.log('----------->',boardHistory)
    setBoard([...boardHistory[index]])
  }

  return (
    <main className="h-screen flex justify-center items-center bg-sky-100/50">
      <div className="bg-sky-100 w-3/6 h-5/6 rounded-xl shadow-lg shadow-sky-200 flex flex-col items-center p-6">
        <p className="text-4xl font-bold font-sans mb-6">Tic Tac Toe</p>
        <div className="flex w-full h-full bg-white rounded-xl divide-x">
          <div className="w-6/12 flex justify-center items-center">
            <div>
            { winner && <p className="text-2xl font-sans text-center mb-10">The winner is {winner}</p>}
              <div className=" flex justify-center items-center">
                <Button index={0} move={isNextMove} board={board} handleClick={handleIsNextMove}/>
                <Button index={1} move={isNextMove} board={board} handleClick={handleIsNextMove}/>
                <Button index={2} move={isNextMove} board={board} handleClick={handleIsNextMove}/>
              </div>
              <div className=" flex justify-center items-center">
                <Button index={3} move={isNextMove} board={board} handleClick={handleIsNextMove}/>
                <Button index={4} move={isNextMove} board={board} handleClick={handleIsNextMove}/>
                <Button index={5} move={isNextMove} board={board} handleClick={handleIsNextMove}/>
              </div>
              <div className=" flex justify-center items-center">
                <Button index={6} move={isNextMove} board={board} handleClick={handleIsNextMove}/>
                <Button index={7} move={isNextMove} board={board} handleClick={handleIsNextMove}/>
                <Button index={8} move={isNextMove} board={board} handleClick={handleIsNextMove}/>
              </div>
            </div>
          </div>
          <div className="w-6/12 p-10">
            <p className="text-2xl font-sans">Next move is: {next}</p>
            <div className="flex space-x-2">
            [{
              board.length && board.map((item, i) => (
                <p key={i}>{String(item)}</p>
                ))
            }]
            </div>
            <div className="flex flex-col">
              {
                boardHistory.length && boardHistory.map((item, index) => (
                  <button key={index} className="bg-blue-500 text-white px-4 py-2 mb-4 rounded" onClick={() => handleBoard(index)}>Go to next move {index}</button>
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
