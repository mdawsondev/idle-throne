export interface IEnemy {
  baseDamage: number,
  baseHealth: number,
  currentHealth: number,
  facing: string,
  icon: string,
  name: string
}

export interface IPlayer {
  baseDamage: number,
  baseHealth: number,
  currentHealth: number,
  icon?: string,
  name?: string
}