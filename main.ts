player.onChat("POLO", function () {
    builder.teleportTo(pos(0, 0, 0))
    builder.mark()
    builder.raiseWall(PURPLE_GLAZED_TERRACOTTA + color_number, 20)
})
let color_number = 0
color_number = Math.randomRange(0, 15)
