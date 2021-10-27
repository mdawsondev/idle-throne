import { enemies } from "/data";
import { IEnemy } from "/modules";

export function spawnEnemy(level: number): IEnemy {
  const enemySelect = Math.floor(Math.random() * enemies.length + 1) - 1;
  const enemy = {...enemies[enemySelect]}; // Clone to prevent pointers to original items.

  enemy.damage = 1.5 * level;
  enemy.baseHealth = 2 * level;
  enemy.currentHealth = 2 * level;
  enemy.id = Math.round(Math.random() * Math.pow(10, 10));
  enemy.loot = null;

  return enemy;
}