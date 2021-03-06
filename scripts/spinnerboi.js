var tile_instance_sp = {};

const spnbLaunchEffect = newEffect(50, e => {
    var i = 3;
    Draw.color(Color.white, Color.cyan, e.fin());
    Lines.stroke(e.fout() * 5);
    var key = e.x + "," + e.y;
    if(tile_instance_sp[key] === undefined){
        tile_instance_sp[key] = 0;
    }
    Lines.poly(e.x, e.y, i, e.fin() * 50, tile_instance_sp[key]);
    tile_instance_sp[key]++;
});

var cd = 60;
var lvl = 1;
var cd = 60;
const spnb = extendContent(Block, "spinboi", {
    update(tile) {
        //when health is lower than max health
        if (1 < 2) {
            //cooldown of 60 ticks
            if (cd > 0) {
                cd--;
            }
            else {
                cd = 60;
                tile.entity.health += 5;
                Effects.effect(spnbLaunchEffect, tile);
            }
        }
    }
})
