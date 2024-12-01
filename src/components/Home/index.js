import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'

import {
  HomeContainer,
  HeaderContainer,
  ScoreCard,
  OptionsList,
  ResultOptionImg,
  ResultButton,
  CustomBtn,
  ResultContainer,
  ResultOptions,
  PopupBody,
  PopupImage,
  CloseButton,
  Score,
} from './styledComponents'
import Option from '../Option'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const gameStatusConstants = {
  inProgress: 'INPROGRESS',
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
}

class Home extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstants.inProgress,
    userchoice: '',
    computerchoice: '',
  }

  onSelecting = id => {
    const randomNum = Math.floor(Math.random() * 3)
    const computerSelectionId = choicesList[randomNum].id
    const winCondition =
      (id === 'ROCK' && computerSelectionId === 'SCISSORS') ||
      (id === 'SCISSORS' && computerSelectionId === 'PAPER') ||
      (id === 'PAPER' && computerSelectionId === 'ROCK')
    const drawCondtion = id === computerSelectionId
    if (winCondition) {
      this.setState(prev => ({
        gameStatus: gameStatusConstants.win,
        score: prev.score + 1,
        userchoice: id,
        computerchoice: computerSelectionId,
      }))
    } else if (drawCondtion) {
      this.setState({
        gameStatus: gameStatusConstants.draw,
        userchoice: id,
        computerchoice: computerSelectionId,
      })
    } else {
      this.setState(prev => ({
        gameStatus: gameStatusConstants.lost,
        score: prev.score - 1,
        userchoice: id,
        computerchoice: computerSelectionId,
      }))
    }
  }

  onPlayAgain = () => {
    this.setState({
      gameStatus: gameStatusConstants.inProgress,
      userchoice: '',
      computerchoice: '',
    })
  }

  renderResult = () => {
    const {gameStatus, userchoice, computerchoice} = this.state
    let heading = ''
    switch (gameStatus) {
      case gameStatusConstants.win:
        heading = 'YOU WON'
        break
      case gameStatusConstants.lost:
        heading = 'YOU LOSE'
        break
      case gameStatusConstants.draw:
        heading = 'IT IS DRAW'
        break
      default:
        heading = null
    }
    const userOption = choicesList.find(each => each.id === userchoice)
    const computerOption = choicesList.find(each => each.id === computerchoice)
    return (
      <ResultContainer>
        <ResultOptions>
          <li>
            <h1>You</h1>
            <ResultOptionImg src={userOption.imageUrl} alt="your choice" />
          </li>
          <li>
            <h1>Opponent</h1>
            <ResultOptionImg
              src={computerOption.imageUrl}
              alt="opponent choice"
            />
          </li>
        </ResultOptions>
        <p>{heading}</p>
        <CustomBtn onClick={this.onPlayAgain}>PLAY AGAIN</CustomBtn>
      </ResultContainer>
    )
  }

  renderPlaying = () => {
    return (
      <OptionsList>
        {choicesList.map(each => (
          <Option
            key={each.id}
            optionItem={each}
            onSelecting={this.onSelecting}
          />
        ))}
      </OptionsList>
    )
  }

  render() {
    const {score, gameStatus} = this.state
    const isHomePage = gameStatus === gameStatusConstants.inProgress
    return (
      <HomeContainer>
        <h1>Rock Paper Scissors</h1>
        <HeaderContainer>
          <div>
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCICCORS</p>
          </div>
          <ScoreCard>
            <p>Score</p>
            <Score>{score}</Score>
          </ScoreCard>
        </HeaderContainer>
        {isHomePage ? this.renderPlaying() : this.renderResult()}
        <Popup modal trigger={<CustomBtn type="button">RULES</CustomBtn>}>
          {close => (
            <PopupBody>
              <PopupImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
            </PopupBody>
          )}
        </Popup>
      </HomeContainer>
    )
  }
}

export default Home
