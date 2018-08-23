import { Action } from './action';

export class Game {

    public sizex = 5; // Variables non utilisées au final car non utilisables dans les déclarations de tableau
    public sizey = 5;

    public words: string[]; // Le tableau des mots communs
    public card1: number[]; // La liste des couleurs des mots du joueur 1 (0 = case jaune, 1 = case verte, 2 = case noire)
    public card2: number[]; // Idem joueur 2
    public actions: Array<Action>[];

    constructor() {

    }

    private static reversePlayer(player: number): 2 | 1 {
        if (player === 1) {
            return 2;
        } else {
            return 1;
        }
    }

    public static initNewGame(): Game {
        // allWords: string[30] = ....;
        // TODO Thomas : rendre dynamique le remplissage de words et card1 et 2
        const result = new Game();
        result.words = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
            'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
        result.card1 = [2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        result.card2 = [2, 1, 0, 1, 1, 1, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0];
        return result;
    }

    /**
     * Cette méthode renvoie le nouveau jeu après avoir appliqué l'action choisie
     * @param action l'action à appliquer sur le jeu en cours
     */
    public calculateNewGame(action: Action): Game {

        return this;
    }

    // La liste des statuts des mots (0 si pas trouvés, 1 si vert, 2 si neutre)
    public getWordStatus(): number[][] {
        return null; // FIXME A coder

    }

    public getCurPlayer(): number {
        return 1; // FIXME A coder
    }

    public isEnded(): boolean {
        return true; // FIXME A Coder
    }

}