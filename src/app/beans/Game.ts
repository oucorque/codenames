import { Action } from './action';

export class Game {

    sizex: number = 5;
    sizey: number = 5;

    words: string[sizex][sizey]; // Le tableau des mots communs
    card1: number[sizex][sizey]; // La liste des couleurs des mots du joueur 1 (0 = case jaune, 1 = case verte, 2 = case noire)
    card2: number[sizex][sizey]; // Idem joueur 2
    actions: List<Action>;

 	public initNewGame(): Game {
		allWords: string[30] = ....;
		// TODO Thomas : remplir words et card1 et 2
	}
	
    public calculateNewGame(action: Action): Game {
        if (action.isWord || action.endPlayer) {
            this.curPlayer = Game.reversePlayer(this.curPlayer);
        }
        return this;
    }

	// La liste des statuts des mots (0 si pas trouvés, 1 si vert, 2 si neutre)
	public getWordStatus(): number[sizex][sizey] {
		
	
	}
	
	public getCurPlayer(): number {
		
	}
	
	public isEnded(): boolean {
		
	}
	
    private static reversePlayer(player: number): 2 | 1 {
        if (player === 1) {
            return 2;
        } else {
            return 1;
        }
    }

}