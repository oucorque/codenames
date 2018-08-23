import { async } from '@angular/core/testing';
import { Game } from './Game';

describe('Game', () => {
    it('Init should return 25 cards', async(() => {
        const game = Game.initNewGame();
        expect(game.words.length).toEqual(25);
        expect(game.card1.length).toEqual(25);
        expect(game.card2.length).toEqual(25);
    }));
    it('Init shoud return one same black', async(() => {
        const game = Game.initNewGame();
        let sameBlack = 0;
        for (let index = 0; index < game.card1.length; index++) {
            const element1 = game.card1[index];
            const element2 = game.card2[index];
            if (element1 === 2 && element1 === element2) {
                sameBlack++;
            }
        }
        expect(sameBlack).toEqual(1);
    }));
    it('Init shoud return 3 black', async(() => {
        const game = Game.initNewGame();
        let black1 = 0;
        let black2 = 0;
        for (let index = 0; index < game.card1.length; index++) {
            const element1 = game.card1[index];
            const element2 = game.card2[index];
            if (element1 === 2) {
                black1++;
            }
            if (element2 === 2) {
                black2++;
            }
        }
        expect(black1).toEqual(3);
        expect(black2).toEqual(3);
    }));
    it('Init shoud return 3 same green words', async(() => {
        // TODO
    }));
    it('Init shoud return 1 black and green', async(() => {
        // TODO
    }));
    it('Init shoud return 1 black and yellow', async(() => {
        // TODO
    }));
    it('Init shoud return 9 green words', async(() => {
        // TODO
    }));
});
