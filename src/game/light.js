export function isPlayerInShadow(player, walls) {
  return walls.some(
    w => w.raised && w.x === player.x && w.y < player.y
  );
}
