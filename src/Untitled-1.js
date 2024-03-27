    
    // REVIEW THESE TO UNDERSTAND WHERE YOU WENT WRONG!!
    
    
    // const updateLetterTiles = (userAnswer) => {

    //     const updatedTiles = [...letterTiles];

    //     for (let i = 0; i < userAnswer.length && i < updatedTiles.length; i++) {

    //         if (userAnswer[i].toUpperCase() === currentWord[i].toUpperCase()) {
    //             updatedTiles[i].isGuessed = true;
    //         }

    //     }

    //     setLetterTiles(updatedTiles);

    // };



    const updateLetterTiles = (userAnswer) => {

      const updatedTiles = letterTiles.map(tile => ({
          ...tile,
          isGuessed: userAnswer.charAt(tile.id) === tile.letter,
      }));

      setLetterTiles(updatedTiles);

  };




    
    const renderLetterTiles = () => {

        console.log(letterTiles)

        return letterTiles.map((tile) => (

          <LetterTiles key={tile.id} letter={tile.letter} isGuessed={tile.isGuessed} />

        ));

    };