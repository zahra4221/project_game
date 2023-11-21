<template>
    <div class="rules-page">
      <h1 class="page-title">Game Rules</h1>
      
      <h2>Game Objective:</h2>
      <p>The main goal of "Brand Hunt" is to enrich players' knowledge about brands in a fun and interactive way. By participating in this game, players learn to recognize and remember various brands through a series of enjoyable challenges. These challenges stimulate creativity, memory, and team spirit, while providing an educational opportunity to better understand the world of brands and advertising. The game is designed for 4 to 8 players, playing in teams of two.</p>
  
      <h2>Necessary Materials:</h2>
      <ul>
        <li>A game board with colored squares, some marked with stars.</li>
        <li>A die.</li>
        <li>Tokens for each team.</li>
        <li>Challenge cards corresponding to each color on the board.</li>
        <li>Post-it notes.</li>
        <li>"Challenge" cards.</li>
        <li>Pens.</li>
        <li>Paper.</li>
      </ul>
  
      <h2>Determining the Starting Team:</h2>
      <p>Before starting, each team rolls the die once. The team with the lowest number starts the game.</p>
  
      <h2>Setup:</h2>
      <p>Each team places its token on the start square. Sort the cards into their respective categories.</p>
  
      <h2>Game Play:</h2>
      <ul>
        <li><strong>Roll the Die:</strong> Teams take turns rolling the die and move their token the indicated number of squares.</li>
        <li><strong>Type of Challenge:</strong> Depending on the color of the square the team lands on, they must take on a different type of challenge:</li>
        <ul>
          <li>Yellow: Guess a brand with a post-it note on the forehead.</li>
          <li>Blue: Mime a brand or product.</li>
          <li>Green: Draw a brand or product.</li>
          <li>Orange: Guess a brand from its slogan.</li>
          <li>Purple: Identify a brand from an advertisement image.</li>
          <li>Pink: Guess a brand from the description of its products.</li>
        </ul>
        <li><strong>Starred Squares and 'Challenge' Cards:</strong></li>
        <ul>
          <li>If a team lands on a starred square, they must draw a 'Challenge' card in addition to their 'color' card.</li>
          <li>The challenge can involve any aspect of the game and must be completed immediately.</li>
        </ul>
        <li><strong>Rules for Challenges:</strong></li>
        <ul>
          <li>Each challenge must be completed in less than 60 seconds.</li>
          <li>Each team takes turns, regardless of whether they win or lose.</li>
        </ul>
        <li><strong>End of the Game and Winner:</strong></li>
        <p>When a team reaches the end of the board, they face a challenge to validate their victory. The challenge is to correctly answer one question from each category within 3 minutes and 30 seconds. If the team answers incorrectly, they may redraw as long as it's within the time limit.</p>
        <li><strong>Additional Rules:</strong></li>
        <ul>
          <li>Players cannot use words or gestures that are explicitly part of the brand name or product during challenges.</li>
          <li>In case of disagreement over the validity of an answer, the other teams vote to decide.</li>
        </ul>
      </ul>
  
      <h2>Difficulty Levels:</h2>
      <ul>
        <li><strong>Beginner Level:</strong> Each challenge must be completed in less than 1 minute.</li>
        <li><strong>Intermediate Level:</strong> Each challenge must be completed in less than 45 seconds.</li>
        <li><strong>Expert Level:</strong> Each challenge must be completed in less than 30 seconds.</li>
      </ul>
      <p>These varying time constraints for different skill levels allow players to choose a difficulty setting that matches their comfort and experience, making the game accessible and challenging for everyone.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RulesPage',
  }
  </script>
  
  <style scoped>
  /* Votre style CSS pour la page de règles ici */
  .rules-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.2); /* Fond transparent */
    border: 2px solid white; /* Bordure blanche */
    border-radius: 10px;
    text-align: left;
    color: white;
  }
  
  .page-title {
    font-size: 28px;
    margin-bottom: 20px;
    color: white;
    text-align: center;
  }
  
  h2 {
    font-size: 24px;
    margin-top: 20px;
    color: white;
  }
  
  p {
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 1.5;
    color: white;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 20px;
    color: white;
  }
  
  li {
    font-size: 16px;
  }
  
  </style>
  