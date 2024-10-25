const { getComputerChoice, determineWinner } = require('../rcs');

/**
 * Tests unitaires
 */
describe('rps', () => {
  describe('getComputerChoice', () => {
    it('doit retourner un choix valide', () => {
      const choice = getComputerChoice();
      expect(['pierre', 'feuille', 'ciseaux']).toContain(choice);
    });
  });

  describe('determineWinner', () => {
    it('doit retourner draw car égalité', () => {
      expect(determineWinner('pierre', 'pierre')).toBe('draw');
      expect(determineWinner('feuille', 'feuille')).toBe('draw');
      expect(determineWinner('ciseaux', 'ciseaux')).toBe('draw');
    });

    it('doit retourner le joueur gagnant', () => {
      expect(determineWinner('pierre', 'ciseaux')).toBe('player');
      expect(determineWinner('feuille', 'pierre')).toBe('player');
      expect(determineWinner('ciseaux', 'feuille')).toBe('player');
    });

    it('doit retourner l\'ordinateur gagnant', () => {
      expect(determineWinner('pierre', 'feuille')).toBe('computer');
      expect(determineWinner('feuille', 'ciseaux')).toBe('computer');
      expect(determineWinner('ciseaux', 'pierre')).toBe('computer');
    });
  });
});